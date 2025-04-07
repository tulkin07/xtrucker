import { IconUpload } from '@tabler/icons-react';
import { FileInput, Stack, Text } from '@mantine/core';
import BottomBreadcrumbComponent from '@/components/bottom-breadcrumb/BottomBreadcrumb.component';
import TopbarLayout from '@/components/layout/dashboard/Topbar.layout';
import ModifiedTableComponent from '@/components/table';

const SafetyTrucksPage = () => {
  // const [searchParams, setSearchParams] = useSearchParams();

  // const create_drawer_open = useMemo(() => Boolean(searchParams.get('create')), [searchParams]);

  // const handleLoadDrawer = (type: 'create' | 'view', value: 'create' | number, close?: boolean) => {
  //   setSearchParams((prevParams) => {
  //     if (close) {
  //       prevParams.delete(type);
  //       return prevParams;
  //     }
  //     prevParams.set(type, value.toString());
  //     return prevParams;
  //   });
  // };

  return (
    <>
      <Stack p="16px 8px 16px 8px" h="100%">
        <TopbarLayout title="Safety Tickets" />
        <Stack component="main" gap={16}>
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
                truck: 'Truck',
                licence: 'R234',
                operatedBy: { name: 'John Doe', position: 'Finast' },
                registration: 'Upload',
                inspection: 'Upload',
                leaseAgreement: 'Upload',
                title: 'Upload',
              },
            ]}
            columns={[
              {
                label: 'Truck#',
                key: 'truck',
                render(item) {
                  return (
                    <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                      {item.truck ?? '---'}
                    </Text>
                  );
                },
              },
              {
                label: 'Licence plate',
                key: 'licence',
                sortable: true,
                render(item) {
                  return (
                    <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                      {item.licence ?? '---'}
                    </Text>
                  );
                },
              },
              {
                label: 'Operated By',
                key: 'operatedBy',
                sortable: true,
                render(item) {
                  return (
                    <Stack gap={0}>
                      <Text fz={12} fw={400} lh="140%" c="#0A0A0A">
                        {item.operatedBy.name ?? '---'}
                      </Text>
                      <Text fz={10} fw={400} lh="140%" c="var(--mantine-color-blue-5)">
                        {item.operatedBy.position ?? '---'}
                      </Text>
                    </Stack>
                  );
                },
              },
              {
                label: 'Registration',
                key: 'registration',
                sortable: true,
                render(item) {
                  return (
                    <FileInput
                      leftSection={<IconUpload />}
                      fz={12}
                      fw={400}
                      lh="140%"
                      c="var(--mantine-color-blue-5)"
                      placeholder={item.registration}
                    />
                  );
                },
              },
              {
                label: 'Inspection',
                key: 'inspection',
                sortable: true,
                render(item) {
                  return (
                    <FileInput
                      leftSection={<IconUpload />}
                      fz={12}
                      fw={400}
                      lh="140%"
                      c="var(--mantine-color-blue-5)"
                      placeholder={item.inspection}
                    />
                  );
                },
              },
              {
                label: 'Lease Agreement',
                key: 'leaseAgreement',
                sortable: true,
                render(item) {
                  return (
                    <FileInput
                      leftSection={<IconUpload />}
                      fz={12}
                      fw={400}
                      lh="140%"
                      c="var(--mantine-color-blue-5)"
                      placeholder={item.leaseAgreement}
                    />
                  );
                },
              },
              {
                label: 'Title',
                key: 'title',
                sortable: true,
                render(item) {
                  return (
                    <FileInput
                      leftSection={<IconUpload />}
                      fz={12}
                      fw={400}
                      lh="140%"
                      c="var(--mantine-color-blue-5)"
                      placeholder={item.title}
                    />
                  );
                },
              },
            ]}
          />
        </Stack>
      </Stack>
      <BottomBreadcrumbComponent items={[{ title: 'Load management', href: '#' }]} />
      {/* <CreateDrawer
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
    /> */}
    </>
  );
};

export default SafetyTrucksPage;
