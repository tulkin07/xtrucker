import { Stack } from '@mantine/core';
import TopbarLayout from '@/components/layout/dashboard/Topbar.layout';

const LoadManagementPage = () => {
  return (
    <Stack p="16px 8px 16px 8px" h="100%">
      <TopbarLayout title="Load management" />
    </Stack>
  );
};

export default LoadManagementPage;
