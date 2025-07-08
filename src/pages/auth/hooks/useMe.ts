import { useQuery } from '@tanstack/react-query';
import { IUser } from '@/context/types';
import { useApi } from '@/hooks/useApi';
import { handleAxiosError } from '@/utils/handleAxiosError';
import { apiRoutes } from '@/service/apiRoutes';

const useMe = (token: string | undefined) => {
  const api = useApi();

  const { data, isLoading } = useQuery<IUser>({
    queryKey: [apiRoutes.userProfile],
    queryFn: () =>
      api
        .get(apiRoutes.userProfile)
        .then((res) => res.data)
        .catch((error) => {
          handleAxiosError(error);
          throw error;
        }),
    retry: 1,
    enabled: Boolean(token), 
  });

  return { data, isLoading };
};

export default useMe;
