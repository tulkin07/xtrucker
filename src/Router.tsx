import { Suspense } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import DashboardLayout from './components/layout/dashboard/Dashboard.layout';
import SimpleLayout from './components/layout/simple-layout';
import ProtectedRoute from './components/ui/protected-route';
import NotFoundPage from './pages/404.page';
import LoginPage from './pages/Login.page';
import SignUpPage from './pages/SignUp.page';

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
    path: '/sign-up',
    element: (
      <Suspense fallback="">
        <SignUpPage />
      </Suspense>
    ),
  },
  {
    path: 'login',
    element: (
      <Suspense fallback="">
        <LoginPage />
      </Suspense>
    ),
  },
  {
    element: <SimpleLayout />,
    children: [
      { element: <Navigate to="/dashboard/app" />, index: true },
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
