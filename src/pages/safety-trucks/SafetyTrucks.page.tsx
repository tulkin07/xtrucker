import { IconUpload } from '@tabler/icons-react';
import { FileButton, Group, Stack, Text, FileInput } from '@mantine/core';
import BottomBreadcrumbComponent from '@/components/bottom-breadcrumb/BottomBreadcrumb.component';
import TopbarLayout from '@/components/layout/dashboard/Topbar.layout';
import ModifiedTableComponent from '@/components/table';

const SafetyTrucksPage = () => {
  return (
    <>
      <Stack p="16px 8px 16px 8px" h="100%">
        <TopbarLayout title="Trucks" />
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
                registration: 'Upload...',
                inspection: 'Upload...',
                leaseAgreement: 'Upload...',
                title: 'Upload...',
              },
              {
                id: 2,
                truck: 'Truck',
                licence: 'R234',
                operatedBy: { name: 'John Doe', position: 'Finast' },
                registration: 'Upload...',
                inspection: 'Upload...',
                leaseAgreement: 'Upload...',
                title: 'Upload...',
              },
              {
                id: 3,
                truck: 'Truck',
                licence: 'R234',
                operatedBy: { name: 'John Doe', position: 'Finast' },
                registration: 'Upload...',
                inspection: 'Upload...',
                leaseAgreement: 'Upload...',
                title: 'Upload...',
              },
              {
                id: 4,
                truck: 'Truck',
                licence: 'R234',
                operatedBy: { name: 'John Doe', position: 'Finast' },
                registration: 'Upload...',
                inspection: 'Upload...',
                leaseAgreement: 'Upload...',
                title: 'Upload...',
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
                      <Text fz={12} fw={400} lh="140%" c="var(--mantine-color-blue-5)">
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
                    <FileButton onChange={() => {}}>
                      {(props) => (
                        <Group {...props} gap={8} styles={{ root: { cursor: 'pointer' } }}>
                          <IconUpload size={14} />
                          <Text fz={12} fw={400} lh="140%" c="var(--mantine-color-blue-5)">
                            {item.registration ?? 'Upload'}
                          </Text>
                        </Group>
                      )}
                    </FileButton>
                  );
                },
              },
              {
                label: 'Inspection',
                key: 'inspection',
                sortable: true,
                render(item) {
                  return (
                    <FileButton onChange={() => {}}>
                      {(props) => (
                        <Group {...props} gap={8} styles={{ root: { cursor: 'pointer' } }}>
                          <IconUpload size={14} />
                          <Text fz={12} fw={400} lh="140%" c="var(--mantine-color-blue-5)">
                            {item.inspection ?? 'Upload'}
                          </Text>
                        </Group>
                      )}
                    </FileButton>
                  );
                },
              },
              {
                label: 'Lease Agreement',
                key: 'leaseAgreement',
                sortable: true,
                render(item) {
                  return (
                    <FileButton onChange={() => {}}>
                      {(props) => (
                        <Group {...props} gap={8} styles={{ root: { cursor: 'pointer' } }}>
                          <IconUpload size={14} />
                          <Text fz={12} fw={400} lh="140%" c="var(--mantine-color-blue-5)">
                            {item.leaseAgreement ?? 'Upload'}
                          </Text>
                        </Group>
                      )}
                    </FileButton>
                  );
                },
              },
              {
                label: 'Title',
                key: 'title',
                sortable: true,
                render(item) {
                  return (
                    <FileButton onChange={() => {}}>
                      {(props) => (
                        <Group {...props} gap={8} styles={{ root: { cursor: 'pointer' } }}>
                          <IconUpload size={14} />
                          <Text fz={12} fw={400} lh="140%" c="var(--mantine-color-blue-5)">
                            {item.title ?? 'Upload'}
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
    </>
  );
};

export default SafetyTrucksPage;
