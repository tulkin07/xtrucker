import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ActionIcon, Button, Checkbox, Chip, Group, Select, Stack, Text } from '@mantine/core';
import BottomBreadcrumbComponent from '@/components/bottom-breadcrumb/BottomBreadcrumb.component';
import Icon from '@/components/icons/Icon.component';
import TopbarLayout from '@/components/layout/dashboard/Topbar.layout';
import ModifiedTableComponent from '@/components/table/Table.component';
import { DRIVER_STATEMENTS_DATA } from '@/consts';
import { IDriverStatements } from '@/interfaces';

const DriverStatementsPage = () => {
  const [selectedRecords, setSelectedRecords] = useState<Record<string, unknown>[]>([]);

  const handleSelectedRecordsChange = useCallback(
    (newSelectedRecords: Record<keyof IDriverStatements, unknown>[]) => {
      setSelectedRecords(newSelectedRecords);
    },
    []
  );

  const navigate = useNavigate();

  const createStatement = () => {
    navigate('/driver-statement/create');
  };

  return (
    <>
      <Stack p="16px 8px 16px 8px" h="100%">
        <TopbarLayout title="Driver Statements" />
        <Stack component="main" gap={16}>
          <Group justify="space-between" align="center">
            <Group align="end">
              <Select
                value="ready"
                placeholder="Ready"
                data={['ready', 'reserved']}
                radius={6}
                color="#D1D5DB"
                styles={{
                  input: {
                    height: '40px',
                    borderColor: '#D1D5DB',
                  },
                }}
              />
              <ActionIcon h={40} w={40} variant="outline" color="#D1D5DB" radius={6}>
                <Icon icon="i_calendar" width="20px" height="20px" />
              </ActionIcon>
              <Chip.Group>
                <Group justify="center">
                  <Chip
                    variant="outline"
                    icon={false}
                    styles={{
                      checkIcon: {
                        display: 'none',
                      },
                      iconWrapper: {
                        display: 'none',
                      },
                      label: {
                        padding: '10px',
                      },
                    }}
                    radius={6}
                    color="blue.4"
                    value="1"
                  >
                    1W
                  </Chip>
                  <Chip
                    variant="outline"
                    icon={false}
                    styles={{
                      checkIcon: {
                        display: 'none',
                      },
                      iconWrapper: {
                        display: 'none',
                      },
                      label: {
                        padding: '10px',
                      },
                    }}
                    radius={6}
                    color="blue.4"
                    value="2"
                  >
                    2W
                  </Chip>
                  <Chip
                    variant="outline"
                    icon={false}
                    styles={{
                      checkIcon: {
                        display: 'none',
                      },
                      iconWrapper: {
                        display: 'none',
                      },
                      label: {
                        padding: '10px',
                      },
                    }}
                    radius={6}
                    color="blue.4"
                    value="3"
                  >
                    1M
                  </Chip>
                  <Chip
                    variant="outline"
                    icon={false}
                    styles={{
                      checkIcon: {
                        display: 'none',
                      },
                      iconWrapper: {
                        display: 'none',
                      },
                      label: {
                        padding: '10px',
                      },
                    }}
                    radius={6}
                    color="blue.4"
                    value="4"
                  >
                    1Y
                  </Chip>
                </Group>
              </Chip.Group>
            </Group>
            <Button
              color="sky.8"
              radius={10}
              onClick={createStatement}
              leftSection={<Icon icon="i_plus" width="16px" height="16px" color="#fff" />}
            >
              Create statement
            </Button>
          </Group>
          <ModifiedTableComponent
            data={DRIVER_STATEMENTS_DATA}
            paperProps={{
              withBorder: true,
              radius: 8,
              mah: 'calc(100vh - 163px)',
              style: {
                overflow: 'auto',
              },
            }}
            columns={[
              {
                label: () => {
                  return (
                    <Checkbox
                      color="dark"
                      checked={selectedRecords.length === DRIVER_STATEMENTS_DATA.length}
                      onChange={(e) => {
                        if (e.target.checked) {
                          handleSelectedRecordsChange(DRIVER_STATEMENTS_DATA);
                        } else {
                          handleSelectedRecordsChange([]);
                        }
                      }}
                    />
                  );
                },
                key: 'actions',
                render(item) {
                  return (
                    <Checkbox
                      color="dark"
                      checked={Boolean(selectedRecords.find((selected) => selected.id === item.id))}
                      onChange={(e) => {
                        if (e.target.checked) {
                          const newRecords = [...selectedRecords, item];
                          handleSelectedRecordsChange(newRecords);
                        } else {
                          const filteredRecords = selectedRecords.filter(
                            (selected) => selected.id !== item.id
                          );
                          handleSelectedRecordsChange(filteredRecords);
                        }
                      }}
                    />
                  );
                },
              },
              {
                key: 'name',
                label: 'Driver Name',
              },
              {
                key: 'week_range',
                label: 'Week Range',
              },
              {
                key: 'total_earn',
                label: 'DOT Number',
              },
              {
                key: 'deductions',
                label: 'Deductions',
              },
              {
                key: 'net_pay',
                label: 'Net Pay',
              },
              {
                key: 'status',
                label: 'Status',
                render(item) {
                  return (
                    <Text fz={12} lh="140%" fw={400}>
                      {item.status}
                    </Text>
                  );
                },
              },
            ]}
          />
        </Stack>
      </Stack>
      <BottomBreadcrumbComponent
        items={[
          { title: 'Dashboard', href: '/accounting-dashboard' },
          { title: 'Driver Statements', href: '#' },
        ]}
      />
    </>
  );
};

export default DriverStatementsPage;
