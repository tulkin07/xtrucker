import { Stack, TextInput } from '@mantine/core';
import BottomBreadcrumbComponent from '@/components/bottom-breadcrumb/BottomBreadcrumb.component';
import InnerLayout from '@/components/layout/settings/extra-components/Inner.layout';

const SecurityPage = () => {
  return (
    <>
      <Stack p="16px" h="100%">
        <InnerLayout
          title="Security & Passwords"
          description="You can update your password and manage security settings."
        >
          <Stack maw={400} gap={12}>
            <TextInput
              radius={6}
              label="Current Password"
              placeholder="Enter your current password"
            />
            <TextInput radius={6} label="New Password" placeholder="Password" type="password" />
            <TextInput
              radius={6}
              label="Repeat New Password"
              placeholder="Password"
              type="password"
            />
          </Stack>
        </InnerLayout>
      </Stack>
      <BottomBreadcrumbComponent
        items={[
          { title: 'Main', href: '/dashboard' },
          { title: 'Settings', href: '/dashboard/settings/personal-info' },
          { title: 'Security & Passwords', href: '#' },
        ]}
      />
    </>
  );
};

export default SecurityPage;
