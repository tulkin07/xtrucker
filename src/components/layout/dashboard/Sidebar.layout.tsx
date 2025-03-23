import { useMemo } from 'react';
import classes from './styles/Sidebar.module.scss';
import { useSearchParams } from 'react-router-dom';
import { Button, Group, Stack } from '@mantine/core';
import CreateDrawer from '@/components/drawers/load/Create.drawer';
import Icon from '@/components/icons/Icon.component';
import NavSection from './extra-components/Nav.section';

const SidebarLayout = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const create_drawer_open = useMemo(() => Boolean(searchParams.get('create')), [searchParams]);

  const handleLoadDrawer = (type: 'create' | 'view', value: 'create' | number, close?: boolean) => {
    setSearchParams((prevParams) => {
      if (close) {
        prevParams.delete(type);
        return prevParams;
      }
      prevParams.set(type, String(value));
      return prevParams;
    });
  };

  return (
    <Stack gap={0} className={classes.dashbaord_sidebar} left={72}>
      <Group p={12} className={classes.sidebar_logo_wrapper}>
        <Icon icon="i_xtrucker" width="136.35px" height="32px" />
      </Group>
      <Stack p={12} gap={12}>
        <Button
          color="sky.8"
          size="md"
          radius={10}
          onClick={() => handleLoadDrawer('create', 'create')}
        >
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
      <CreateDrawer
        opened={create_drawer_open}
        onClose={() => handleLoadDrawer('create', 'create', true)}
        position="right"
        w={700}
        footer={
          <Group
            gap={8}
            pt={16}
            pb={16}
            pos="sticky"
            w="calc(100%)"
            justify="end"
            bottom={0}
            left={32}
            bg="white"
            style={{ zIndex: 10, borderTop: '1px solid var(--mantine-color-stone-1)' }}
          >
            <Button
              radius={10}
              color="gray.2"
              c="neutral.9"
              onClick={() => handleLoadDrawer('create', 'create', true)}
            >
              Cancel
            </Button>
            <Button radius={10} color="sky.8">
              Save
            </Button>
          </Group>
        }
      />
    </Stack>
  );
};

export default SidebarLayout;
