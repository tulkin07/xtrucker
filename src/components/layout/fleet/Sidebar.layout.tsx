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
          title="Fleet management"
          links={[
            { icon: 'i_map', label: 'Overview', path: '/fleet-dashboard' },
            {
              icon: 'i_truck_line',
              label: 'Trucks',
              path: '/fleet-dashboard/trucks',
            },
            { icon: 'i_rv_hookup', label: 'Trailers', path: '/fleet-dashboard/trailers' },
            { icon: 'i_tools_fill', label: 'Maintenance', path: '/fleet-dashboard/maintenance' },
          ]}
        />
      </Stack>
    </Stack>
  );
};

export default SidebarLayout;
