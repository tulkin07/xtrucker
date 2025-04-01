import { Stack } from '@mantine/core';
import BottomBreadcrumbComponent from '@/components/bottom-breadcrumb/BottomBreadcrumb.component';
import TopbarLayout from '@/components/layout/dashboard/Topbar.layout';

const DriverStatementsPage = () => {
  return (
    <>
      <Stack p="16px 8px 16px 8px" h="100%">
        <TopbarLayout title="Driver Statements" />
        <Stack component="main" gap={16}>
          lorem
        </Stack>
      </Stack>
      <BottomBreadcrumbComponent
        items={[
          { title: 'Dashboard', href: '/accounting-dashboard' },
          { title: 'Driver Statements', href: '#' },
        ]}
      />
    </>
  );
};

export default DriverStatementsPage;
