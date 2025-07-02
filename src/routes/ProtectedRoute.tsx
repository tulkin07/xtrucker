import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Spinner from '@/components/ui/Spinner';
import { useSession } from '@/context/sessionContext';
import { useUser } from '@/context/userContext';
import useMe from '@/pages/auth/hooks/useMe';

interface IProps {
  roles?: string[];
}

const ProtectedRoute = ({ children, roles }: React.PropsWithChildren<IProps>) => {
  const { setUser } = useUser();
  const { data: user, isLoading } = useMe();
  const { accessToken } = useSession();
  useEffect(() => {
    if (user) {
      setUser(user);
    }
  }, [user]);

  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  if (isLoading || !user) {
    return <Spinner />;
  }

  if (roles && !roles.includes(user.user_role)) {
    return <Navigate to="/404" replace />;
  }

  return children;
};

export default ProtectedRoute;
