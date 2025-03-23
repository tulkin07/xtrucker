import { useSearchParams } from 'react-router-dom';
import { ActionIcon, Button, Group, Select, Stack, Text } from '@mantine/core';
import BottomBreadcrumbComponent from '@/components/bottom-breadcrumb/BottomBreadcrumb.component';
import Icon from '@/components/icons/Icon.component';
import TopbarLayout from '@/components/layout/dashboard/Topbar.layout';
import ModifiedTableComponent from '@/components/table/Table.component';

const FleetTrailersPage = () => {
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
        <TopbarLayout title="Trailers" />
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
              Create trailer
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
                label: 'Truck #',
                key: 'name',
                sortable: true,
                render() {
                  return (
                    <Stack gap={0}>
                      <Text fz={12} fw={400} lh="140%" c="neutral.9">
                        100462
                      </Text>
                      <Text fz={12} fw={400} lh="140%" c="zinc.4">
                        VAN
                      </Text>
                    </Stack>
                  );
                },
              },
              {
                label: 'Licence plate',
                key: 'phone_number',
                sortable: true,
                render() {
                  return (
                    <Text fz={12} fw={400} lh="140%" c="neutral.9">
                      100462
                    </Text>
                  );
                },
              },
              {
                label: 'Year',
                key: 'mc_number',
                sortable: true,
                render() {
                  return (
                    <Text fz={12} fw={400} lh="140%" c="neutral.9">
                      2024
                    </Text>
                  );
                },
              },
              {
                label: 'Operated by',
                key: 'mc_number',
                sortable: true,
                render() {
                  return (
                    <Stack gap={0}>
                      <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                        Iva Ryan
                      </Text>
                      <Text fz={12} fw={400} lh="140%" c="#3B82F6">
                        Cut Rite Lawn Care
                      </Text>
                    </Stack>
                  );
                },
              },
              {
                label: 'Registration',
                key: 'billing_address',
                sortable: true,
                render() {
                  return (
                    <Group justify="space-between" align="center" wrap="nowrap">
                      <Text fz={12} fw={400} lh="140%" c="#3B82F6">
                        Registration.PDF
                      </Text>
                      <ActionIcon variant="subtle" size="xs">
                        <Icon icon="i_xclose" width="14" height="14" />
                      </ActionIcon>
                    </Group>
                  );
                },
              },
              {
                label: 'Inspection',
                key: 'billing_address',
                sortable: true,
                render() {
                  return (
                    <Group justify="space-between" align="center" wrap="nowrap">
                      <Text fz={12} fw={400} lh="140%" c="#3B82F6">
                        Inspection_2025.PDF
                      </Text>
                      <ActionIcon variant="subtle" size="xs">
                        <Icon icon="i_xclose" width="14" height="14" />
                      </ActionIcon>
                    </Group>
                  );
                },
              },
              {
                label: 'Lease agreement',
                key: 'billing_address',
                sortable: true,
                render() {
                  return (
                    <Group justify="space-between" align="center" wrap="nowrap">
                      <Text fz={12} fw={400} lh="140%" c="#3B82F6">
                        Lease_07.06.2025.PDF
                      </Text>
                      <ActionIcon variant="subtle" size="xs">
                        <Icon icon="i_xclose" width="14" height="14" />
                      </ActionIcon>
                    </Group>
                  );
                },
              },
              {
                label: 'Permits',
                key: 'billing_address',
                sortable: true,
                render() {
                  return (
                    <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                      ---
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
          { title: 'Trailers', href: '#' },
        ]}
      />
    </>
  );
};

export default FleetTrailersPage;
