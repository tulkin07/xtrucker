import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ActionIcon, Badge, Button, Group, Select, Stack, Text } from '@mantine/core';
import BottomBreadcrumbComponent from '@/components/bottom-breadcrumb/BottomBreadcrumb.component';
import CreateDrawer from '@/components/drawers/load/Create.drawer';
import Icon from '@/components/icons/Icon.component';
import TopbarLayout from '@/components/layout/dashboard/Topbar.layout';
import ModifiedTableComponent from '@/components/table/Table.component';
import { loadStatusColorMap } from '@/constants/status.constant';

const LoadManagementPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const create_drawer_open = useMemo(() => Boolean(searchParams.get('create')), [searchParams]);
  // const view_drawer_open = useMemo(() => Boolean(searchParams.get('view')), [searchParams]);

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
    <>
      <Stack p="16px 8px 16px 8px" h="100%">
        <TopbarLayout title="Load management" />
        <Stack component="main" gap={16}>
          <Group justify="space-between">
            <Group>
              <Select
                value="ready"
                placeholder="Ready"
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
              <ActionIcon h={40} w={40} variant="outline" color="#D1D5DB" radius={6}>
                <Icon icon="i_calendar" width="20px" height="20px" />
              </ActionIcon>
            </Group>
            <Group>
              <Button
                color="sky.8"
                radius={10}
                onClick={() => handleLoadDrawer('create', 'create')}
              >
                Create load
              </Button>
            </Group>
          </Group>
          <ModifiedTableComponent
            paperProps={{
              withBorder: true,
              radius: 8,
              h: 'calc(100vh - 163px)',
              style: {
                overflow: 'auto',
              },
            }}
            data={[
              {
                id: 1,
                status: 'ready',
                load: '100462',
                driver: 'Rhonda Rhodes',
                trl: { name: '100308', id: '0096' },
                broker: { name: 'Western Auto', id: 101540 },
                pickup: { address: 'Chicago, IL', date: null },
                drop_off: { address: 'New Orleans, LA 70115', date: 'Feb 20 14:47' },
                rate: { sum: '$5,763.74', per_mile: '$1.9' },
                notes: null,
              },
              {
                id: 2,
                status: 'reserved',
                load: '100462',
                driver: 'Rhonda Rhodes',
                trl: { name: '100308', id: '0096' },
                broker: { name: 'Western Auto', id: 101540 },
                pickup: { address: 'Chicago, IL', date: null },
                drop_off: { address: 'New Orleans, LA 70115', date: 'Feb 20 14:47' },
                rate: { sum: null, per_mile: null },
                notes: 'Shipper will load, driver must secure cargo.',
              },
              {
                id: 3,
                status: 'dispatched',
                load: '100462',
                driver: 'Rhonda Rhodes',
                trl: { name: '100308', id: '0096' },
                broker: { name: 'Western Auto', id: 101540 },
                pickup: { address: 'Chicago, IL', date: null },
                drop_off: { address: 'New Orleans, LA 70115', date: 'Feb 20 14:47' },
                rate: { sum: null, per_mile: null },
                notes: 'Shipper will load, driver must secure cargo.',
              },
              {
                id: 3,
                status: 'enroute',
                load: '100462',
                driver: 'Rhonda Rhodes',
                trl: { name: '100308', id: '0096' },
                broker: { name: 'Western Auto', id: 101540 },
                pickup: { address: 'Chicago, IL', date: null },
                drop_off: { address: 'New Orleans, LA 70115', date: 'Feb 20 14:47' },
                rate: { sum: null, per_mile: null },
                notes: 'Shipper will load, driver must secure cargo.',
              },
              {
                id: 3,
                status: 'onsite',
                load: '100462',
                driver: 'Rhonda Rhodes',
                trl: { name: '100308', id: '0096' },
                broker: { name: 'Western Auto', id: 101540 },
                pickup: { address: 'Chicago, IL', date: null },
                drop_off: { address: 'New Orleans, LA 70115', date: 'Feb 20 14:47' },
                rate: { sum: null, per_mile: null },
                notes: 'Shipper will load, driver must secure cargo.',
              },
              {
                id: 3,
                status: 'canceled',
                load: '100462',
                driver: 'Rhonda Rhodes',
                trl: { name: '100308', id: '0096' },
                broker: { name: 'Western Auto', id: 101540 },
                pickup: { address: 'Chicago, IL', date: null },
                drop_off: { address: 'New Orleans, LA 70115', date: 'Feb 20 14:47' },
                rate: { sum: null, per_mile: null },
                notes: 'Shipper will load, driver must secure cargo.',
              },
              {
                id: 3,
                status: 'repair_shop',
                load: '100462',
                driver: 'Rhonda Rhodes',
                trl: { name: '100308', id: '0096' },
                broker: { name: 'Western Auto', id: 101540 },
                pickup: { address: 'Chicago, IL', date: null },
                drop_off: { address: 'New Orleans, LA 70115', date: 'Feb 20 14:47' },
                rate: { sum: null, per_mile: null },
                notes: 'Shipper will load, driver must secure cargo.',
              },
              {
                id: 3,
                status: 'vacation',
                load: '100462',
                driver: 'Rhonda Rhodes',
                trl: { name: '100308', id: '0096' },
                broker: { name: 'Western Auto', id: 101540 },
                pickup: { address: 'Chicago, IL', date: null },
                drop_off: { address: 'New Orleans, LA 70115', date: 'Feb 20 14:47' },
                rate: { sum: null, per_mile: null },
                notes: 'Shipper will load, driver must secure cargo.',
              },
              {
                id: 3,
                status: 'no_info',
                load: '100462',
                driver: 'Rhonda Rhodes',
                trl: { name: '100308', id: '0096' },
                broker: { name: 'Western Auto', id: 101540 },
                pickup: { address: 'Chicago, IL', date: null },
                drop_off: { address: 'New Orleans, LA 70115', date: 'Feb 20 14:47' },
                rate: { sum: null, per_mile: null },
                notes: 'Shipper will load, driver must secure cargo.',
              },
              {
                id: 3,
                status: 'dispatched',
                load: '100462',
                driver: 'Rhonda Rhodes',
                trl: { name: '100308', id: '0096' },
                broker: { name: 'Western Auto', id: 101540 },
                pickup: { address: 'Chicago, IL', date: null },
                drop_off: { address: 'New Orleans, LA 70115', date: 'Feb 20 14:47' },
                rate: { sum: null, per_mile: null },
                notes: 'Shipper will load, driver must secure cargo.',
              },
              {
                id: 3,
                status: 'dispatched',
                load: '100462',
                driver: 'Rhonda Rhodes',
                trl: { name: '100308', id: '0096' },
                broker: { name: 'Western Auto', id: 101540 },
                pickup: { address: 'Chicago, IL', date: null },
                drop_off: { address: 'New Orleans, LA 70115', date: 'Feb 20 14:47' },
                rate: { sum: null, per_mile: null },
                notes: 'Shipper will load, driver must secure cargo.',
              },
              {
                id: 3,
                status: 'dispatched',
                load: '100462',
                driver: 'Rhonda Rhodes',
                trl: { name: '100308', id: '0096' },
                broker: { name: 'Western Auto', id: 101540 },
                pickup: { address: 'Chicago, IL', date: null },
                drop_off: { address: 'New Orleans, LA 70115', date: 'Feb 20 14:47' },
                rate: { sum: null, per_mile: null },
                notes: 'Shipper will load, driver must secure cargo.',
              },
              {
                id: 3,
                status: 'dispatched',
                load: '100462',
                driver: 'Rhonda Rhodes',
                trl: { name: '100308', id: '0096' },
                broker: { name: 'Western Auto', id: 101540 },
                pickup: { address: 'Chicago, IL', date: null },
                drop_off: { address: 'New Orleans, LA 70115', date: 'Feb 20 14:47' },
                rate: { sum: null, per_mile: null },
                notes: 'Shipper will load, driver must secure cargo.',
              },
              {
                id: 3,
                status: 'dispatched',
                load: '100462',
                driver: 'Rhonda Rhodes',
                trl: { name: '100308', id: '0096' },
                broker: { name: 'Western Auto', id: 101540 },
                pickup: { address: 'Chicago, IL', date: null },
                drop_off: { address: 'New Orleans, LA 70115', date: 'Feb 20 14:47' },
                rate: { sum: null, per_mile: null },
                notes: 'Shipper will load, driver must secure cargo.',
              },
              {
                id: 3,
                status: 'dispatched',
                load: '100462',
                driver: 'Rhonda Rhodes',
                trl: { name: '100308', id: '0096' },
                broker: { name: 'Western Auto', id: 101540 },
                pickup: { address: 'Chicago, IL', date: null },
                drop_off: { address: 'New Orleans, LA 70115', date: 'Feb 20 14:47' },
                rate: { sum: null, per_mile: null },
                notes: 'Shipper will load, driver must secure cargo.',
              },
              {
                id: 3,
                status: 'dispatched',
                load: '100462',
                driver: 'Rhonda Rhodes',
                trl: { name: '100308', id: '0096' },
                broker: { name: 'Western Auto', id: 101540 },
                pickup: { address: 'Chicago, IL', date: null },
                drop_off: { address: 'New Orleans, LA 70115', date: 'Feb 20 14:47' },
                rate: { sum: null, per_mile: null },
                notes: 'Shipper will load, driver must secure cargo.',
              },
              {
                id: 3,
                status: 'dispatched',
                load: '100462',
                driver: 'Rhonda Rhodes',
                trl: { name: '100308', id: '0096' },
                broker: { name: 'Western Auto', id: 101540 },
                pickup: { address: 'Chicago, IL', date: null },
                drop_off: { address: 'New Orleans, LA 70115', date: 'Feb 20 14:47' },
                rate: { sum: null, per_mile: null },
                notes: 'Shipper will load, driver must secure cargo.',
              },
              {
                id: 3,
                status: 'dispatched',
                load: '100462',
                driver: 'Rhonda Rhodes',
                trl: { name: '100308', id: '0096' },
                broker: { name: 'Western Auto', id: 101540 },
                pickup: { address: 'Chicago, IL', date: null },
                drop_off: { address: 'New Orleans, LA 70115', date: 'Feb 20 14:47' },
                rate: { sum: null, per_mile: null },
                notes: 'Shipper will load, driver must secure cargo.',
              },
              {
                id: 3,
                status: 'dispatched',
                load: '100462',
                driver: 'Rhonda Rhodes',
                trl: { name: '100308', id: '0096' },
                broker: { name: 'Western Auto', id: 101540 },
                pickup: { address: 'Chicago, IL', date: null },
                drop_off: { address: 'New Orleans, LA 70115', date: 'Feb 20 14:47' },
                rate: { sum: null, per_mile: null },
                notes: 'Shipper will load, driver must secure cargo.',
              },
              {
                id: 3,
                status: 'dispatched',
                load: '100462',
                driver: 'Rhonda Rhodes',
                trl: { name: '100308', id: '0096' },
                broker: { name: 'Western Auto', id: 101540 },
                pickup: { address: 'Chicago, IL', date: null },
                drop_off: { address: 'New Orleans, LA 70115', date: 'Feb 20 14:47' },
                rate: { sum: null, per_mile: null },
                notes: 'Shipper will load, driver must secure cargo.',
              },
              {
                id: 3,
                status: 'dispatched',
                load: '100462',
                driver: 'Rhonda Rhodes',
                trl: { name: '100308', id: '0096' },
                broker: { name: 'Western Auto', id: 101540 },
                pickup: { address: 'Chicago, IL', date: null },
                drop_off: { address: 'New Orleans, LA 70115', date: 'Feb 20 14:47' },
                rate: { sum: null, per_mile: null },
                notes: 'Shipper will load, driver must secure cargo.',
              },
              {
                id: 3,
                status: 'dispatched',
                load: '100462',
                driver: 'Rhonda Rhodes',
                trl: { name: '100308', id: '0096' },
                broker: { name: 'Western Auto', id: 101540 },
                pickup: { address: 'Chicago, IL', date: null },
                drop_off: { address: 'New Orleans, LA 70115', date: 'Feb 20 14:47' },
                rate: { sum: null, per_mile: null },
                notes: 'Shipper will load, driver must secure cargo.',
              },
              {
                id: 3,
                status: 'dispatched',
                load: '100462',
                driver: 'Rhonda Rhodes',
                trl: { name: '100308', id: '0096' },
                broker: { name: 'Western Auto', id: 101540 },
                pickup: { address: 'Chicago, IL', date: null },
                drop_off: { address: 'New Orleans, LA 70115', date: 'Feb 20 14:47' },
                rate: { sum: null, per_mile: null },
                notes: 'Shipper will load, driver must secure cargo.',
              },
            ]}
            columns={[
              {
                label: 'Status',
                key: 'status',
                render(item) {
                  const color = loadStatusColorMap[item.status as keyof typeof loadStatusColorMap];
                  return (
                    <Stack>
                      <Badge
                        color={color.bg.split('.')[0]}
                        variant="outline"
                        styles={{
                          label: {
                            color: color.title,
                            textTransform: 'capitalize',
                          },
                          root: {
                            backgroundColor: color.bg,
                            display: 'flex',
                            alignItems: 'center',
                            cursor: 'pointer',
                          },
                        }}
                        leftSection={<Icon icon="i_arrow_down" width="14px" height="14px" />}
                      >
                        {item.status}
                      </Badge>
                    </Stack>
                  );
                },
              },
              {
                label: 'Load #',
                key: 'load',
                sortable: true,
                render(item) {
                  return (
                    <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                      {item.load ?? '---'}
                    </Text>
                  );
                },
              },
              {
                label: 'Driver #',
                key: 'driver',
                sortable: true,
                render(item) {
                  return (
                    <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                      {item.driver ?? '---'}
                    </Text>
                  );
                },
              },
              {
                label: 'Trck&Trl #',
                key: 'trl',
                sortable: true,
                render(item) {
                  return (
                    <Stack gap={0}>
                      <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                        {item.trl.name ?? '---'}
                      </Text>
                      <Text fz={12} fw={400} lh="140%" c="#71717A">
                        {item.trl.id ?? '---'}
                      </Text>
                    </Stack>
                  );
                },
              },
              {
                label: 'Broker&MC',
                key: 'broker',
                sortable: true,
                render(item) {
                  return (
                    <Stack gap={0}>
                      <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                        {item.broker.name ?? '---'}
                      </Text>
                      <Text fz={12} fw={400} lh="140%" c="#71717A">
                        {item.broker.id ?? '---'}
                      </Text>
                    </Stack>
                  );
                },
              },
              {
                label: 'Pick up',
                key: 'pickup',
                sortable: true,
                render(item) {
                  return (
                    <Stack gap={0}>
                      <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                        {item.pickup.address ?? '---'}
                      </Text>
                      <Text fz={12} fw={400} lh="140%" c="#71717A">
                        {item.pickup.date ?? '---'}
                      </Text>
                    </Stack>
                  );
                },
              },
              {
                label: 'Drop off',
                key: 'drop_off',
                sortable: true,
                render(item) {
                  return (
                    <Stack gap={0}>
                      <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                        {item.drop_off.address ?? '---'}
                      </Text>
                      <Text fz={12} fw={400} lh="140%" c="#71717A">
                        {item.drop_off.date ?? '---'}
                      </Text>
                    </Stack>
                  );
                },
              },
              {
                label: 'Rate',
                key: 'rate',
                sortable: true,
                render(item) {
                  return (
                    <Stack gap={0}>
                      <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                        {item.trl.name ?? '---'}
                      </Text>
                      <Text fz={12} fw={400} lh="140%" c="#71717A">
                        {item.trl.id ?? '---'}
                      </Text>
                    </Stack>
                  );
                },
              },
              { label: 'Notes', key: 'notes' },
            ]}
          />
        </Stack>
      </Stack>
      <BottomBreadcrumbComponent items={[{ title: 'Load management', href: '#' }]} />
      <CreateDrawer
        opened={create_drawer_open}
        onClose={() => handleLoadDrawer('create', 'create', true)}
        position="right"
        w={700}
        footer={
          <Group
            gap={8}
            p={12}
            pos="sticky"
            w="100%"
            justify="end"
            bottom={0}
            left={0}
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
    </>
  );
};

export default LoadManagementPage;
