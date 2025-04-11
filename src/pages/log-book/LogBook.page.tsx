import { useEffect, useMemo, useState } from 'react';
import { IconArrowAutofitLeft, IconDownload } from '@tabler/icons-react';
import { useSearchParams } from 'react-router-dom';
import { Button, Group, Select, Stack, Text } from '@mantine/core';
import BottomBreadcrumbComponent from '@/components/bottom-breadcrumb/BottomBreadcrumb.component';
import ViewDrawer from '@/components/drawers/log-book/View.drawer';
import TopbarLayout from '@/components/layout/dashboard/Topbar.layout';
import ModifiedTableComponent from '@/components/table';

interface ExampleDataProps {
  id: number;
  date: Date;
  driver: string;
  hoursDrove: Date;
  violations: string;
  formManager: string;
  driverData: {
    time: Date;
    event: string;
    status: string;
    origin: string;
    odometer: number;
    engineHours: string;
    id: number;
  }[];
}

const exampleData: ExampleDataProps[] = [
  {
    id: 1,
    date: new Date(),
    driver: 'Patricia asdf',
    hoursDrove: new Date(),
    violations: 'violations',
    formManager: 'Not certified',
    driverData: [
      {
        time: new Date(),
        event: 'Off duty',
        status: 'active',
        origin: '4mi SW from Fargo, ND',
        odometer: 241,
        engineHours: 'Kenneth Allen',
        id: 141,
      },
      {
        time: new Date(),
        event: 'Off duty',
        status: 'active',
        origin: '4mi SW from Fargo, ND',
        odometer: 241,
        engineHours: 'Kenneth Allen',
        id: 142,
      },
      {
        time: new Date(),
        event: 'Off duty',
        status: 'active',
        origin: '4mi SW from Fargo, ND',
        odometer: 241,
        engineHours: 'Kenneth Allen',
        id: 143,
      },
    ],
  },
];

const LogBookPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewData, setViewData] = useState<ExampleDataProps | null>(null);

  const viewDrawerOpen = useMemo(() => Boolean(searchParams.get('view')), [searchParams]);
  const viewId = useMemo(() => searchParams.get('view'), [searchParams]);

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
  useEffect(() => {
    const viewId = searchParams.get('view');
    if (viewId) {
      const data = exampleData.find((item) => item.id === parseInt(viewId));
      setViewData(data || null);
    }
  }, [viewDrawerOpen]);

  return (
    <>
      <Stack p="16px 8px 16px 8px" h="100%">
        <TopbarLayout title="Safety Tickets" />
        <Stack component="main" gap={16}>
          <Group justify="space-between">
            <Group>
              <Select radius={6} placeholder="Driver" />
              <Select radius={6} placeholder="Violations" />
              <Select radius={6} placeholder="Form&Manager" />
            </Group>
            <Group>
              <Button
                color="sky.8"
                radius={10}
                onClick={() => handleLoadDrawer('create', 'create')}
                leftSection={<IconDownload />}
              >
                Download
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
            rowClick={handleLoadDrawer}
            data={exampleData}
            columns={[
              {
                label: 'Date',
                key: 'date',
                render(item) {
                  return (
                    <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                      {item.date.getDate() ?? '---'}
                    </Text>
                  );
                },
              },
              {
                label: 'Driver',
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
                label: 'Driver',
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
                label: 'Hours Drove',
                key: 'hoursDrove',
                sortable: true,
                render(item) {
                  return (
                    <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                      {item.hoursDrove.getDate() ?? '---'}
                    </Text>
                  );
                },
              },
              {
                label: 'Violations',
                key: 'violations',
                sortable: true,
                render(item) {
                  return (
                    <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                      {item.violations ?? '---'}
                    </Text>
                  );
                },
              },
              {
                label: 'Forms & Manner',
                key: 'formManager',
                sortable: true,
                render(item) {
                  return (
                    <Text fz={12} fw={400} lh="140%" c="#71717A">
                      {item.formManager ?? '---'}
                    </Text>
                  );
                },
              },
            ]}
          />
        </Stack>
      </Stack>
      <BottomBreadcrumbComponent items={[{ title: 'Load management', href: '#' }]} />

      {viewData && (
        <ViewDrawer
          opened={viewDrawerOpen}
          onClose={() => viewId && handleLoadDrawer('view', parseInt(viewId), true)}
          position="right"
          overlayProps={{ backgroundOpacity: 0 }}
          size={'calc(100% - 320px)'}
          title={
            <Group gap={8}>
              <IconArrowAutofitLeft
                onClick={() => handleLoadDrawer('view', 1, true)}
                style={{ cursor: 'pointer' }}
              />
              <Text fz={16} lh="140%" c="zinc.8" fw={600}>
                #{viewData.driver}
              </Text>{' '}
            </Group>
          }
          // footer={
          //   <Group
          //     gap={8}
          //     pt={16}
          //     pb={16}
          //     pos="sticky"
          //     w="calc(100%)"
          //     justify="end"
          //     bottom={0}
          //     left={32}
          //     bg="white"
          //     style={{ zIndex: 10, borderTop: '1px solid var(--mantine-color-stone-1)' }}
          //   >
          //     <Button radius={10} color="gray.2" c="neutral.9">
          //       Edit
          //     </Button>

          //     <Button radius={10} color="sky.8">
          //       Close
          //     </Button>
          //   </Group>
          // }
        >
          <Stack gap={16}>
            <Text fz={16} fw={600} lh="140%">
              Driver Information
            </Text>
            <Stack gap={6}>
              <Group>
                <Text fz={14} fw={400} lh={'140%'}>
                  Name:
                </Text>
                <Text fz={14} fw={400} lh={'140%'}>
                  {viewData?.driver}
                </Text>
              </Group>
              <Group>
                <Text fz={14} fw={400} lh={'140%'}>
                  Truck:
                </Text>
                <Text fz={14} fw={400} lh={'140%'}>
                  #23423
                </Text>
              </Group>
              <Group>
                <Text fz={14} fw={400} lh={'140%'}>
                  Company:
                </Text>
                <Text fz={14} fw={400} lh={'140%'}>
                  Ajoda Transportation
                </Text>
              </Group>
            </Stack>

            <ModifiedTableComponent
              data={viewData?.driverData}
              columns={[
                {
                  label: 'Time(CT)',
                  key: 'time',
                  render: ({ time }) => time.toLocaleDateString(),
                },
                {
                  label: 'Event',
                  key: 'event',
                },
                {
                  label: 'Status',
                  key: 'status',
                },
                {
                  label: 'Origin',
                  key: 'origin',
                },
                {
                  label: 'Odometer (mi)',
                  key: 'odometer',
                },
                {
                  label: 'Engine Hours',
                  key: 'engineHours',
                },
                {
                  label: 'ID',
                  key: 'id',
                },
              ]}
            />
          </Stack>
        </ViewDrawer>
      )}
    </>
  );
};

export default LogBookPage;
