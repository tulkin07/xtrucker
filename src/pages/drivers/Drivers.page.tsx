import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box, Button, Group, Stack, Tabs, Text } from '@mantine/core';
import BottomBreadcrumbComponent from '@/components/bottom-breadcrumb/BottomBreadcrumb.component';
import CreateDrawer from '@/components/drawers/driver/Create.drawer';
import TopbarLayout from '@/components/layout/dashboard/Topbar.layout';
import ModifiedTableComponent from '@/components/table/Table.component';

const DriversPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const create_drawer_open = useMemo(() => Boolean(searchParams.get('driver')), [searchParams]);
  // const view_drawer_open = useMemo(() => Boolean(searchParams.get('view')), [searchParams]);

  const handleBrokerDrawer = (
    type: 'driver',
    value: 'create' | 'view' | number,
    close?: boolean
  ) => {
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
    <>
      <Stack p="16px 8px 16px 8px" h="100%">
        <TopbarLayout title="Drivers" />
        <Tabs color="teal" defaultValue="first">
          <Group justify="space-between">
            <Tabs.List maw="fit-content">
              <Tabs.Tab value="first" color="teal.4">
                All
              </Tabs.Tab>
              <Tabs.Tab value="second" color="teal.4">
                My drivers
              </Tabs.Tab>
            </Tabs.List>
            <Button
              color="sky.8"
              radius={10}
              onClick={() => handleBrokerDrawer('driver', 'create')}
            >
              Create drivers
            </Button>
          </Group>

          <Tabs.Panel value="first" pt="xs">
            <ModifiedTableComponent
              paperProps={{
                withBorder: true,
                radius: 8,
                mah: 'calc(100vh - 163px)',
                style: {
                  overflow: 'auto',
                },
              }}
              data={[
                {
                  id: 1,
                  driver: {
                    name: 'James Hall',
                    phone: '(406) 382-2670',
                  },
                  truck: '100462',
                  trailer: '100308',
                  home_address: '4093 Overlook Drive, Richmond, IN 47374',
                  permits: ['IRP', 'Hazmat', 'Double/Triple Trailer'],
                  gears: ['Construction-gear', 'Tarps - x8', 'Straps - x12', 'Edge Protectors'],
                },
                {
                  id: 1,
                  driver: {
                    name: 'James Hall',
                    phone: '(406) 382-2670',
                  },
                  truck: '100462',
                  trailer: '100308',
                  home_address: '4093 Overlook Drive, Richmond, IN 47374',
                  permits: ['IRP', 'Hazmat', 'Double/Triple Trailer'],
                  gears: ['Construction-gear', 'Tarps - x8', 'Straps - x12', 'Edge Protectors'],
                },
                {
                  id: 1,
                  driver: {
                    name: 'James Hall',
                    phone: '(406) 382-2670',
                  },
                  truck: '100462',
                  trailer: '100308',
                  home_address: '4093 Overlook Drive, Richmond, IN 47374',
                  permits: ['IRP', 'Hazmat', 'Double/Triple Trailer'],
                  gears: ['Construction-gear', 'Tarps - x8', 'Straps - x12', 'Edge Protectors'],
                },
              ]}
              columns={[
                {
                  label: 'Driver',
                  key: 'driver',
                  sortable: true,
                  render(item) {
                    return (
                      <Stack gap={0}>
                        <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                          {item.driver.name ?? '---'}
                        </Text>
                        <Text fz={12} fw={400} lh="140%" c="blue.4">
                          {item.driver.phone ?? '---'}
                        </Text>
                      </Stack>
                    );
                  },
                },
                {
                  label: 'Truck#',
                  key: 'truck',
                  sortable: true,
                  render(item) {
                    return (
                      <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                        {item.truck ?? '---'}
                      </Text>
                    );
                  },
                },
                {
                  label: 'Trailer #',
                  key: 'trailer',
                  sortable: true,
                  render(item) {
                    return (
                      <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                        {item.trailer ?? '---'}
                      </Text>
                    );
                  },
                },
                {
                  label: 'Home address',
                  key: 'home_address',
                  sortable: true,
                  render(item) {
                    return (
                      <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                        {item.home_address ?? '---'}
                      </Text>
                    );
                  },
                },
                {
                  label: 'Permits',
                  key: 'permits',
                  sortable: true,
                  render(item) {
                    return (
                      <Group gap={8} wrap="nowrap">
                        {item.permits.map((permit) => (
                          <Box
                            key={permit}
                            style={{
                              border: '1px solid #BFDBFE',
                              background: '#EFF6FF',
                              padding: '2.5px 8px',
                              borderRadius: '8px',
                            }}
                          >
                            <Text c="#1D4ED8" fz={12} lh="140%">
                              {permit}
                            </Text>
                          </Box>
                        ))}
                      </Group>
                    );
                  },
                },
                {
                  label: 'Gears',
                  key: 'gears',
                  sortable: true,
                  render(item) {
                    return (
                      <Group gap={8} wrap="nowrap">
                        {item.gears.map((gear) => (
                          <Box
                            key={gear}
                            style={{
                              border: '1px solid #BFDBFE',
                              background: '#EFF6FF',
                              padding: '2.5px 8px',
                              borderRadius: '8px',
                            }}
                          >
                            <Text c="#1D4ED8" fz={12} lh="140%">
                              {gear}
                            </Text>
                          </Box>
                        ))}
                      </Group>
                    );
                  },
                },
              ]}
            />
          </Tabs.Panel>

          <Tabs.Panel value="second" pt="xs">
            <ModifiedTableComponent
              paperProps={{
                withBorder: true,
                radius: 8,
                mah: 'calc(100vh - 163px)',
                style: {
                  overflow: 'auto',
                },
              }}
              data={[
                {
                  id: 1,
                  driver: {
                    name: 'James Hall',
                    phone: '(406) 382-2670',
                  },
                  truck: '100462',
                  trailer: '100308',
                  home_address: '4093 Overlook Drive, Richmond, IN 47374',
                  permits: ['IRP', 'Hazmat', 'Double/Triple Trailer'],
                  gears: ['Construction-gear', 'Tarps - x8', 'Straps - x12', 'Edge Protectors'],
                },
                {
                  id: 1,
                  driver: {
                    name: 'James Hall',
                    phone: '(406) 382-2670',
                  },
                  truck: '100462',
                  trailer: '100308',
                  home_address: '4093 Overlook Drive, Richmond, IN 47374',
                  permits: ['IRP', 'Hazmat', 'Double/Triple Trailer'],
                  gears: ['Construction-gear', 'Tarps - x8', 'Straps - x12', 'Edge Protectors'],
                },
                {
                  id: 1,
                  driver: {
                    name: 'James Hall',
                    phone: '(406) 382-2670',
                  },
                  truck: '100462',
                  trailer: '100308',
                  home_address: '4093 Overlook Drive, Richmond, IN 47374',
                  permits: ['IRP', 'Hazmat', 'Double/Triple Trailer'],
                  gears: ['Construction-gear', 'Tarps - x8', 'Straps - x12', 'Edge Protectors'],
                },
              ]}
              columns={[
                {
                  label: 'Driver',
                  key: 'driver',
                  sortable: true,
                  render(item) {
                    return (
                      <Stack gap={0}>
                        <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                          {item.driver.name ?? '---'}
                        </Text>
                        <Text fz={12} fw={400} lh="140%" c="blue.4">
                          {item.driver.phone ?? '---'}
                        </Text>
                      </Stack>
                    );
                  },
                },
                {
                  label: 'Truck#',
                  key: 'truck',
                  sortable: true,
                  render(item) {
                    return (
                      <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                        {item.truck ?? '---'}
                      </Text>
                    );
                  },
                },
                {
                  label: 'Trailer #',
                  key: 'trailer',
                  sortable: true,
                  render(item) {
                    return (
                      <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                        {item.trailer ?? '---'}
                      </Text>
                    );
                  },
                },
                {
                  label: 'Home address',
                  key: 'home_address',
                  sortable: true,
                  render(item) {
                    return (
                      <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                        {item.home_address ?? '---'}
                      </Text>
                    );
                  },
                },
                {
                  label: 'Permits',
                  key: 'permits',
                  sortable: true,
                  render(item) {
                    return (
                      <Group gap={8} wrap="nowrap">
                        {item.permits.map((permit) => (
                          <Box
                            key={permit}
                            style={{
                              border: '1px solid #BFDBFE',
                              background: '#EFF6FF',
                              padding: '2.5px 8px',
                              borderRadius: '8px',
                            }}
                          >
                            <Text c="#1D4ED8" fz={12} lh="140%">
                              {permit}
                            </Text>
                          </Box>
                        ))}
                      </Group>
                    );
                  },
                },
                {
                  label: 'Gears',
                  key: 'gears',
                  sortable: true,
                  render(item) {
                    return (
                      <Group gap={8} wrap="nowrap">
                        {item.gears.map((gear) => (
                          <Box
                            key={gear}
                            style={{
                              border: '1px solid #BFDBFE',
                              background: '#EFF6FF',
                              padding: '2.5px 8px',
                              borderRadius: '8px',
                            }}
                          >
                            <Text c="#1D4ED8" fz={12} lh="140%">
                              {gear}
                            </Text>
                          </Box>
                        ))}
                      </Group>
                    );
                  },
                },
              ]}
            />
          </Tabs.Panel>
        </Tabs>
        <CreateDrawer
          opened={create_drawer_open}
          onClose={() => handleBrokerDrawer('driver', 'create', true)}
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
                onClick={() => handleBrokerDrawer('driver', 'create', true)}
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
      <BottomBreadcrumbComponent
        items={[
          { title: 'Dashboard', href: '/dashboard' },
          { title: 'Drivers', href: '#' },
        ]}
      />
    </>
  );
};

export default DriversPage;
