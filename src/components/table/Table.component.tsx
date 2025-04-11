import { useState } from 'react';
import classes from './table.module.scss';
import {
  ActionIcon,
  Button,
  Collapse,
  Group,
  Loader,
  Menu,
  Pagination,
  Paper,
  PaperProps,
  Select,
  Stack,
  Table,
  Text,
} from '@mantine/core';
import { loadStatusColorMap } from '@/constants/status.constant';
import Icon from '../icons/Icon.component';

// Helper function to get value from nested path
function getNestedValue<T>(obj: T, path: string): any {
  return path.split('.').reduce((acc: any, part: string) => {
    if (acc === null || acc === undefined) {
      return '';
    }

    // Handle array access
    if (part.includes('[') && part.includes(']')) {
      const arrayPath = part.split('[');
      const arrayKey = arrayPath[0];
      const arrayIndex = parseInt(arrayPath[1].replace(']', ''), 2);
      return acc[arrayKey]?.[arrayIndex];
    }

    return acc[part];
  }, obj);
}

interface ModifiedTableComponentProps<T> {
  data: T[];
  columns: Column<T>[];
  actions?: Action<T>[];
  page?: number;
  pageSize?: number;
  total?: number;
  onPageChange?: (page: number) => void;
  onPageSizeChange?: (pageSize: string | null) => void;
  rowClick?: (type: 'create' | 'view', value: number) => void;
  loading?: boolean;
  emptyMessage?: string;
  paperProps?: PaperProps;
  // New props for nested tables
  getChildRows?: (parentRow: T) => any[] | null | undefined;
  childColumns?: Column<any>[];
  childTitle?: (parentRow: T) => string | null;
  childActions?: Action<any>[];
  onRowClick?: (rowId: string | number) => void;
  expandedRowId?: string | number | null;
}

