import { Group, Stack } from '@mantine/core';
import Icon from '@/components/icons/Icon.component';
import NavSection from '@/components/layout/dashboard/extra-components/Nav.section';
import classes from '@/components/layout/dashboard/styles/Sidebar.module.scss';

const SidebarLayout = () => {
  return (
    <Stack gap={0} className={classes.dashbaord_sidebar} left={72}>
      <Group p={12} className={classes.sidebar_logo_wrapper}>
        <Icon icon="i_xtrucker" width="136.35px" height="32px" />
      </Group>
      <Stack p={12} gap={12}>
        <NavSection
          title="Admin panel"
          links={[
            {
              icon: 'i_user_group_outline',
              label: 'User management',
              path: '/admin-dashboard',
              children: [
                {
                  icon: 'i_user_shadow',
                  label: 'Employees',
                  path: '/admin-dashboard/employees',
                },
                { icon: 'i_user_settings', label: 'Roles', path: '/admin-dashboard/roles' },
              ],
            },
          ]}
        />
      </Stack>
    </Stack>
  );
};

export default SidebarLayout;
