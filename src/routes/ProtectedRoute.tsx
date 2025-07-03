import { Navigate } from 'react-router-dom';
import Spinner from '@/components/ui/Spinner';
import { useSession } from '@/context/sessionContext';
import { useUser } from '@/context/userContext';

interface IProps {
  roles?: string[]; 
  children: React.ReactNode;
}

const ProtectedRoute = ({ children, roles }: IProps) => {
  const { accessToken } = useSession();
  const { user } = useUser();

  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  if (!user) {
    return <Spinner />;
  }

  if (roles && !roles.includes(user.user_role)) {
    return <Navigate to="/404" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
