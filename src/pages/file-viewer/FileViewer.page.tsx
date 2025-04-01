import { Stack } from '@mantine/core';
import BottomBreadcrumbComponent from '@/components/bottom-breadcrumb/BottomBreadcrumb.component';
import TopbarLayout from '@/components/layout/dashboard/Topbar.layout';

const FileViewerPage = () => {
  return (
    <>
      <Stack p="16px 8px 16px 8px" h="100%">
        <TopbarLayout title="File Viewer" />
        <Stack component="main" gap={16}>
          lorem
        </Stack>
      </Stack>
      <BottomBreadcrumbComponent
        items={[
          { title: 'Dashboard', href: '/accounting-dashboard' },
          { title: 'File Viewer', href: '#' },
        ]}
      />
    </>
  );
};

export default FileViewerPage;
