import { Stack, TextInput } from '@mantine/core';
import BottomBreadcrumbComponent from '@/components/bottom-breadcrumb/BottomBreadcrumb.component';
import InnerLayout from '@/components/layout/settings/extra-components/Inner.layout';

const PersonalInfoPage = () => {
  return (
    <>
      <Stack p="16px" h="100%">
        <InnerLayout
          title="Personal info"
          description="Update your personal details, including name and contact information."
        >
          <Stack maw={400} gap={12}>
            <TextInput radius={6} label="Name" placeholder="Rick Astley" />
            <TextInput radius={6} label="Email" placeholder="rick@astley.com" />
          </Stack>
        </InnerLayout>
      </Stack>
      <BottomBreadcrumbComponent
        items={[
          { title: 'Main', href: '/dashboard' },
          { title: 'Settings', href: '/dashboard/settings/personal-info' },
          { title: 'Personal Information', href: '#' },
        ]}
      />
    </>
  );
};

export default PersonalInfoPage;
