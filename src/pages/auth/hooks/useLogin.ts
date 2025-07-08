import { useMutation } from '@tanstack/react-query';
import { useApi } from '@/hooks/useApi';
import { handleAxiosError } from '@/utils/handleAxiosError';
import { LoginType } from '../types';
import { apiRoutes } from '@/service/apiRoutes';

export default function useLogin() {
  const api = useApi();
  const { mutate, error, isError, isPending } = useMutation({
    mutationKey: [apiRoutes.authLoginWithPassword],
    mutationFn: (data: LoginType) =>
      api.post(apiRoutes.authLoginWithPassword, data).then((res) => res.data),
    onError: (error) => {
      handleAxiosError(error);
    },
    retry: 2,
  });

  return { mutate, error, isError, isPending };
}
