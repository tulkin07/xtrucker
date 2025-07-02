interface IProps {
  roles?: string[];
}

const ProtectedRoute = ({ children }: React.PropsWithChildren<IProps>) => {
  // const { user } = useAppContext();

  // if ("userData") {
  //   return children;
  // }

  // if (JSON.stringify(user) === '{}') {
  //   return <Navigate to="/login" replace />;
  // }

  // const role = userdata?.roles?.[0]?.role_code;

  // if (roles && !roles.includes(role)) {
  //   return <Navigate to="/404" replace />;
  // }

  return children;
};

export default ProtectedRoute;
