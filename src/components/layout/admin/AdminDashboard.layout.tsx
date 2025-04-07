import classes from '../dashboard/styles/main.module.scss';
import { Outlet } from 'react-router-dom';
import GSidebarLayout from '../dashboard/GSidebar.layout';
import SidebarLayout from './Sidebar.layout';

const AdminDashboardLayout = () => {
  return (
    <div className={classes.dashboard_main_part} style={{ paddingLeft: '321px' }}>
      <GSidebarLayout />
      <SidebarLayout />
      <Outlet />
    </div>
  );
};

export default AdminDashboardLayout;
