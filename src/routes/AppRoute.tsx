import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Spinner from '@/components/ui/Spinner';
import AuthRoute from './AuthRoute';
import ProtectedRoute from './ProtectedRoute';

// Layouts
const DashboardLayout = lazy(() => import('@/components/layout/dashboard/Dashboard.layout'));
const SettingsLayout = lazy(() => import('@/components/layout/settings/Settings.layout'));
const FleetDashboardLayout = lazy(() => import('@/components/layout/fleet/FleetDashboard.layout'));
const AccountingDashboardLayout = lazy(
  () => import('@/components/layout/accounting/AccountingDashboard.layout')
);
const SafetyDashboardLayout = lazy(
  () => import('@/components/layout/safety/SafetyDashboard.layout')
);
const AdminDashboardLayout = lazy(() => import('@/components/layout/admin/AdminDashboard.layout'));
const SimpleLayout = lazy(() => import('@/components/layout/simple-layout'));

// Pages
const LandingPage = lazy(() => import('@/pages/landing/Landing.page'));
const LoginPage = lazy(() => import('@/pages/auth/pages/Login.page'));
const OauthCallbackPage = lazy(() => import('@/pages/auth/pages/OauthCallback'));
const SignUpPage = lazy(() => import('@/pages/auth/pages/SignUp.page'));
const OnboardingPage = lazy(() => import('@/pages/Onboarding.page'));
const NotFoundPage = lazy(() => import('@/pages/404.page'));

// Dashboard pages (examples, group similar together)
const LoadManagement = lazy(() => import('@/pages/load-management'));
const PlanningCalendar = lazy(() => import('@/pages/planning-calendar'));
const MapView = lazy(() => import('@/pages/map-view'));
const Drivers = lazy(() => import('@/pages/drivers'));
const Brokers = lazy(() => import('@/pages/brokers'));

// Settings
const PersonalInfoPage = lazy(() => import('@/pages/settings/PersonalInfo.page'));
const CompanyProfilePage = lazy(() => import('@/pages/settings/CompanyProfile.page'));
const SecurityPage = lazy(() => import('@/pages/settings/Security.page'));
const IntegrationsPage = lazy(() => import('@/pages/settings/Integrations.page'));

// Admin
const EmployeesPage = lazy(() => import('@/pages/employees'));
const RolesPage = lazy(() => import('@/pages/roles'));
const RoleCreatePage = lazy(() => import('@/pages/roles/RoleCreate.page'));

// Accounting
const InvoicesPage = lazy(() => import('@/pages/invoices'));
const IncomeExpensePage = lazy(() => import('@/pages/income-expense'));
const DriverStatements = lazy(() => import('@/pages/driver-statements'));
const CreateDriverStatementPage = lazy(() => import('@/pages/driver-statements/crud'));
const CompaniesPage = lazy(() => import('@/pages/companies'));
const FileViewerPage = lazy(() => import('@/pages/file-viewer'));

// Safety
const LogBookPage = lazy(() => import('@/pages/log-book'));
const SafetyTasksPage = lazy(() => import('@/pages/safety-tasks'));
const SafetyTrucksPage = lazy(() => import('@/pages/safety-trucks'));
const SafetyScheduleCalendarPage = lazy(() => import('@/pages/safety-schedule-calendar'));

// Fleet
const FleetTrucksPage = lazy(() => import('@/pages/fleet-trucks'));
const FleetTrailersPage = lazy(() => import('@/pages/fleet-trailers'));
const FleetMaintenance = lazy(() => import('@/pages/fleet-maintenance'));
const FleetMapViewPage = lazy(() => import('@/pages/fleet-overview/MapView.page'));

// Loaders (you can add fallback loaders here if needed)

const suspenseWrapper = (element: React.ReactNode, fallback: React.ReactNode = <Spinner />) => (
  <Suspense fallback={fallback}>{element}</Suspense>
);

