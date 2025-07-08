import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Spinner from '@/components/ui/Spinner';
import { useSession } from '@/context/sessionContext';
import { useUser } from '@/context/userContext';
import { redirectByStatus } from '@/utils/redirectByStatus';

export default function OnboardingRoute({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const { user } = useUser();
  useEffect(() => {
    if (user) {
      redirectByStatus(user.onboarding_status, navigate);
    }
  }, [navigate, user]);
  const { accessToken } = useSession();
  if (!accessToken) {
    return <Navigate to="/dashboard" replace />;
  }

  if (!user) {
    return <Spinner />;
  }

  return <>{children}</>;
}
