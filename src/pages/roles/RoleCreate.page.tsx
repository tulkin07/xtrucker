import { ActionIcon, Checkbox, Flex, Group, Stack, Text, TextInput } from '@mantine/core';
import Icon from '@/components/icons/Icon.component';
import topbarClasses from '@/components/layout/dashboard/styles/Topbar.module.scss';
import TopbarLayout from '@/components/layout/dashboard/Topbar.layout';
import ModifiedTableComponent from '@/components/table/Table.component';
import { PERMISSIONS_DATA, ROLES_DATA } from '@/consts';

const RoleCreatePage = () => {
  return (
    <Stack p="16px 8px 16px 8px" h="100%">
      <TopbarLayout
        title={
          <Group gap={8} align="center">
            <ActionIcon variant="subtle">
              <Icon icon="i_arrow_back" width="32px" height="32px" />
            </ActionIcon>
            <Text fz={20} fw={700} lh="140%">
              Create role
            </Text>
          </Group>
        }
        disable_search
      />
      <Stack component="main" gap={16}>
        <Flex className={topbarClasses.topbar_searchbar}>
          <TextInput
            size="sm"
            variant="default"
            placeholder="Search permissions"
            miw={278}
            h={36}
            classNames={{ input: topbarClasses.search_input }}
            radius="6px 0 0 6px"
          />
          <ActionIcon
            size="lg"
            variant="outline"
            color="#E5E7EB"
            h={36}
            className={topbarClasses.search_btn}
          >
            <Icon icon="i_search" width="16px" height="16px" />
          </ActionIcon>
        </Flex>
        <TextInput maw={320} label="Role name" value={ROLES_DATA[0].name} placeholder="Type..." />
        <ModifiedTableComponent
          paperProps={{
            withBorder: true,
            radius: 8,
            mah: 'calc(100vh - 163px)',
            style: {
              overflow: 'auto',
            },
          }}
          data={PERMISSIONS_DATA}
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
              key: 'create',
              label: 'Create',
              render() {
                return (
                  <Group justify="center">
                    <Checkbox w={16} h={16} color="dark" />
                  </Group>
                );
              },
            },
            {
              key: 'read',
              label: 'Read',
              render() {
                return (
                  <Group justify="center">
                    <Checkbox w={16} h={16} color="dark" />
                  </Group>
                );
              },
            },
            {
              key: 'update',
              label: 'Update',
              render() {
                return (
                  <Group justify="center">
                    <Checkbox w={16} h={16} color="dark" />
                  </Group>
                );
              },
            },
            {
              key: 'delete',
              label: 'Delete',
              render() {
                return (
                  <Group justify="center">
                    <Checkbox w={16} h={16} color="dark" />
                  </Group>
                );
              },
            },
          ]}
        />
      </Stack>
    </Stack>
  );
};

export default RoleCreatePage;
