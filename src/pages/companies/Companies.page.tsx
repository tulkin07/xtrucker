import { useState } from 'react';
import { ActionIcon, Button, Group, Select, Stack, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import BottomBreadcrumbComponent from '@/components/bottom-breadcrumb/BottomBreadcrumb.component';
import CompaniesCreateDrawer from '@/components/drawers/companies/CompaniesCreate.drawer';
import Icon from '@/components/icons/Icon.component';
import TopbarLayout from '@/components/layout/dashboard/Topbar.layout';
import ModifiedTableComponent from '@/components/table/Table.component';
import { COMPANY_DATA } from '@/consts';
import { ICompanyValues, IICompanyValueChildren } from '@/interfaces';

const CompaniesPage = () => {
  const [activeCompany, setActiveCompany] = useState<number | null>(null);
  const [openCreate, { open, close }] = useDisclosure(false);

  // Function to get all child rows for a parent company from all children entries
  const getCompanyDocuments = (company: any) => {
    // If there are no children, return empty array
    if (!company.children || company.children.length === 0) {
      return [];
    }

    // Collect and flatten all data from all children entries
    return company.children.flatMap((child: any) => child.data || []);
  };

  // Function to get concatenated titles from all children entries
  const getChildTitle = (company: any) => {
    // If there are no children, return empty string
    if (!company.children || company.children.length === 0) {
      return '';
    }

    // Return the title of the first child, or concatenate multiple titles
    return company.children.map((child: any) => child.title).join(' / ');
  };

  return (
    <>
      <Stack p="16px 8px 16px 8px" h="100%">
        <TopbarLayout title="Companies" />
        <Stack component="main" gap={16}>
          <Group justify="space-between" align="center">
            <Group>
              <Select
                value="ready"
                placeholder="Ready"
                data={['ready', 'reserved']}
                radius={6}
                color="#D1D5DB"
                styles={{
                  input: {
                    height: '40px',
                    borderColor: '#D1D5DB',
                  },
                }}
              />
              <ActionIcon h={40} w={40} variant="outline" color="#D1D5DB" radius={6}>
                <Icon icon="i_calendar" width="20px" height="20px" />
              </ActionIcon>
            </Group>
            <Button
              color="sky.8"
              radius={10}
              onClick={open}
              leftSection={<Icon icon="i_plus" width="16px" height="16px" color="#fff" />}
            >
              Create company
            </Button>
          </Group>
          <ModifiedTableComponent
            data={COMPANY_DATA}
            paperProps={{
              withBorder: true,
              radius: 8,
              mah: 'calc(100vh - 163px)',
              style: {
                overflow: 'auto',
              },
            }}
            columns={[
              {
                key: 'name',
                label: 'Company Name',
                render(item) {
                  return (
                    <Group justify="start" gap={8}>
                      <ActionIcon variant="subtle">
                        <Icon
                          icon="i_icon_bottom"
                          width="14px"
                          height="14px"
                          style={{
                            transform:
                              activeCompany === item.id ? 'rotate(0deg)' : 'rotate(180deg)',
                            transition: 'transform 300ms ease',
                          }}
                        />
                      </ActionIcon>
                      <Text c="blue.5" fz={12} lh="140%" fw={400}>
                        {item.name}
                      </Text>
                    </Group>
                  );
                },
              },
              {
                key: 'mc_number',
                label: 'MC Number',
              },
              {
                key: 'dot_number',
                label: 'DOT Number',
              },
              {
                key: 'status',
                label: 'Status',
                render(item: ICompanyValues) {
                  return (
                    <Text
                      c={item.status === 'active' ? 'green.6' : 'red.6'}
                      fz={12}
                      lh="140%"
                      fw={400}
                    >
                      {item.status}
                    </Text>
                  );
                },
              },
              {
                key: 'actions',
                label: '',
              },
            ]}
            actions={[
              {
                label: 'Delete',
                icon: () => <Icon icon="i_trash" width="16px" height="16px" />,
                onClick: (item) => console.log(item),
              },
              {
                label: 'Deactivate',
                icon: () => <Icon icon="i_activate" width="16px" height="16px" />,
                onClick: (item) => console.log('View company details', item),
              },
              {
                label: 'Activate',
                icon: () => <Icon icon="i_activate" width="16px" height="16px" />,
                onClick: (item) => console.log('Edit company', item),
              },
            ]}
            // Collapsible table props
            getChildRows={getCompanyDocuments}
            childTitle={getChildTitle}
            onRowClick={(rowId) =>
              setActiveCompany(activeCompany === rowId ? null : (rowId as number))
            }
            expandedRowId={activeCompany}
            // Columns for document data
            childColumns={[
              {
                key: 'file_name',
                label: 'File Name',
                render(item: IICompanyValueChildren) {
                  return (
                    <Text c="blue.5" fz={12} fw={400} lh="140%" style={{ cursor: 'pointer' }}>
                      {item.file_name}
                    </Text>
                  );
                },
              },
              {
                key: 'type',
                label: 'Document Type',
              },
              {
                key: 'updated_at',
                label: 'Last Updated',
              },
            ]}
            // Actions for document rows
            childActions={[
              {
                label: 'Download',
                icon: () => <Icon icon="i_download" width="16px" height="16px" />,
                onClick: (item: IICompanyValueChildren) => console.log('Download document', item),
              },
              {
                label: 'Delete',
                icon: () => <Icon icon="i_delete" width="16px" height="16px" />,
                onClick: (item: IICompanyValueChildren) => console.log('Delete document', item),
              },
            ]}
          />
        </Stack>
      </Stack>
      <BottomBreadcrumbComponent
        items={[
          { title: 'Dashboard', href: '/accounting-dashboard' },
          { title: 'Companies', href: '#' },
        ]}
      />
      <CompaniesCreateDrawer close={close} open={openCreate} />
    </>
  );
};

export default CompaniesPage;
