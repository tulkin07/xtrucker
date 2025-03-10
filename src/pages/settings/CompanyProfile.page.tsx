import { Grid, Stack, TextInput } from '@mantine/core';
import BottomBreadcrumbComponent from '@/components/bottom-breadcrumb/BottomBreadcrumb.component';
import InnerLayout from '@/components/layout/settings/extra-components/Inner.layout';

const CompanyProfilePage = () => {
  return (
    <>
      <Stack p="16px" h="100%">
        <InnerLayout
          title="Company profile"
          description="You can change the company name and other details."
        >
          <Stack maw={400}>
            <Grid gutter={12}>
              <Grid.Col>
                <TextInput radius={6} label="Company name" placeholder="Xtrucking" />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput radius={6} label="DOT number" placeholder="00-00-00" />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput radius={6} label="MC number" placeholder="00-00-00" />
              </Grid.Col>
            </Grid>
          </Stack>
        </InnerLayout>
      </Stack>
      <BottomBreadcrumbComponent
        items={[
          { title: 'Main', href: '/dashboard' },
          { title: 'Settings', href: '/dashboard/settings/personal-info' },
          { title: 'Company profile', href: '#' },
        ]}
      />
    </>
  );
};

export default CompanyProfilePage;
