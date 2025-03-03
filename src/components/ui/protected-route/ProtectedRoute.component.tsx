import { Navigate } from 'react-router-dom';
import { USER_DATA_KEY } from '@/consts';
import { useAppContext } from '@/context/appContext';
import { onStorage } from '@/utils/onStorage';

interface IProps {
  requireds?: string[];
}

const ProtectedRouteComponent = ({ children }: React.PropsWithChildren<IProps>) => {
  const { user } = useAppContext();
  const userdata = onStorage(USER_DATA_KEY);
  // const navigate = useNavigate();

  if (userdata) {
    return children;
  }

  if (JSON.stringify(user) === '{}') {
    return <Navigate to="/login" replace />;
  }

  // if (requireds.includes(role?.[0]?.role_code) === false) {
  //   return navigate("/404");
  // }
  return children;
};

export default ProtectedRouteComponent;
