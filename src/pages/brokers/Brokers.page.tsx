import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ActionIcon, Button, Flex, Group, Stack, Text, TextInput } from '@mantine/core';
import BottomBreadcrumbComponent from '@/components/bottom-breadcrumb/BottomBreadcrumb.component';
import CreateDrawer from '@/components/drawers/broker/Create.drawer';
import Icon from '@/components/icons/Icon.component';
import classes from '@/components/layout/dashboard/styles/Topbar.module.scss';
import TopbarLayout from '@/components/layout/dashboard/Topbar.layout';
import ModifiedTableComponent from '@/components/table/Table.component';

const BrokersPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const create_drawer_open = useMemo(() => Boolean(searchParams.get('broker')), [searchParams]);
  // const view_drawer_open = useMemo(() => Boolean(searchParams.get('view')), [searchParams]);

  const handleBrokerDrawer = (
    type: 'broker',
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
        <TopbarLayout title="Brokers" />
        <Stack component="main" gap={16}>
          <Group justify="space-between">
            <Flex className={classes.topbar_searchbar}>
              <TextInput
                size="sm"
                variant="default"
                placeholder="Search broker..."
                miw={466}
                h={36}
                classNames={{ input: classes.search_input }}
              />
              <ActionIcon
                size="lg"
                variant="outline"
                color="#E5E7EB"
                h={36}
                className={classes.search_btn}
              >
                <Icon icon="i_search" width="16px" height="16px" />
              </ActionIcon>
            </Flex>
            <Button
              color="sky.8"
              radius={10}
              onClick={() => handleBrokerDrawer('broker', 'create')}
            >
              Create load
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
                label: 'Broker name',
                key: 'name',
                sortable: true,
                render(item) {
                  return (
                    <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                      {item.name ?? '---'}
                    </Text>
                  );
                },
              },
              {
                label: 'Primary phone number',
                key: 'phone_number',
                sortable: true,
                render(item) {
                  return (
                    <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                      {item.phone_number ?? '---'}
                    </Text>
                  );
                },
              },
              {
                label: 'MC',
                key: 'mc_number',
                sortable: true,
                render(item) {
                  return (
                    <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                      {item.mc_number ?? '---'}
                    </Text>
                  );
                },
              },
              {
                label: 'Billing address ',
                key: 'billing_address',
                sortable: true,
                render(item) {
                  return (
                    <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                      {item.billing_address ?? '---'}
                    </Text>
                  );
                },
              },
            ]}
          />
          <CreateDrawer
            opened={create_drawer_open}
            onClose={() => handleBrokerDrawer('broker', 'create', true)}
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
                  onClick={() => handleBrokerDrawer('broker', 'create', true)}
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
      </Stack>
      <BottomBreadcrumbComponent
        items={[
          { title: 'Dashboard', href: '/dashboard' },
          { title: 'Brokers', href: '#' },
        ]}
      />
    </>
  );
};

export default BrokersPage;
