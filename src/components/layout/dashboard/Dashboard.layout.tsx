import classes from './styles/main.module.scss';
import { Outlet } from 'react-router-dom';
import GSidebarLayout from './GSidebar.layout';
import SidebarLayout from './Sidebar.layout';

type DashboardLayoutProps = {};

const DashboardLayout: React.FC<DashboardLayoutProps> = () => {
  return (
    <div className={classes.dashboard_main_part} style={{ paddingLeft: '321px' }}>
      <GSidebarLayout />
      <SidebarLayout />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
