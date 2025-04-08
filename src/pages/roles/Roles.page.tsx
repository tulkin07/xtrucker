import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Group, Select, Stack, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import RoleViewDrawer from '@/components/drawers/roles/RoleView.drawer';
import Icon from '@/components/icons/Icon.component';
import TopbarLayout from '@/components/layout/dashboard/Topbar.layout';
import ModifiedTableComponent from '@/components/table/Table.component';
import RoleActions from '@/components/top-actions/Roles.actions';
import { ROLES_DATA } from '@/consts';
import { IRole } from '@/interfaces';

const RolesPage = () => {
  const [selectedRecords, setSelectedRecords] = useState<Record<keyof IRole, unknown>[]>([]);
  const navigate = useNavigate();

  const handleSelectedRecordsChange = useCallback(
    (newSelectedRecords: Record<keyof IRole, unknown>[]) => {
      setSelectedRecords(newSelectedRecords);
    },
    []
  );
  const [openCreateDrawer, { open, close }] = useDisclosure(false);
  return (
    <>
      <Stack p="16px 8px 16px 8px" h="100%">
        <TopbarLayout title="Roles" />
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
                onClick={() => navigate('/admin-dashboard/roles/create')}
                leftSection={<Icon icon="i_plus" width="18px" height="18px" color="#fff" />}
              >
                Create role
              </Button>
            </Group>
          )}
          {!!selectedRecords.length && (
            <RoleActions
              clearFields={() => handleSelectedRecordsChange([])}
              openEdit={open}
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
            data={ROLES_DATA}
            columns={[
              {
                key: 'actions',
                label() {
                  return (
                    <Checkbox
                      color="dark"
                      checked={selectedRecords.length === ROLES_DATA.length}
                      onChange={(e) => {
                        if (e.target.checked) {
                          handleSelectedRecordsChange(ROLES_DATA);
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
                key: 'id',
                label: 'ID',
                width: '0%',
                render(item) {
                  return (
                    <Text fz={12} fw={400} lh="140%" c="neutral.9">
                      {item.id ?? '---'}
                    </Text>
                  );
                },
              },
              {
                key: 'id',
                label: 'Role name',
                render(item) {
                  return (
                    <Text fz={12} fw={400} lh="140%" c="neutral.9">
                      {item.name ?? '---'}
                    </Text>
                  );
                },
              },
              {
                key: 'id',
                label: 'Permissions',
                render(item) {
                  const permission_count = item.permissions.reduce((acc, curr) => {
                    const res = acc + curr.values.length;
                    return res;
                  }, 0);
                  return (
                    <Text fz={12} fw={400} lh="140%" c="neutral.9">
                      {permission_count} permissions
                    </Text>
                  );
                },
              },
            ]}
          />
        </Stack>
      </Stack>
      <RoleViewDrawer open={openCreateDrawer} close={close} />
    </>
  );
};

export default RolesPage;
