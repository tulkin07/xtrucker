import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import SettingsLoader from './components/layout/settings/extra-components/Settings.loader';
import SettingsLayout from './components/layout/settings/Settings.layout';
import Brokers, { BrokersLoader } from './pages/brokers';
import Drivers, { DriversLoader } from './pages/drivers';
import LoadManagementPage, { LoadManagerLoader } from './pages/load-management';
import MapView, { MapViewLoader } from './pages/map-view';
import PlanningCalendar, { PlanningCalendarLoader } from './pages/planning-calendar';
import CompanyProfilePage from './pages/settings/CompanyProfile.page';
import IntegrationsPage from './pages/settings/Integrations.page';
import PersonalInfoPage from './pages/settings/PersonalInfo.page';
import SecurityPage from './pages/settings/Security.page';

const DashboardLayout = lazy(() => import('./components/layout/dashboard/Dashboard.layout'));
const SimpleLayout = lazy(() => import('./components/layout/simple-layout'));
const ProtectedRoute = lazy(() => import('./components/ui/protected-route'));
const NotFoundPage = lazy(() => import('./pages/404.page'));
const LoginPage = lazy(() => import('./pages/Login.page'));
const SignUpPage = lazy(() => import('./pages/SignUp.page'));
const OnboardingPage = lazy(() => import('./pages/Onboarding.page'));

const router = createBrowserRouter([
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadManagerLoader />}>
            <LoadManagementPage />
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
        <SignUpPage />
      </Suspense>
    ),
  },
  {
    path: '/login',
    element: (
      <Suspense fallback="">
        <LoginPage />
      </Suspense>
    ),
  },
  {
    element: <SimpleLayout />,
    children: [
      { element: <Navigate to="/sign-up" />, index: true },
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

export function Router() {
  return <RouterProvider router={router} />;
}
