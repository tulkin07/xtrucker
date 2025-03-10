import classes from './styles/main.module.scss';
import { Outlet } from 'react-router-dom';
import SidebarLayout from './Sidebar.layout';
import TopbarLayout from './Topbar.layout';

const SettingsLayout = () => {
  return (
    <div className={classes.settings_dashboard_main_part}>
      <TopbarLayout />
      <SidebarLayout />
      <Outlet />
    </div>
  );
};

export default SettingsLayout;
