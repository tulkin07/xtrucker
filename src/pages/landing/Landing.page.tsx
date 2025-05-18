import AccountingComponent from './extra-components/Accounting.component';
import HeroComponent from './extra-components/Hero.component';
import NavbarComponent from './extra-components/Navbar.component';
import RolesComponent from './extra-components/Roles.component';
import SuggestionsComponent from './extra-components/Suggestions.component';
import ToolsComponent from './extra-components/Tools.component';

const LandingPage = () => {
  return (
    <>
      <NavbarComponent />
      <HeroComponent />
      <ToolsComponent />
      <AccountingComponent />
      <RolesComponent />
      <SuggestionsComponent />
    </>
  );
};

export default LandingPage;
