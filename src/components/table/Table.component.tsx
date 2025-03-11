import classes from './table.module.scss';
import {
  ActionIcon,
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
      // GOOD
      const arrayPath = part.split('[');
      const arrayKey = arrayPath[0];
      // GOOD
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
  loading?: boolean;
  emptyMessage?: string;
  paperProps?: PaperProps;
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
  loading = false,
  paperProps = {},
  emptyMessage = 'No data found',
}: ModifiedTableComponentProps<T>) => {
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

  const renderCell = (item: T, column: Column<T>) => {
    if (column.key === 'actions' && actions) {
      return (
        <Menu position="bottom-end" withArrow>
          <Menu.Target>
            <ActionIcon variant="filled" color="gray">
              <Icon icon="i_more_horizon" />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown className="rounded-lg min-w-[180px] p-1 shadow-lg">
            {actions.map((action, index) => {
              const disabled = action.disabled && action.disabled(item);
              const icon = action.icon(item);
              const label = typeof action.label === 'string' ? action.label : action.label(item);
              return (
                <Menu.Item
                  key={index}
                  onClick={() => action.onClick(item)}
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

  return (
    <Paper {...paperProps}>
      <Table withColumnBorders withRowBorders stickyHeader>
        <Table.Thead>
          <Table.Tr>
            {columns.map((column) => (
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
                    {column.label}
                  </Text>
                  {column.sortable && (
                    <ActionIcon size="xs" variant="subtle" color="zinc.5">
                      <Icon icon="i_filter" width="14px" height="14px" color="#71717A" />
                    </ActionIcon>
                  )}
                </Group>
              </Table.Th>
            ))}
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
                <Table.Tr key={item.id} bg="red.1">
                  {columns.map((column) => (
                    <Table.Td
                      bg={bgColor?.bg ?? ''}
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
                      {renderCell(item, column)}
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
