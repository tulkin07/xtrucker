import { ActionIcon, Button, Group, Stack, Text, TextInput } from '@mantine/core';
import Icon from '@/components/icons/Icon.component';
import ModifiedTableComponent from '@/components/table/Table.component';
import { ROLES_DATA } from '@/consts';
import ModifiedDrawerComponent from '../ModifiedDrawer.component';

type RoleViewDrawerProps = {
  open: boolean;
  close: () => void;
};

const RoleViewDrawer: React.FC<RoleViewDrawerProps> = (props) => {
  const { close, open } = props;
  return (
    <ModifiedDrawerComponent
      opened={open}
      onClose={close}
      title="Create role"
      size={532}
      footerContent={
        <Group
          pos="fixed"
          bottom={0}
          gap="sm"
          px={12}
          py={9}
          justify="space-between"
          w="100%"
          style={{
            borderTop: `1px solid var(--mantine-color-stone-1)`,
          }}
        >
          <Button radius={10} color="gray.2" c="neutral.9" onClick={close}>
            Close
          </Button>
          <Button radius={10} color="sky.8">
            Edit role
          </Button>
        </Group>
      }
    >
      <Stack gap={16}>
        <Text c="zinc.8" fz={20} lh="140%" fw={700}>
          Permissions
        </Text>
        <TextInput label="Role name" value={ROLES_DATA[0].name} placeholder="Type..." />

        <ModifiedTableComponent
          data={ROLES_DATA[0].permissions}
          columns={[
            {
              key: 'name',
              label: 'Name',
              render(item) {
                return (
                  <Text fz={12} fw={400} lh="140%" c="neutral.9">
                    {item.name}
                  </Text>
                );
              },
            },
            {
              key: 'permissions',
              label: 'Name',
              render(item) {
                return (
                  <Group gap={16}>
                    {item.values.map((item) => {
                      if (item === 'create') {
                        return (
                          <ActionIcon variant="subtle">
                            <Icon icon="i_create_permission" width="20px" height="20px" />
                          </ActionIcon>
                        );
                      }
                      if (item === 'read') {
                        return (
                          <ActionIcon variant="subtle">
                            <Icon icon="i_view_permission" width="20px" height="20px" />
                          </ActionIcon>
                        );
                      }
                      if (item === 'update') {
                        return (
                          <ActionIcon variant="subtle">
                            <Icon icon="i_edit_permission" width="20px" height="20px" />
                          </ActionIcon>
                        );
                      }
                      return (
                        <ActionIcon variant="subtle">
                          <Icon icon="i_delete_permission" width="20px" height="20px" />
                        </ActionIcon>
                      );
                    })}
                  </Group>
                );
              },
            },
          ]}
          paperProps={{
            withBorder: true,
            radius: 8,
            mah: 'calc(100vh - 163px)',
            style: {
              overflow: 'auto',
            },
          }}
        />
      </Stack>
    </ModifiedDrawerComponent>
  );
};

export default RoleViewDrawer;
