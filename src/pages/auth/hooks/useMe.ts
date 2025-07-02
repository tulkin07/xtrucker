import { useQuery } from '@tanstack/react-query';
import { IUser } from '@/context/types';
import { useApi } from '@/hooks/useApi';

const useMe = () => {
  const api = useApi();

  const { data, isLoading } = useQuery<IUser>({
    queryKey: ['me'],
    queryFn: () => api.get('/auth/user-profile').then((res) => res.data),
    retry: 2,
  });

  return { data, isLoading };
};

export default useMe;