const withProtected = (element: React.ReactNode, roles?: string[]) => (
  <ProtectedRoute roles={roles}>{element}</ProtectedRoute>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: suspenseWrapper(<LandingPage />),
  },
  {
    path: '/oauth-callback',
    element: suspenseWrapper(
      <AuthRoute>
        <OauthCallbackPage />
      </AuthRoute>
    ),
  },
  {
    path: '/login',
    element: suspenseWrapper(
      <AuthRoute>
        <LoginPage />
      </AuthRoute>
    ),
  },
  {
    path: '/sign-up',
    element: suspenseWrapper(
      <AuthRoute>
        <SignUpPage />
      </AuthRoute>
    ),
  },
  {
    path: '/onboarding',
    element: suspenseWrapper(<OnboardingPage />),
  },
  {
    path: '/dashboard',
    element: suspenseWrapper(withProtected(<DashboardLayout />, ['superuser'])),
    children: [
      { index: true, element: suspenseWrapper(<LoadManagement />) },
      { path: 'planning-calendar', element: suspenseWrapper(<PlanningCalendar />) },
      { path: 'map-view', element: suspenseWrapper(<MapView />) },
      { path: 'drivers', element: suspenseWrapper(<Drivers />) },
      { path: 'brokers', element: suspenseWrapper(<Brokers />) },
    ],
  },
  {
    path: '/dashboard/settings',
    element: suspenseWrapper(withProtected(<SettingsLayout />)),
    children: [
      { path: 'personal-info', element: suspenseWrapper(<PersonalInfoPage />) },
      { path: 'company-profile', element: suspenseWrapper(<CompanyProfilePage />) },
      { path: 'security-passwords', element: suspenseWrapper(<SecurityPage />) },
      { path: 'integrations', element: suspenseWrapper(<IntegrationsPage />) },
    ],
  },
  {
    path: '/admin-dashboard',
    element: suspenseWrapper(withProtected(<AdminDashboardLayout />, ['superuser', 'super_admin'])),
    children: [
      { index: true, element: suspenseWrapper(<EmployeesPage />) },
      { path: 'roles', element: suspenseWrapper(<RolesPage />) },
      { path: 'roles/create', element: suspenseWrapper(<RoleCreatePage />) },
    ],
  },
  {
    path: '/accounting-dashboard',
    element: suspenseWrapper(
      withProtected(<AccountingDashboardLayout />, ['superuser', 'super_admin'])
    ),
    children: [
      { index: true, element: suspenseWrapper(<InvoicesPage />) },
      { path: 'income-expence', element: suspenseWrapper(<IncomeExpensePage />) },
      { path: 'driver-statement', element: suspenseWrapper(<DriverStatements />) },
      { path: 'driver-statement/create', element: suspenseWrapper(<CreateDriverStatementPage />) },
      { path: 'companies', element: suspenseWrapper(<CompaniesPage />) },
      { path: 'file-viewer', element: suspenseWrapper(<FileViewerPage />) },
    ],
  },
  {
    path: '/fleet-dashboard',
    element: suspenseWrapper(withProtected(<FleetDashboardLayout />, ['superuser'])),
    children: [
      { index: true, element: suspenseWrapper(<FleetMapViewPage />) },
      { path: 'trucks', element: suspenseWrapper(<FleetTrucksPage />) },
      { path: 'trailers', element: suspenseWrapper(<FleetTrailersPage />) },
      { path: 'maintenance', element: suspenseWrapper(<FleetMaintenance />) },
    ],
  },
  {
    path: '/safety-dashboard',
    element: suspenseWrapper(withProtected(<SafetyDashboardLayout />, ['superuser'])),
    children: [
      { index: true, element: suspenseWrapper(<LogBookPage />) },
      { path: 'safety-tasks', element: suspenseWrapper(<SafetyTasksPage />) },
      { path: 'trucks', element: suspenseWrapper(<SafetyTrucksPage />) },
      { path: 'expiration-calendar', element: suspenseWrapper(<SafetyScheduleCalendarPage />) },
    ],
  },
  {
    element: suspenseWrapper(<SimpleLayout />),
    children: [
      { path: '404', element: suspenseWrapper(<NotFoundPage />) },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
