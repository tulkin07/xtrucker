import { Stack } from '@mantine/core';
import BottomBreadcrumbComponent from '@/components/bottom-breadcrumb/BottomBreadcrumb.component';
import TopbarLayout from '@/components/layout/dashboard/Topbar.layout';

const CompaniesPage = () => {
  return (
    <>
      <Stack p="16px 8px 16px 8px" h="100%">
        <TopbarLayout title="Companies" />
        <Stack component="main" gap={16}>
          lorem
        </Stack>
      </Stack>
      <BottomBreadcrumbComponent
        items={[
          { title: 'Dashboard', href: '/accounting-dashboard' },
          { title: 'Companies', href: '#' },
        ]}
      />
    </>
  );
};

export default CompaniesPage;
