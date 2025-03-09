import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

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
    children: [],
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
