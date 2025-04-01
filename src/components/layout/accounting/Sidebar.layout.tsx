import { Group, Stack } from '@mantine/core';
import Icon from '@/components/icons/Icon.component';
import NavSection from '@/components/layout/dashboard/extra-components/Nav.section';
import classes from '@/components/layout/dashboard/styles/Sidebar.module.scss';

const SidebarLayout = () => {
  return (
    <Stack gap={0} className={classes.dashbaord_sidebar} left={72}>
      <Group p={12} className={classes.sidebar_logo_wrapper}>
        <Icon icon="i_xtrucker" width="136.35px" height="32px" />
      </Group>
      <Stack p={12} gap={12}>
        <NavSection
          title="Accounting menu"
          links={[
            { icon: 'i_doc', label: 'Invoice & Factoring', path: '/accounting-dashboard' },
            {
              icon: 'i_progress',
              label: 'Income & Expense',
              path: '/accounting-dashboard/income-expence',
            },
            {
              icon: 'i_doc_duplicate',
              label: 'Driver Statements',
              path: '/accounting-dashboard/driver-statement',
            },
            {
              icon: 'i_office_building',
              label: 'Companies',
              path: '/accounting-dashboard/companies',
            },
            {
              icon: 'i_collection',
              label: 'File Viewer',
              path: '/accounting-dashboard/file-viewer',
            },
          ]}
        />
      </Stack>
    </Stack>
  );
};

export default SidebarLayout;
