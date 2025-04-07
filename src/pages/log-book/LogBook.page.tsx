import { useMemo } from 'react';
import { IconDownload } from '@tabler/icons-react';
import { useSearchParams } from 'react-router-dom';
import { Button, Group, Select, Stack, Text } from '@mantine/core';
import BottomBreadcrumbComponent from '@/components/bottom-breadcrumb/BottomBreadcrumb.component';
import CreateDrawer from '@/components/drawers/safety/Create.drawer';
import TopbarLayout from '@/components/layout/dashboard/Topbar.layout';
import ModifiedTableComponent from '@/components/table';

const LogBookPage = () => {
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
            data={[
              {
                id: 1,
                date: new Date(),
                driver: 'Patricia asdf',
                hoursDrove: new Date(),
                violations: 'violations',
                formManager: 'Not certified',
              },
            ]}
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

export default LogBookPage;
