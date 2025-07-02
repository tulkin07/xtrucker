import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { BrokersLoader } from '@/pages/brokers';
import { CompaniesLoader } from '@/pages/companies';
import { DriverStatementsLoader } from '@/pages/driver-statements';
import { CreateDriverStatementLoader } from '@/pages/driver-statements/crud';
import { DriversLoader } from '@/pages/drivers';
import EmployeesPage, { EmployeesLoader } from '@/pages/employees';
import { FileViewerLoader } from '@/pages/file-viewer';
import { FleetMaintenanceLoader } from '@/pages/fleet-maintenance';
import { FleetMapViewLoader } from '@/pages/fleet-overview';
import { FleetTrailersLoader } from '@/pages/fleet-trailers';
import { FleetTrucksLoader } from '@/pages/fleet-trucks';
import { IncomeExpenseLoader } from '@/pages/income-expense';
import { InvoicesLoader } from '@/pages/invoices/Invoices.loader';
import { LoadManagerLoader } from '@/pages/load-management';
import { LogBookLoader } from '@/pages/log-book';
import { MapViewLoader } from '@/pages/map-view';
import { PlanningCalendarLoader } from '@/pages/planning-calendar';
import RoleCreatePage from '@/pages/roles/RoleCreate.page';
import { SafetyScheduleCalendarLoader } from '@/pages/safety-schedule-calendar';
import { SafetyTasksLoader } from '@/pages/safety-tasks';
import { SafetyTrucksLoader } from '@/pages/safety-trucks';
import RolesPage, { RolesLoader } from '../pages/roles';
import AuthRoute from './AuthRoute';
import Spinner from '@/components/ui/Spinner';

const LandingPage = lazy(() => import('../pages/landing/Landing.page'));
const DashboardLayout = lazy(() => import('../components/layout/dashboard/Dashboard.layout'));
const SimpleLayout = lazy(() => import('../components/layout/simple-layout'));
const SettingsLoader = lazy(
  () => import('../components/layout/settings/extra-components/Settings.loader')
);
const SettingsLayout = lazy(() => import('../components/layout/settings/Settings.layout'));
const ProtectedRoute = lazy(() => import('../routes/ProtectedRoute'));
const NotFoundPage = lazy(() => import('../pages/404.page'));
const LoginPage = lazy(() => import('../pages/auth/Login.page'));
const SignUpPage = lazy(() => import('../pages/auth/SignUp.page'));
const OnboardingPage = lazy(() => import('../pages/Onboarding.page'));
const Brokers = lazy(() => import('../pages/brokers'));
const Drivers = lazy(() => import('../pages/drivers'));
const LoadManagement = lazy(() => import('../pages/load-management'));
const MapView = lazy(() => import('../pages/map-view'));
const PlanningCalendar = lazy(() => import('../pages/planning-calendar'));
const CompanyProfilePage = lazy(() => import('../pages/settings/CompanyProfile.page'));
const IntegrationsPage = lazy(() => import('../pages/settings/Integrations.page'));
const PersonalInfoPage = lazy(() => import('../pages/settings/PersonalInfo.page'));
const SecurityPage = lazy(() => import('../pages/settings/Security.page'));

const FleetTrucksPage = lazy(() => import('@/pages/fleet-trucks'));
const FleetMaintenance = lazy(() => import('@/pages/fleet-maintenance'));
const FleetTrailersPage = lazy(() => import('@/pages/fleet-trailers'));
const FleetDashboardLayout = lazy(() => import('../components/layout/fleet/FleetDashboard.layout'));
const FleetMapViewPage = lazy(() => import('../pages/fleet-overview/MapView.page'));

const AccountingDashboardLayout = lazy(
  () => import('../components/layout/accounting/AccountingDashboard.layout')
);
const InvoicesPage = lazy(() => import('../pages/invoices'));
const IncomeExpensePage = lazy(() => import('../pages/income-expense'));
const DriverStatements = lazy(() => import('../pages/driver-statements'));
const CreateDriverStatementPage = lazy(() => import('../pages/driver-statements/crud'));
const CompaniesPage = lazy(() => import('../pages/companies'));
const FileViewerPage = lazy(() => import('../pages/file-viewer'));

const SafetyDashboardLayout = lazy(
  () => import('../components/layout/safety/SafetyDashboard.layout')
);
const LogBookPage = lazy(() => import('../pages/log-book'));
const SafetyTasksPage = lazy(() => import('../pages/safety-tasks'));
const SafetyTrucksPage = lazy(() => import('../pages/safety-trucks'));
const SafetyScheduleCalendarPage = lazy(() => import('../pages/safety-schedule-calendar'));

const AdminDashboardLayout = lazy(() => import('../components/layout/admin/AdminDashboard.layout'));

