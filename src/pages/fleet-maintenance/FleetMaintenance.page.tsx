import { useSearchParams } from 'react-router-dom';
import { Badge, Button, Group, Select, Stack, Text } from '@mantine/core';
import BottomBreadcrumbComponent from '@/components/bottom-breadcrumb/BottomBreadcrumb.component';
import Icon from '@/components/icons/Icon.component';
import TopbarLayout from '@/components/layout/dashboard/Topbar.layout';
import ModifiedTableComponent from '@/components/table/Table.component';

const FleetMaintenancePage = () => {
  const [_, setSearchParams] = useSearchParams();

  // const create_drawer_open = useMemo(() => Boolean(searchParams.get('driver')), [searchParams]);
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
        <TopbarLayout title="Maintenance" />
        <Stack component="main" gap={16}>
          <Group justify="space-between">
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
            <Button
              color="sky.8"
              radius={10}
              onClick={() => handleBrokerDrawer('driver', 'create')}
              leftSection={<Icon icon="i_plus" width="18px" height="18px" color="#fff" />}
            >
              Create order
            </Button>
          </Group>
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
                name: 'Mostow Co.',
                phone_number: '(504) 896-6913',
                mc_number: '100462',
                billing_address: '4093 Overlook Drive, Richmond, IN 47374',
              },
              {
                id: 1,
                name: 'Mostow Co.',
                phone_number: '(504) 896-6913',
                mc_number: '100462',
                billing_address: '4093 Overlook Drive, Richmond, IN 47374',
              },
              {
                id: 1,
                name: 'Mostow Co.',
                phone_number: '(504) 896-6913',
                mc_number: '100462',
                billing_address: '4093 Overlook Drive, Richmond, IN 47374',
              },
            ]}
            columns={[
              {
                label: 'Order #',
                key: 'name',
                sortable: true,
                render() {
                  return (
                    <Text fz={12} fw={400} lh="140%" c="neutral.9">
                      516517
                    </Text>
                  );
                },
              },
              {
                label: 'Licence plate',
                key: 'phone_number',
                sortable: true,
                render() {
                  return (
                    <Group justify="space-between" wrap="nowrap" miw={180}>
                      <Text fz={12} fw={400} lh="140%" c="neutral.9">
                        7632014
                      </Text>
                      <Badge
                        color="#BFDBFE"
                        variant="outline"
                        bg="#EFF6FF"
                        radius={6}
                        c="#1D4ED8"
                        fz={12}
                        lh="140%"
                        fw={400}
                      >
                        Trailer
                      </Badge>
                    </Group>
                  );
                },
              },
              {
                label: 'Operated by',
                key: 'mc_number',
                sortable: true,
                render() {
                  return (
                    <Stack gap={4}>
                      <Group justify="start" gap={4} wrap="nowrap">
                        <Icon icon="i_milemeter" color="#71717A" width="14px" height="14px" />
                        <Text fz={12} fw={400} lh="140%" c="neutral.9">
                          11 221 Miles
                        </Text>
                      </Group>
                      <Group justify="start" gap={4} wrap="nowrap">
                        <Icon icon="i_engine" color="#71717A" width="14px" height="14px" />
                        <Text fz={12} fw={400} lh="140%" c="neutral.9">
                          15 778 hrs
                        </Text>
                      </Group>
                    </Stack>
                  );
                },
              },
              {
                label: 'Repair date',
                key: 'billing_address',
                sortable: true,
                render() {
                  return (
                    <Text fz={12} fw={400} lh="140%" c="neutral.9">
                      Mar 20 06:36
                    </Text>
                  );
                },
              },
              {
                label: 'Total cost',
                key: 'billing_address',
                sortable: true,
                render() {
                  return (
                    <Text fz={12} fw={400} lh="140%" c="neutral.9">
                      $7,200
                    </Text>
                  );
                },
              },
              {
                label: 'Bill To (Payer)',
                key: 'billing_address',
                sortable: true,
                render() {
                  return (
                    <Stack gap={0}>
                      <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                        Stephanie Sharkey
                      </Text>
                      <Text fz={12} fw={400} lh="140%" c="#71717A">
                        Carrier: J. Brannam
                      </Text>
                    </Stack>
                  );
                },
              },
              {
                label: 'Status',
                key: 'billing_address',
                sortable: true,
                render() {
                  return (
                    <Text fz={12} fw={400} lh="140%" c="neutral.9">
                      Active
                    </Text>
                  );
                },
              },
            ]}
          />
        </Stack>
      </Stack>
      <BottomBreadcrumbComponent
        items={[
          { title: 'Dashboard', href: '/fleet-dashboard' },
          { title: 'Maintenance', href: '#' },
        ]}
      />
    </>
  );
};

export default FleetMaintenancePage;
