import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSession } from '@/context/sessionContext';

export default function AuthRoute({ children }: React.PropsWithChildren) {
  const { accessToken } = useSession();
  if (accessToken) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
}
