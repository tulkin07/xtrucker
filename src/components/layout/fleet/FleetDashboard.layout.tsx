import { Outlet } from 'react-router-dom';
import classes from '@/components/layout/dashboard/styles/main.module.scss';
import GSidebarLayout from '../dashboard/GSidebar.layout';
import SidebarLayout from './Sidebar.layout';

const AccountingDashboardLayout = () => {
  return (
    <div className={classes.dashboard_main_part} style={{ paddingLeft: '321px' }}>
      <GSidebarLayout />
      <SidebarLayout />
      <Outlet />
    </div>
  );
};

export default AccountingDashboardLayout;