const router = createBrowserRouter([
  {
    path: '/dashboard',
    element: (
      <Suspense fallback={<Spinner/>}>
        <ProtectedRoute >
          <DashboardLayout />
        </ProtectedRoute>
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadManagerLoader />}>
            <LoadManagement />
          </Suspense>
        ),
      },
      {
        path: 'planning-calendar',
        element: (
          <Suspense fallback={<PlanningCalendarLoader />}>
            <PlanningCalendar />
          </Suspense>
        ),
      },
      {
        path: 'map-view',
        element: (
          <Suspense fallback={<MapViewLoader />}>
            <MapView />
          </Suspense>
        ),
      },
      {
        path: 'drivers',
        element: (
          <Suspense fallback={<DriversLoader />}>
            <Drivers />
          </Suspense>
        ),
      },
      {
        path: 'brokers',
        element: (
          <Suspense fallback={<BrokersLoader />}>
            <Brokers />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '/dashboard/settings',
    element: (
      <ProtectedRoute>
        <Suspense fallback={<SettingsLoader />}>
          <SettingsLayout />
        </Suspense>
      </ProtectedRoute>
    ),
    children: [
      {
        path: 'personal-info',
        element: (
          <Suspense>
            <PersonalInfoPage />
          </Suspense>
        ),
      },
      {
        path: 'company-profile',
        element: (
          <Suspense>
            <CompanyProfilePage />
          </Suspense>
        ),
      },
      {
        path: 'security-passwords',
        element: (
          <Suspense>
            <SecurityPage />
          </Suspense>
        ),
      },
      {
        path: 'integrations',
        element: (
          <Suspense>
            <IntegrationsPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '/fleet-dashboard',
    element: (
      <ProtectedRoute>
        <FleetDashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<FleetMapViewLoader />}>
            <FleetMapViewPage />
          </Suspense>
        ),
      },
      {
        path: 'trucks',
        element: (
          <Suspense fallback={<FleetTrucksLoader />}>
            <FleetTrucksPage />
          </Suspense>
        ),
      },
      {
        path: 'trailers',
        element: (
          <Suspense fallback={<FleetTrailersLoader />}>
            <FleetTrailersPage />
          </Suspense>
        ),
      },
      {
        path: 'maintenance',
        element: (
          <Suspense fallback={<FleetMaintenanceLoader />}>
            <FleetMaintenance />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '/accounting-dashboard',
    element: (
      <ProtectedRoute>
        <AccountingDashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<InvoicesLoader />}>
            <InvoicesPage />
          </Suspense>
        ),
      },
      {
        path: 'income-expence',
        element: (
          <Suspense fallback={<IncomeExpenseLoader />}>
            <IncomeExpensePage />
          </Suspense>
        ),
      },
      {
        path: 'driver-statement',
        element: (
          <Suspense fallback={<DriverStatementsLoader />}>
            <DriverStatements />
          </Suspense>
        ),
      },
      {
        path: 'driver-statement/create',
        element: (
          <Suspense fallback={<CreateDriverStatementLoader />}>
            <CreateDriverStatementPage />
          </Suspense>
        ),
      },
      {
        path: 'companies',
        element: (
          <Suspense fallback={<CompaniesLoader />}>
            <CompaniesPage />
          </Suspense>
        ),
      },
      {
        path: 'file-viewer',
        element: (
          <Suspense fallback={<FileViewerLoader />}>
            <FileViewerPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '/safety-dashboard',
    element: (
      <Suspense fallback="">
        <ProtectedRoute>
          <SafetyDashboardLayout />
        </ProtectedRoute>
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LogBookLoader />}>
            <LogBookPage />
          </Suspense>
        ),
      },
      {
        path: 'safety-tasks',
        element: (
          <Suspense fallback={<SafetyTasksLoader />}>
            <SafetyTasksPage />
          </Suspense>
        ),
      },
      {
        path: 'trucks',
        element: (
          <Suspense fallback={<SafetyTrucksLoader />}>
            <SafetyTrucksPage />
          </Suspense>
        ),
      },
      {
        path: 'expiration-calendar',
        element: (
          <Suspense fallback={<SafetyScheduleCalendarLoader />}>
            <SafetyScheduleCalendarPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '/admin-dashboard',
    element: (
      <Suspense fallback="">
        <ProtectedRoute>
          <AdminDashboardLayout />
        </ProtectedRoute>
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<EmployeesLoader />}>
            <EmployeesPage />
          </Suspense>
        ),
      },
      {
        path: 'roles',
        element: (
          <Suspense fallback={<RolesLoader />}>
            <RolesPage />
          </Suspense>
        ),
      },
      {
        path: 'roles/create',
        element: (
          <Suspense fallback="">
            <RoleCreatePage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '/onboarding',
    element: (
      <Suspense fallback="">
        <OnboardingPage />
      </Suspense>
    ),
  },
  {
    path: '/sign-up',
    element: (
      <Suspense fallback="">
        <AuthRoute>
          <SignUpPage />
        </AuthRoute>
      </Suspense>
    ),
  },
  {
    path: '/login',
    element: (
      <Suspense fallback="">
        <AuthRoute>
          <LoginPage />
        </AuthRoute>
      </Suspense>
    ),
  },
  {
    path: '/',
    element: (
      <Suspense fallback="Loading...">
        <LandingPage />
      </Suspense>
    ),
  },
  {
    element: <SimpleLayout />,
    children: [
      {
        path: '404',
        element: (
          <Suspense fallback="">
            <NotFoundPage />
          </Suspense>
        ),
      },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
