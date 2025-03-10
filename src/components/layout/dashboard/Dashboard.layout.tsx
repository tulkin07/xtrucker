import classes from './styles/main.module.scss';
import { Outlet } from 'react-router-dom';
import SidebarLayout from './Sidebar.layout';

type DashboardLayoutProps = {};

const DashboardLayout: React.FC<DashboardLayoutProps> = () => {
  return (
    <div className={classes.dashboard_main_part}>
      <SidebarLayout />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
