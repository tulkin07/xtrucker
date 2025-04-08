import { useCallback, useState } from 'react';
import { Badge, Button, Checkbox, Group, Select, Stack, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import BottomBreadcrumbComponent from '@/components/bottom-breadcrumb/BottomBreadcrumb.component';
import EmployeeCreateDrawer from '@/components/drawers/employees/EmployeeCreate.drawer';
import Icon from '@/components/icons/Icon.component';
import TopbarLayout from '@/components/layout/dashboard/Topbar.layout';
import ModifiedTableComponent from '@/components/table/Table.component';
import EmployeeActions from '@/components/top-actions/Employee.actions';
import { EMPLOYEES_DATA } from '@/consts';
import { IEmployee } from '@/interfaces';

const EmployeesPage = () => {
  const [selectedRecords, setSelectedRecords] = useState<Record<keyof IEmployee, unknown>[]>([]);

  const handleSelectedRecordsChange = useCallback(
    (newSelectedRecords: Record<keyof IEmployee, unknown>[]) => {
      setSelectedRecords(newSelectedRecords);
    },
    []
  );
  const [openCreateDrawer, { open, close }] = useDisclosure(false);
  return (
    <>
      <Stack p="16px 8px 16px 8px" h="100%">
        <TopbarLayout title="Employees" />
        <Stack component="main" gap={16}>
          {!selectedRecords.length && (
            <Group justify="space-between">
              <Select
                value="ready"
                placeholder="By roles"
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
              <Button
                color="sky.8"
                radius={10}
                onClick={open}
                leftSection={<Icon icon="i_plus" width="18px" height="18px" color="#fff" />}
              >
                Create employee
              </Button>
            </Group>
          )}
          {!!selectedRecords.length && (
            <EmployeeActions
              clearFields={() => handleSelectedRecordsChange([])}
              items={selectedRecords}
            />
          )}
          <ModifiedTableComponent
            paperProps={{
              withBorder: true,
              radius: 8,
              mah: 'calc(100vh - 163px)',
              style: {
                overflow: 'auto',
              },
            }}
            data={EMPLOYEES_DATA}
            columns={[
              {
                key: 'actions',
                label() {
                  return (
                    <Checkbox
                      color="dark"
                      checked={selectedRecords.length === EMPLOYEES_DATA.length}
                      onChange={(e) => {
                        if (e.target.checked) {
                          handleSelectedRecordsChange(EMPLOYEES_DATA);
                        } else {
                          handleSelectedRecordsChange([]);
                        }
                      }}
                    />
                  );
                },
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
                label: 'Name & Phone number',
                render(item) {
                  return (
                    <Stack gap={0}>
                      <Text fz={12} lh="140%" fw={400} c="neutral.9">
                        {item.name}
                      </Text>
                      <Text fz={12} lh="140%" fw={400} c="blue.4">
                        {item.phone_number}
                      </Text>
                    </Stack>
                  );
                },
              },
              {
                key: 'email',
                label: 'Email address',
                render(item) {
                  return (
                    <Text fz={12} lh="140%" fw={400} c="neutral.9">
                      {item.email}
                    </Text>
                  );
                },
              },
              {
                key: 'role',
                label: 'Role',
                render(item) {
                  return (
                    <Badge
                      color="#BFDBFE"
                      variant="outline"
                      bg="#EFF6FF"
                      radius={6}
                      c="#1D4ED8"
                      fz={12}
                      lh="140%"
                      fw={400}
                    >
                      {item.role}
                    </Badge>
                  );
                },
              },
            ]}
          />
        </Stack>
      </Stack>
      <BottomBreadcrumbComponent
        items={[
          { title: 'Dashboard', href: '/admin-dashboard' },
          { title: 'Employees', href: '#' },
        ]}
      />
      <EmployeeCreateDrawer open={openCreateDrawer} close={close} />
    </>
  );
};

export default EmployeesPage;
