import BottomBreadcrumbComponent from "@/components/bottom-breadcrumb/BottomBreadcrumb.component";
import CreateDrawer from "@/components/drawers/safety/Create.drawer";
import Icon from "@/components/icons";
import TopbarLayout from "@/components/layout/dashboard/Topbar.layout";
import ModifiedTableComponent from "@/components/table";
import { ActionIcon, Button, Flex, Group, Stack, Text, TextInput } from "@mantine/core";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const SafetyTasksPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()


    const create_drawer_open = useMemo(() => Boolean(searchParams.get('create')), [searchParams]);
  

  const handleLoadDrawer = (type: 'create' | 'view', value: 'create' | number, close?: boolean) => {
    setSearchParams((prevParams) => {
      if (close) {
        prevParams.delete(type)
        return prevParams
      } 
      prevParams.set(type, value.toString())
      return prevParams        
    })
  }


  return (
    <>
    <Stack p="16px 8px 16px 8px" h="100%">
      <TopbarLayout title="Safety Tickets" />
      <Stack component="main" gap={16}>
        <Group justify="space-between">
          <Group>
          <Flex >
        <TextInput
          size="sm"
          variant="default"
          placeholder="Search for invoices"
          miw={278}
          h={36}
        />
        <ActionIcon
          size="lg"
          variant="outline"
          color="#E5E7EB"
          h={36}
        >
          <Icon icon="i_search" width="16px" height="16px" />
        </ActionIcon>
      </Flex>
            <ActionIcon h={40} w={40} variant="outline" color="#D1D5DB" radius={6}>
              <Icon icon="i_filter" width="20px" height="20px" />
            </ActionIcon>
          </Group>
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
          data={[  {
            id: 1,
            type: 'Drug Test',
            previous: new Date(),
            date: new Date(),
            expires: new Date(),
            frequency: "Yearly",
            driver: "Kennedy",
           truck: "234234",
            notes: "Notes",
            attachments: "file"
          },]}
          columns={[
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
            { label: 'Attachments', key: 'attachments' },
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
  )
};

export default SafetyTasksPage;