const ModifiedTableComponent = <T extends { id: number | string }>({
  data,
  columns,
  actions,
  page,
  pageSize,
  total,
  onPageChange,
  onPageSizeChange,
  rowClick,
  loading = false,
  paperProps = {},
  emptyMessage = 'No data found',
  // New props for nested tables
  getChildRows,
  childColumns,
  childTitle,
  childActions,
  onRowClick,
  expandedRowId,
}: ModifiedTableComponentProps<T>) => {
  // State to track which rows are expanded
  const [expandedRows, setExpandedRows] = useState<Record<string | number, boolean>>({});
  const [nestedRowExpanded, setNestedRowExpanded] = useState<boolean>(false);

  // Toggle row expansion if no external control is provided
  const toggleRow = (rowId: string | number) => {
    if (onRowClick) {
      onRowClick(rowId);
    } else {
      setExpandedRows((prev) => ({
        ...prev,
        [rowId]: !prev[rowId],
      }));
      setNestedRowExpanded((prev) => {
        if (prev && !expandedRows[rowId]) {
          return false;
        }
        return true;
      });
    }
  };

  // Check if a row is expanded
  const isRowExpanded = (rowId: string | number) => {
    if (expandedRowId !== undefined) {
      return expandedRowId === rowId;
    }
    return expandedRows[rowId] || false;
  };

  const EmptyState = () => (
    <Stack pos="absolute" left="50%" top="50%" mx="auto">
      <Stack justify="center" align="center">
        <Icon icon="i_empty_box" width="36px" height="36px" />
        <Text>{emptyMessage}</Text>
      </Stack>
    </Stack>
  );

  const LoadingState = () => {
    return (
      <Stack pos="absolute" left="50%" top="50%" mx="auto">
        <Loader />
      </Stack>
    );
  };

  const renderCell = (item: T | any, column: Column<T | any>, isChildRow: boolean = false) => {
    if (column.key === 'actions' && (isChildRow ? childActions : actions)) {
      const rowActions = isChildRow ? childActions : actions;

      return (
        <Menu position="bottom-end" withArrow>
          <Menu.Target>
            <ActionIcon variant="subtle" color="red" onClick={(e) => e.stopPropagation()}>
              <Icon icon="i_more_horizon" color="#000000" width="14px" height="14px" />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown className="rounded-lg min-w-[180px] p-1 shadow-lg">
            {rowActions?.map((action, index) => {
              const disabled = action.disabled && action.disabled(item);
              const icon = action.icon(item);
              const label = typeof action.label === 'string' ? action.label : action.label(item);
              return (
                <Menu.Item
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    action.onClick(item);
                  }}
                  leftSection={icon}
                  disabled={disabled}
                >
                  {label}
                </Menu.Item>
              );
            })}
          </Menu.Dropdown>
        </Menu>
      );
    }

    if (column.render) {
      return column.render(item);
    }

    const value = getNestedValue(item, column.key as string);

    // Handle image URLs
    if (typeof value === 'string' && (value.startsWith('http') || value.startsWith('/'))) {
      return <img src={value} alt="thumbnail" className="w-[60px] h-[40px] rounded object-cover" />;
    }

    return String(value ?? '---');
  };

  // Render child table - updated to handle array-based children structure
  const renderChildTable = (parentItem: T) => {
    const childRows = getChildRows ? getChildRows(parentItem) : null;

    if (!childRows || childRows.length === 0) {
      return (
        <Text p="md" c="gray.6" fz="sm">
          No child records found.
        </Text>
      );
    }

    const columnsToUse = childColumns || columns;
    const title = childTitle ? childTitle(parentItem) : null;

    return (
      <div className={classes.child_table_wrapper}>
        {title && (
          <Group
            gap={8}
            p={8}
            className={classes.children_title_wrapper}
            onClick={() => setNestedRowExpanded((prev) => !prev)}
          >
            <ActionIcon variant="subtle">
              <Icon
                icon="i_icon_bottom"
                width="14px"
                height="14px"
                style={{
                  transform: nestedRowExpanded ? 'rotate(0deg)' : 'rotate(180deg)',
                  transition: 'transform 300ms ease',
                }}
              />
            </ActionIcon>
            <Text c="blue.5" fz={12} lh="140%" fw={400}>
              {title}
            </Text>
          </Group>
        )}
        <Collapse in={nestedRowExpanded}>
          <Table withColumnBorders withRowBorders>
            <Table.Thead>
              <Table.Tr>
                {columnsToUse.map((column) => {
                  const label = typeof column.label === 'string' ? column.label : column.label();
                  return (
                    <Table.Th
                      key={String(column.key)}
                      bg="neutral.0"
                      styles={{
                        th: {
                          whiteSpace: 'nowrap',
                          cursor: 'pointer',
                          minWidth: 'fit-content',
                          flexWrap: 'nowrap',
                        },
                      }}
                    >
                      <Group justify="space-between" align="center" wrap="nowrap">
                        <Text fz={12} fw={400} lh="140%" c="zinc.5">
                          {label}
                        </Text>
                        {column.sortable && (
                          <ActionIcon size="xs" variant="subtle" color="zinc.5">
                            <Icon icon="i_filter" width="14px" height="14px" color="#71717A" />
                          </ActionIcon>
                        )}
                      </Group>
                    </Table.Th>
                  );
                })}
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              <Table.Tr>
                <Table.Td colSpan={columnsToUse.length}>
                  <Button
                    size="xs"
                    leftSection={<Icon icon="i_plus" width="14px" height="14px" color="#2563EB" />}
                    variant="subtle"
                    color="blue"
                    fullWidth
                    style={{ display: 'flex', justifyContent: 'start' }}
                  >
                    Add documents
                  </Button>
                </Table.Td>
              </Table.Tr>
              {childRows.map((childItem, index) => {
                const bgColor =
                  loadStatusColorMap[
                    ((childItem as any)?.status ?? null) as keyof typeof loadStatusColorMap
                  ];
                // Generate a unique ID for child rows that don't have their own
                const childId = childItem.id || `${parentItem.id}-child-${index}`;

                return (
                  <Table.Tr key={childId} bg="white">
                    {columnsToUse.map((column) => (
                      <Table.Td
                        bg={bgColor?.bg ?? '#fff'}
                        key={`${childId}-${String(column.key)}`}
                        className="whitespace-nowrap"
                        style={{
                          ...(column.key === 'actions' && { width: '32px' }),
                          whiteSpace: 'nowrap',
                          ...(bgColor && {
                            backgroundColor: bgColor.bg,
                          }),
                        }}
                      >
                        {renderCell(childItem, column, true)}
                      </Table.Td>
                    ))}
                  </Table.Tr>
                );
              })}
            </Table.Tbody>
          </Table>
        </Collapse>
      </div>
    );
  };

  return (
    <Paper {...paperProps}>
      <Table withColumnBorders withRowBorders stickyHeader>
        <Table.Thead>
          <Table.Tr>
            {columns.map((column) => {
              const label = typeof column.label === 'string' ? column.label : column.label();

              return (
                <Table.Th
                  key={String(column.key)}
                  bg="neutral.0"
                  styles={{
                    th: {
                      whiteSpace: 'nowrap',
                      cursor: 'pointer',
                      minWidth: 'fit-content',
                      flexWrap: 'nowrap',
                    },
                  }}
                >
                  <Group justify="space-between" align="center" wrap="nowrap">
                    <Text fz={12} fw={400} lh="140%" c="zinc.5">
                      {label}
                    </Text>
                    {column.sortable && (
                      <ActionIcon size="xs" variant="subtle" color="zinc.5">
                        <Icon icon="i_filter" width="14px" height="14px" color="#71717A" />
                      </ActionIcon>
                    )}
                  </Group>
                </Table.Th>
              );
            })}
          </Table.Tr>
        </Table.Thead>
        {loading && <LoadingState />}
        {!loading && !data.length && <EmptyState />}

        {Boolean(data.length > 0) && (
          <Table.Tbody>
            {data.map((item) => {
              const bgColor =
                loadStatusColorMap[
                  ((item as any)?.status ?? null) as keyof typeof loadStatusColorMap
                ];

              return (
                <Table.Tr
                  key={item.id}
                  bg="red.1"
                  onClick={() => {
                    if (rowClick) {
                      rowClick('view', typeof item.id === 'string' ? parseInt(item.id) : item.id);
                    }
                  }}
                >
                  {columns.map((column) => (
                    <Table.Td
                      bg={bgColor?.bg ?? '#fff'}
                      key={`${item.id}-${String(column.key)}`}
                      className="whitespace-nowrap"
                      style={{
                        ...(column.key === 'actions' && { width: '32px' }),
                        whiteSpace: 'nowrap',
                        ...(bgColor && {
                          backgroundColor: bgColor.bg,
                        }),
                      }}
                    >
                      <Table.Td
                        colSpan={columns.length}
                        p={0}
                        style={{
                          borderBottom: isRowExpanded(item.id)
                            ? 'calc(0.0625rem * var(--mantine-scale)) solid var(--table-border-color)'
                            : 'none',
                        }}
                      >
                        <Collapse in={isRowExpanded(item.id)}>{renderChildTable(item)}</Collapse>
                      </Table.Td>
                    </Table.Td>
                  ))}
                </Table.Tr>
              );
            })}
          </Table.Tbody>
        )}
      </Table>

      {Boolean(page && pageSize && total) && (
        <Group className={classes.pagination__root__wrapper}>
          <Group>
            <Select
              size="xs"
              placeholder="Rows per page"
              value={String(pageSize)}
              onChange={onPageSizeChange}
              data={['10', '25', '50', '100', '200']}
              comboboxProps={{
                position: 'top',
                middlewares: { flip: false, shift: false },
              }}
            />
            <Pagination
              size="sm"
              total={total ?? 0}
              value={page}
              onChange={onPageChange}
              siblings={1}
            />
          </Group>
        </Group>
      )}
    </Paper>
  );
};

export default ModifiedTableComponent;
