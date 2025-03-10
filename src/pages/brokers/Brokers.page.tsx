import { Stack } from '@mantine/core';
import TopbarLayout from '@/components/layout/dashboard/Topbar.layout';

const BrokersPage = () => {
  return (
    <Stack p="16px 8px 16px 8px" h="100%">
      <TopbarLayout title="Brokers" />
    </Stack>
  );
};

export default BrokersPage;
