import { useSearchParams } from 'react-router-dom';
import { Button, Group, Paper, Select, Stack } from '@mantine/core';
import BottomBreadcrumbComponent from '@/components/bottom-breadcrumb/BottomBreadcrumb.component';
import TopbarLayout from '@/components/layout/dashboard/Topbar.layout';
import CustomCalendarComponent from './extra-components/CustomCalendar.component';

const PlanningCalendarPage = () => {
  const [_, setSearchParams] = useSearchParams();

  const handleLoadDrawer = (type: 'create' | 'view', value: 'create' | number, close?: boolean) => {
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
        <TopbarLayout title="Planning calendar" />
        <Stack component="main" gap={16}>
          <Group justify="space-between">
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
            <Button color="sky.8" radius={10} onClick={() => handleLoadDrawer('create', 'create')}>
              Create load
            </Button>
          </Group>
          <Paper withBorder radius={8} mah="calc(100vh - 163px)" style={{ overflow: 'auto' }}>
            <CustomCalendarComponent />
          </Paper>
        </Stack>
      </Stack>
      <BottomBreadcrumbComponent
        items={[
          { title: 'Dashboard', href: '/dashboard' },
          { title: 'Planning calendar', href: '#' },
        ]}
      />
    </>
  );
};

export default PlanningCalendarPage;
