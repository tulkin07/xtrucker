import classes from './styles/Sidebar.module.scss';
import { Button, Group, Stack } from '@mantine/core';
import Icon from '@/components/icons/Icon.component';
import NavSection from './extra-components/Nav.section';

const SidebarLayout = () => {
  return (
    <Stack gap={0} className={classes.dashbaord_sidebar}>
      <Group p={12} className={classes.sidebar_logo_wrapper}>
        <Icon icon="i_xtrucker" width="136.35px" height="32px" />
      </Group>
      <Stack p={12} gap={12}>
        <Button color="#0C4A6E" size="md" radius={10}>
          Create load
        </Button>
        <NavSection
          title="Dispatcher menu"
          links={[
            { icon: 'i_cube', label: 'Load management', path: '/dashboard' },
            {
              icon: 'i_calendar',
              label: 'Planning calendar',
              path: '/dashboard/planning-calendar',
            },
            { icon: 'i_map', label: 'Map view', path: '/dashboard/map-view' },
            { icon: 'i_driver', label: 'Drivers', path: '/dashboard/drivers' },
            { icon: 'i_broker', label: 'Brokers', path: '/dashboard/brokers' },
          ]}
        />
        <NavSection
          title="Saved links"
          links={[
            { icon: 'i_saved_link', label: 'John smith', path: '#' },
            { icon: 'i_saved_link', label: 'Claire Brown', path: '#' },
          ]}
        />
      </Stack>
    </Stack>
  );
};

export default SidebarLayout;
