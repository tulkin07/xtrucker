import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Spinner from '@/components/ui/Spinner';
import { useSession } from '@/context/sessionContext';

const OauthCallback = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const { setAccessToken } = useSession();

  useEffect(() => {
    const token = params.get('token');
    if (token) {
      setAccessToken(token);
      navigate('/dashboard');
    } else {
      navigate('/sign-up');
    }
  }, []);

  return (
    <div>
      <Spinner />
    </div>
  );
};

export default OauthCallback;
