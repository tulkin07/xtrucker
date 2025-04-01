import { useCallback, useState } from 'react';
import { ActionIcon, Button, Checkbox, Flex, Group, Stack, Text, TextInput } from '@mantine/core';
import BottomBreadcrumbComponent from '@/components/bottom-breadcrumb/BottomBreadcrumb.component';
import Icon from '@/components/icons/Icon.component';
import classes from '@/components/layout/dashboard/styles/Topbar.module.scss';
import TopbarLayout from '@/components/layout/dashboard/Topbar.layout';
import ModifiedTableComponent from '@/components/table/Table.component';
import { INVOICE_FACTORING } from '@/consts';
import { IInvoiceFactoring } from '@/interfaces';

const InvoicesPage = () => {
  const [selectedRecords, setSelectedRecords] = useState<Record<string, unknown>[]>([]);

  const handleSelectedRecordsChange = useCallback(
    (newSelectedRecords: Record<keyof IInvoiceFactoring, unknown>[]) => {
      setSelectedRecords(newSelectedRecords);
    },
    []
  );

  return (
    <>
      <Stack p="16px 8px 16px 8px" h="100%">
        <TopbarLayout title="Invoice & Factoring" />
        <Stack component="main" gap={16}>
          <Group justify="space-between">
            <Group>
              <Flex className={classes.topbar_searchbar}>
                <TextInput
                  size="sm"
                  variant="default"
                  placeholder="Search for anything..."
                  miw={278}
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
              <ActionIcon h={36} w={36} variant="outline" color="#D1D5DB" radius={6}>
                <Icon icon="i_filter_line" width="20px" height="20px" />
              </ActionIcon>
            </Group>
            <Button color="sky.8" radius={10}>
              Create factoring doc
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
            data={INVOICE_FACTORING}
            columns={[
              {
                label: () => {
                  return (
                    <Checkbox
                      color="dark"
                      checked={selectedRecords.length === INVOICE_FACTORING.length}
                      onChange={(e) => {
                        if (e.target.checked) {
                          handleSelectedRecordsChange(INVOICE_FACTORING);
                        } else {
                          handleSelectedRecordsChange([]);
                        }
                      }}
                    />
                  );
                },
                key: 'actions',
                render(item) {
                  return (
                    <Checkbox
                      color="dark"
                      checked={Boolean(selectedRecords.find((selected) => selected.id === item.id))}
                      onChange={(e) => {
                        if (e.target.checked) {
                          const newRecords = [...selectedRecords, item];
                          handleSelectedRecordsChange(newRecords);
                        } else {
                          const filteredRecords = selectedRecords.filter(
                            (selected) => selected.id !== item.id
                          );
                          handleSelectedRecordsChange(filteredRecords);
                        }
                      }}
                    />
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
                label: 'Broker',
                key: 'broker',
                sortable: true,
                render(item) {
                  return (
                    <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                      {item.broker ?? '---'}
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
                label: 'PU&DEL',
                key: 'pu_del',
                sortable: true,
                render(item) {
                  return (
                    <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                      {item.pu_del ?? '---'}
                    </Text>
                  );
                },
              },
              {
                label: 'Delivery Date',
                key: 'delivery_date',
                sortable: true,
                render(item) {
                  return (
                    <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                      {item.delivery_date ?? '---'}
                    </Text>
                  );
                },
              },
              {
                label: 'PU&DEL',
                key: 'pu_del',
                sortable: true,
                render(item) {
                  return (
                    <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                      {item.pu_del ?? '---'}
                    </Text>
                  );
                },
              },
              {
                label: 'Amount',
                key: 'amount',
                sortable: true,
                render(item) {
                  return (
                    <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                      {item.amount ?? '---'}
                    </Text>
                  );
                },
              },
              {
                label: 'Status',
                key: 'status',
                sortable: true,
                render(item) {
                  return (
                    <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                      {item.status ?? '---'}
                    </Text>
                  );
                },
              },
              {
                label: 'Comments',
                key: 'comment',
                sortable: true,
                render(item) {
                  return (
                    <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                      {item.comment ?? '---'}
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
          { title: 'Dashboard', href: '/accounting-dashboard' },
          { title: 'Invoice & Factoring', href: '#' },
        ]}
      />
    </>
  );
};

export default InvoicesPage;
