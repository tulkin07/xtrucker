import { useEffect, useMemo, useState } from 'react';
import {
  IconArrowAutofitLeft,
  IconBadge,
  IconCheck,
  IconFile,
  IconPlus,
  IconProgress,
  IconTrash,
} from '@tabler/icons-react';
import { useSearchParams } from 'react-router-dom';
import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Checkbox,
  FileButton,
  Flex,
  Group,
  Select,
  Stack,
  Text,
} from '@mantine/core';
import BottomBreadcrumbComponent from '@/components/bottom-breadcrumb/BottomBreadcrumb.component';
import CreateDrawer from '@/components/drawers/safety-schedule/Create.drawer';
import ViewDrawer from '@/components/drawers/safety-schedule/View.drawer';
import Icon from '@/components/icons';
import TopbarLayout from '@/components/layout/dashboard/Topbar.layout';
import ModifiedTableComponent from '@/components/table';
import { ISafetyExpirationDate } from '@/interfaces';
import { greenColors, zincColors } from '@/lib/theme/colors';

const SafetyScheduleCalendarPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedKeys, setSelectedKeys] = useState<ISafetyExpirationDate[]>([]);
  const [viewData, setViewData] = useState<ISafetyExpirationDate | null>(null);
  const [file, setFile] = useState<File | null>(null);

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

  const safetyScheduleData: ISafetyExpirationDate[] = [
    {
      id: 1,
      order: 234234,
      unit: { id: 3234, name: 'Trailer' },
      odometer: { miles: 234234, hours: 234234 },
      repairDate: new Date(),
      totalCost: 2342,
      billTo: { name: 'John Doe', carrier: 'Jonthan' },
      status: 'unpaid',
      paymentData: [{ id: 1, serviceType: 'Wheel', quantity: 5, price: 1000, date: new Date() }],
    },
    {
      id: 2,
      order: 234234,
      unit: { id: 3234, name: 'Trailer' },
      odometer: { miles: 234234, hours: 234234 },
      repairDate: new Date(),
      totalCost: 2342,
      billTo: { name: 'John Doe', carrier: 'Jonthan' },
      status: 'unpaid',
      paymentData: [{ id: 2, serviceType: 'Wheel', quantity: 2, price: 1000, date: new Date() }],
    },
  ];

  return (
    <>
      <Stack p="16px 8px 16px 8px" h="100%">
        <TopbarLayout title="Maintenance" />
        <Stack component="main" gap={16}>
          <Group justify="space-between">
            {selectedKeys.length > 0 ? (
              <Group
                bg={zincColors[1]}
                styles={{ root: { borderRadius: '8px', gap: '12px', padding: '2px 8px' } }}
              >
                <Icon icon="i_close" width="20px" height="20px" />
                <Text>{selectedKeys.length} selected</Text>
                <Button variant="subtle" color="dark" radius="md" leftSection={<IconCheck />}>
                  Mark as complete
                </Button>
                <Button
                  variant="subtle"
                  color="dark"
                  radius="md"
                  leftSection={<IconBadge />}
                  onClick={() => handleLoadDrawer('view', selectedKeys[0].id)}
                >
                  Mark as paid
                </Button>
                <ActionIcon variant="subtle" color="dark" radius="md">
                  <IconTrash />
                </ActionIcon>
              </Group>
            ) : (
              <Group>
                <Select radius={6} placeholder="Unit" />
              </Group>
            )}
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
            data={safetyScheduleData}
            columns={[
              {
                label: () => {
                  return (
                    <Checkbox
                      color="dark"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedKeys(safetyScheduleData);
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
                          const checkedItem = safetyScheduleData.filter((item) => item.id === id);
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
                    <Group justify="space-between" wrap="nowrap" miw={180}>
                      <Text fz={12} fw={400} lh="140%" c="neutral.9">
                        {item.unit.id}
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
                label: 'Odometer',
                key: 'odometer',
                sortable: true,
                render(item) {
                  return (
                    <Stack gap={4}>
                      <Group justify="start" gap={4} wrap="nowrap">
                        <Icon icon="i_milemeter" color="#71717A" width="14px" height="14px" />
                        <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                          {item.odometer.miles ?? '---'} Miles
                        </Text>
                      </Group>
                      <Group justify="start" gap={4} wrap="nowrap">
                        <Icon icon="i_engine" color="#71717A" width="14px" height="14px" />
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
                        Carrier: {item.billTo.carrier ?? '---'}
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
        overlayProps={{ backgroundOpacity: 0 }}
        size={'calc(100% - 320px)'}
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
              Create Order
            </Button>
          </Group>
        }
      />

      {viewData && (
        <ViewDrawer
          opened={viewDrawerOpen}
          onClose={() => handleLoadDrawer('view', selectedKeys[0].id, true)}
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
                #{viewData.order}
              </Text>{' '}
            </Group>
          }
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
              <Button radius={10} color="gray.2" c="neutral.9">
                Download
              </Button>
              <Button radius={10} color="sky.8">
                Mark as paid
              </Button>
            </Group>
          }
        >
          <Stack gap={24} maw={664}>
            <Stack>
              <Text fz={16} fw={600} lh="140%">
                Driver Information
              </Text>
              <Stack gap={6}>
                <Group>
                  <Text fz={14} fw={400} lh={'140%'}>
                    Name:
                  </Text>
                  <Text fz={14} fw={400} lh={'140%'}>
                    {viewData?.billTo.name}
                  </Text>
                </Group>
                <Group>
                  <Text fz={14} fw={400} lh={'140%'}>
                    Truck:
                  </Text>
                  <Text fz={14} fw={400} lh={'140%'}>
                    {viewData?.unit.id}
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
            </Stack>
            <Stack>
              <Flex justify="space-between" align="center" p="md">
                <Group>
                  <IconFile size={20} />
                  <Text>{file ? file.name : 'Upload invoice'}</Text>
                </Group>

                <FileButton onChange={setFile}>
                  {(props) => (
                    <Button {...props} radius="md" color="sky.8">
                      Upload
                    </Button>
                  )}
                </FileButton>
              </Flex>
            </Stack>
            <Stack>
              <Text fz={16} fw={600} lh="140%">
                Maintenance & repairs
              </Text>
              {viewData?.paymentData && (
                <ModifiedTableComponent
                  data={viewData?.paymentData}
                  columns={[
                    {
                      label: 'Services Types',
                      key: 'serviceType',
                    },
                    {
                      label: 'Date',
                      key: 'date',
                      render: ({ date }) => date.toLocaleDateString(),
                    },
                    {
                      label: 'Qty',
                      key: 'quantity',
                      render: ({ quantity }) => {
                        if (!quantity) {
                          return null;
                        }
                        return `${quantity}x`;
                      },
                    },
                    {
                      label: 'Price',
                      key: 'price',
                      render: ({ price }) => `$${price}`,
                    },
                    {
                      label: 'Total Cost',
                      key: 'total',
                      render: ({ price, quantity }) => (quantity ?? 1) * price,
                    },
                  ]}
                />
              )}
            </Stack>

            <Stack>
              <Text fz={16} fw={600} lh="140%">
                Bill to (Payer)
              </Text>
              <Stack gap={6}>
                <Group>
                  <Text fz={14} fw={400} lh={'140%'}>
                    Payers:
                  </Text>
                  <Text fz={14} fw={400} lh={'140%'}>
                    {viewData?.billTo.name}
                  </Text>
                </Group>
                <Group>
                  <Text fz={14} fw={400} lh={'140%'}>
                    Payers Date:
                  </Text>
                  <Text fz={14} fw={400} lh={'140%'}>
                    {viewData?.repairDate.toLocaleDateString()}
                  </Text>
                </Group>
              </Stack>
            </Stack>
            <Stack>
              <Text fz={16} fw={600} lh="140%">
                Total
              </Text>
              <Group
                bg={greenColors[1]}
                w={145}
                styles={{
                  root: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '10px',
                    borderRadius: '8px',
                    padding: '8px',
                  },
                }}
              >
                <Text fz={14} fw={400} lh="140%" c={greenColors[9]}>
                  Net Expense:
                </Text>
                <Text fz={20} fw={600} lh="140%" c={greenColors[9]}>
                  ${viewData.totalCost}
                </Text>
              </Group>
            </Stack>
          </Stack>
        </ViewDrawer>
      )}
    </>
  );
};

export default SafetyScheduleCalendarPage;
