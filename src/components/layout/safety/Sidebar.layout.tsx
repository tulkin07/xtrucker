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
          title="Safety"
          links={[
            {
              icon: 'i_table',
              label: 'Log book',
              path: '/safety-dashboard',
            },
            {
              icon: 'i_shield_check',
              label: 'Safety tasks',
              path: '/safety-dashboard/safety-tasks',
            },
            {
              icon: 'i_truck_line',
              label: 'Trucks',
              path: '/safety-dashboard/trucks',
            },
            {
              icon: 'i_calendar_schedule',
              label: 'Expirations calendar',
              path: '/safety-dashboard/expiration-calendar',
            },
          ]}
        />
      </Stack>
    </Stack>
  );
};

export default SidebarLayout;
