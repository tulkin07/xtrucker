import { useMemo } from 'react';
import { IconHours24, IconMug, IconPlus, IconProgress } from '@tabler/icons-react';
import { useSearchParams } from 'react-router-dom';
import { Box, Button, Flex, Group, Select, Stack, Text } from '@mantine/core';
import BottomBreadcrumbComponent from '@/components/bottom-breadcrumb/BottomBreadcrumb.component';
import CreateDrawer from '@/components/drawers/safety/Create.drawer';
import TopbarLayout from '@/components/layout/dashboard/Topbar.layout';
import ModifiedTableComponent from '@/components/table';

const SafetyScheduleCalendarPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const create_drawer_open = useMemo(() => Boolean(searchParams.get('create')), [searchParams]);

  const handleLoadDrawer = (type: 'create' | 'view', value: 'create' | number, close?: boolean) => {
    setSearchParams((prevParams) => {
      if (close) {
        prevParams.delete(type);
        return prevParams;
      }
      prevParams.set(type, value.toString());
      return prevParams;
    });
  };

  return (
    <>
      <Stack p="16px 8px 16px 8px" h="100%">
        <TopbarLayout title="Safety Tickets" />
        <Stack component="main" gap={16}>
          <Group justify="space-between">
            <Group>
              <Select radius={6} placeholder="Unit" />
            </Group>
            <Group>
              <Button
                color="sky.8"
                radius={10}
                onClick={() => handleLoadDrawer('create', 'create')}
                leftSection={<IconPlus />}
              >
                Create Order
              </Button>
            </Group>
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
                order: '234234',
                unit: { id: '3234', name: 'Trailer' },
                odometer: { miles: '234234', hours: '234234' },
                repairDate: new Date(),
                totalCost: '2342',
                billTo: { name: 'John Doe', carrierName: 'Jonthan' },
                status: 'Unpaid',
              },
            ]}
            columns={[
              {
                label: 'Order#',
                key: 'order',
                render(item) {
                  return (
                    <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                      {item.order ?? '---'}
                    </Text>
                  );
                },
              },
              {
                label: 'Unit#',
                key: 'unit',
                sortable: true,
                render(item) {
                  return (
                    <Flex align="center" justify="space-between">
                      <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                        {item.unit.id ?? '---'}
                      </Text>
                      <Box
                        style={{
                          border: '1px solid #BFDBFE',
                          background: '#EFF6FF',
                          padding: '2.5px 8px',
                          borderRadius: '8px',
                        }}
                      >
                        <Text c="#1D4ED8" fz={12} lh="140%">
                          {item.unit.name}
                        </Text>
                      </Box>
                    </Flex>
                  );
                },
              },
              {
                label: 'Odometer',
                key: 'odometer',
                sortable: true,
                render(item) {
                  return (
                    <Stack>
                      <Group>
                        <IconMug />
                        <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                          {item.odometer.miles ?? '---'} Miles
                        </Text>
                      </Group>
                      <Group>
                        <IconHours24 />
                        <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                          {item.odometer.hours ?? '---'} hrs
                        </Text>
                      </Group>
                    </Stack>
                  );
                },
              },
              {
                label: 'Repair Date',
                key: 'repairDate',
                sortable: true,
                render(item) {
                  return (
                    <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                      {item.repairDate.getDate() ?? '---'}
                    </Text>
                  );
                },
              },
              {
                label: 'Total Cost',
                key: 'totalCost',
                sortable: true,
                render(item) {
                  return (
                    <Text fz={12} fw={400} lh="140%" c="#71717A">
                      ${item.totalCost ?? '---'}
                    </Text>
                  );
                },
              },
              {
                label: 'Total Cost',
                key: 'billTo',
                sortable: true,
                render(item) {
                  return (
                    <Stack gap={0}>
                      <Text fz={12} fw={400} lh="140%" c="black">
                        {item.billTo.name ?? '---'}
                      </Text>
                      <Text fz={10} fw={400} lh="140%" c="#71717A">
                        Carrier: {item.billTo.carrierName ?? '---'}
                      </Text>
                    </Stack>
                  );
                },
              },
              {
                label: 'Status',
                key: 'status',
                sortable: true,
                render(item) {
                  return (
                    <Box
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        border: '1px solid #BFDBFE',
                        background: '#EFF6FF',
                        padding: '2.5px 8px',
                        borderRadius: '8px',
                      }}
                    >
                      <IconProgress color="var(--mantine-color-blue-5)" />
                      <Text c="#1D4ED8" fz={12} lh="140%">
                        {item.status}
                      </Text>
                    </Box>
                  );
                },
              },
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
              Create Task
            </Button>
          </Group>
        }
      />
    </>
  );
};

export default SafetyScheduleCalendarPage;
