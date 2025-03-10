import classes from './styles/Sidebar.module.scss';
import { Stack } from '@mantine/core';
import NavSection from '../dashboard/extra-components/Nav.section';

const SidebarLayout = () => {
  return (
    <Stack gap={0} className={classes.settings_dashboard_sidebar}>
      <Stack p={12} gap={12}>
        <NavSection
          title="General"
          links={[
            {
              icon: 'i_settings_profile',
              label: 'Personal information',
              path: '/dashboard/settings/personal-info',
            },
            {
              icon: 'i_building',
              label: 'Company profile',
              path: '/dashboard/settings/company-profile',
            },
            {
              icon: 'i_key',
              label: 'Security & Passwords',
              path: '/dashboard/settings/security-passwords',
            },
            {
              icon: 'i_puzzle',
              label: 'Integrations',
              path: '/dashboard/settings/integrations',
            },
          ]}
        />
      </Stack>
    </Stack>
  );
};

export default SidebarLayout;
