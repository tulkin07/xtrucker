import { useEffect, useMemo, useState } from 'react';
import { IconCurrencyDollar, IconFile, IconTrash, IconUpload } from '@tabler/icons-react';
import { useSearchParams } from 'react-router-dom';
import {
  ActionIcon,
  Button,
  Checkbox,
  FileButton,
  Flex,
  Group,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import BottomBreadcrumbComponent from '@/components/bottom-breadcrumb/BottomBreadcrumb.component';
import ViewDrawer from '@/components/drawers/safety-tasks/View.drawer';
import CreateDrawer from '@/components/drawers/safety/Create.drawer';
import Icon from '@/components/icons';
import TopbarLayout from '@/components/layout/dashboard/Topbar.layout';
import ModifiedTableComponent from '@/components/table';
import { ISafetyTasks } from '@/interfaces';
import { grayColors, zincColors } from '@/lib/theme/colors';

const SafetyTasksPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedKeys, setSelectedKeys] = useState<ISafetyTasks[]>([]);
  const [viewData, setViewData] = useState<ISafetyTasks | null>(null);

  const create_drawer_open = useMemo(() => Boolean(searchParams.get('create')), [searchParams]);
  const viewDrawerOpen = useMemo(() => Boolean(searchParams.get('view')), [searchParams]);

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
      const data = selectedKeys.find((item) => item.id === parseInt(viewId));
      setViewData(data || null);
    }
  }, [viewDrawerOpen]);

  console.log('viewData', viewData);

  const safetyTasksData: ISafetyTasks[] = [
    {
      id: 1,
      type: 'Drug Test',
      previous: new Date(),
      date: new Date(),
      expires: new Date(),
      frequency: 'yearly',
      driver: 'Kennedy',
      truck: 234,
      notes: 'Notes',
      attachments: 'Upload...',
    },
    {
      id: 2,
      type: 'Drug Test',
      previous: new Date(),
      date: new Date(),
      expires: new Date(),
      frequency: 'yearly',
      driver: 'Kennedy',
      truck: 234,
      notes: 'Notes',
      attachments: 'Upload...',
    },
  ];

  return (
    <>
      <Stack p="16px 8px 16px 8px" h="100%">
        <TopbarLayout title="Safety Tasks" />
        <Stack component="main" gap={16}>
          <Group justify="space-between">
            {selectedKeys.length > 0 ? (
              <Group
                bg={zincColors[1]}
                styles={{ root: { borderRadius: '8px', gap: '12px', padding: '2px 8px' } }}
              >
                <Icon icon="i_close" width="20px" height="20px" />
                <Text>{selectedKeys.length} selected</Text>

                <Button
                  variant="subtle"
                  color="dark"
                  radius="md"
                  leftSection={<IconCurrencyDollar size={16} />}
                  onClick={() => handleLoadDrawer('view', selectedKeys[0].id)}
                >
                  Add cost to statement
                </Button>
                <ActionIcon variant="subtle" color="dark" radius="md">
                  <IconTrash size={16} />
                </ActionIcon>
              </Group>
            ) : (
              <Group>
                <Flex>
                  <TextInput
                    size="sm"
                    variant="default"
                    placeholder="Search for invoices"
                    miw={278}
                    h={36}
                  />
                  <ActionIcon size="lg" variant="outline" color="#E5E7EB" h={36}>
                    <Icon icon="i_search" width="16px" height="16px" />
                  </ActionIcon>
                </Flex>
                <ActionIcon h={40} w={40} variant="outline" color="#D1D5DB" radius={6}>
                  <Icon icon="i_filter" width="20px" height="20px" />
                </ActionIcon>
              </Group>
            )}

            <Group>
              <Button
                color="sky.8"
                radius={10}
                onClick={() => handleLoadDrawer('create', 'create')}
              >
                Create Safety ticket
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
            data={safetyTasksData}
            columns={[
              {
                label: () => {
                  return (
                    <Checkbox
                      color="dark"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedKeys(safetyTasksData);
                        } else {
                          setSelectedKeys([]);
                        }
                      }}
                    />
                  );
                },
                key: 'actions',
                render: ({ id }) => {
                  return (
                    <Checkbox
                      color="dark"
                      checked={selectedKeys.some((item) => item.id === id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          const checkedItem = safetyTasksData.filter((item) => item.id === id);
                          setSelectedKeys([...selectedKeys, ...checkedItem]);
                        } else {
                          setSelectedKeys((prev) => prev.filter((item) => item.id !== id));
                        }
                      }}
                    />
                  );
                },
              },
              {
                label: 'Type',
                key: 'type',
                render(item) {
                  // const color = loadStatusColorMap[item.type as keyof typeof loadStatusColorMap];

                  return (
                    <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                      {item.type ?? '---'}
                    </Text>
                  );
                },
              },
              {
                label: 'Previous',
                key: 'previous',
                sortable: true,
                render(item) {
                  return (
                    <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                      {item.previous.getDate() ?? '---'}
                    </Text>
                  );
                },
              },
              {
                label: 'Date',
                key: 'date',
                sortable: true,
                render(item) {
                  return (
                    <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                      {item.date.getDate() ?? '---'}
                    </Text>
                  );
                },
              },
              {
                label: 'Expires',
                key: 'expires',
                sortable: true,
                render(item) {
                  return (
                    <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                      {item.expires.getDate() ?? '---'}
                    </Text>
                  );
                },
              },
              {
                label: 'Frequency',
                key: 'frequency',
                sortable: true,
                render(item) {
                  return (
                    <Text fz={12} fw={400} lh="140%" c="#71717A">
                      {item.frequency ?? '---'}
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
                    <Text fz={12} fw={400} lh="140%" c="#71717A">
                      {item.driver ?? '---'}
                    </Text>
                  );
                },
              },
              {
                label: 'Truck',
                key: 'truck',
                sortable: true,
                render(item) {
                  return (
                    <Text fz={12} fw={400} lh="140%" c="#71717A">
                      {item.truck ?? '---'}
                    </Text>
                  );
                },
              },
              {
                label: 'Notes',
                key: 'notes',
                sortable: true,
                render(item) {
                  return (
                    <Text fz={12} fw={400} lh="140%" c="#71717A">
                      {item.notes ?? '---'}
                    </Text>
                  );
                },
              },
              {
                label: 'Attachments',
                key: 'attachments',
                render: ({ attachments }) => {
                  return (
                    <FileButton onChange={() => {}}>
                      {(props) => (
                        <Group {...props} gap={8}>
                          <IconUpload size={14} />
                          <Text fz={12} fw={400} lh={'140%'} c={'var(--mantine-color-blue-5)'}>
                            {attachments}
                          </Text>
                        </Group>
                      )}
                    </FileButton>
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

      {viewData && (
        <ViewDrawer
          opened={viewDrawerOpen}
          onClose={() => handleLoadDrawer('view', selectedKeys[0].id, true)}
          position="right"
          title="Ticket Details"
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
              <Button radius={10} color="gray.2" c="neutral.9">
                Edit
              </Button>

              <Button radius={10} color="sky.8">
                Close
              </Button>
            </Group>
          }
        >
          <Stack gap={24}>
            <Stack gap={8}>
              <Group justify="space-between">
                <Text fz={16} fw={400} lh={'24px'} c={grayColors[8]}>
                  Type
                </Text>
                <Text fz={16} fw={600} lh={'24px'}>
                  {viewData.type}
                </Text>
              </Group>
              <Group justify="space-between">
                <Text fz={16} fw={400} lh={'24px'} c={grayColors[8]}>
                  Driver
                </Text>
                <Text fz={16} fw={600} lh={'24px'}>
                  {viewData.driver}
                </Text>
              </Group>
              <Group justify="space-between">
                <Text fz={16} fw={400} lh={'24px'} c={grayColors[8]}>
                  Date
                </Text>
                <Text fz={16} fw={600} lh={'24px'}>
                  {viewData.date.toLocaleDateString()}
                </Text>
              </Group>
              <Group justify="space-between">
                <Text fz={16} fw={400} lh={'24px'} c={grayColors[8]}>
                  Expries
                </Text>
                <Text fz={16} fw={600} lh={'24px'}>
                  {viewData.expires.toLocaleDateString()}
                </Text>
              </Group>
              <Group justify="space-between">
                <Text fz={16} fw={400} lh={'24px'} c={grayColors[8]}>
                  Previous Date
                </Text>
                <Text fz={16} fw={600} lh={'24px'}>
                  {viewData.previous.toLocaleDateString()}
                </Text>
              </Group>
              <Group justify="space-between">
                <Text fz={16} fw={400} lh={'24px'} c={grayColors[8]}>
                  Frequency
                </Text>
                <Text fz={16} fw={600} lh={'24px'}>
                  {viewData.frequency}
                </Text>
              </Group>
              <Group justify="space-between">
                <Text fz={16} fw={400} lh={'24px'} c={grayColors[8]}>
                  Status
                </Text>
                <Text fz={16} fw={600} lh={'24px'}>
                  None
                </Text>
              </Group>
              <Group justify="space-between">
                <Text fz={16} fw={400} lh={'24px'} c={grayColors[8]}>
                  Amount
                </Text>
                <Text fz={16} fw={600} lh={'24px'}>
                  $200
                </Text>
              </Group>
              <Group justify="space-between">
                <Text fz={16} fw={400} lh={'24px'} c={grayColors[8]}>
                  Compensation
                </Text>
                <Text fz={16} fw={600} lh={'24px'}>
                  $200
                </Text>
              </Group>
              <Group justify="space-between">
                <Text fz={16} fw={400} lh={'24px'} c={grayColors[8]}>
                  Note
                </Text>
                <Text fz={16} fw={600} lh={'24px'}>
                  {viewData.notes}
                </Text>
              </Group>
            </Stack>
            <FileButton onChange={() => {}}>
              {(props) => {
                return (
                  <Flex justify={'space-between'}>
                    <Group {...props}>
                      <IconFile size={20} />
                      <Text fz={16} fw={400} lh={'140%'} c={'var(--mantine-color-blue-5)'}>
                        Rate Confirmation
                      </Text>
                    </Group>
                    <ActionIcon variant="subtle">
                      <IconTrash />
                    </ActionIcon>
                  </Flex>
                );
              }}
            </FileButton>
          </Stack>
        </ViewDrawer>
      )}
    </>
  );
};

export default SafetyTasksPage;
