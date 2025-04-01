import { Stack } from '@mantine/core';
import BottomBreadcrumbComponent from '@/components/bottom-breadcrumb/BottomBreadcrumb.component';
import TopbarLayout from '@/components/layout/dashboard/Topbar.layout';

const IncomeExpensePage = () => {
  return (
    <>
      <Stack p="16px 8px 16px 8px" h="100%">
        <TopbarLayout title="Income & Expense" />
        <Stack component="main" gap={16}>
          lorem
        </Stack>
      </Stack>
      <BottomBreadcrumbComponent
        items={[
          { title: 'Dashboard', href: '/accounting-dashboard' },
          { title: 'Income & Expense', href: '#' },
        ]}
      />
    </>
  );
};

export default IncomeExpensePage;
