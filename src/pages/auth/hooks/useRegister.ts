import { useMutation } from '@tanstack/react-query';
import { notifications } from '@mantine/notifications';
import { useApi } from '@/hooks/useApi';
import { apiRoutes } from '@/service/apiRoutes';
import { handleAxiosError } from '@/utils/handleAxiosError';
import { LoginType } from '../types';

export default function useRegister() {
  const api = useApi();
  const { mutate, error, isError, isPending } = useMutation({
    mutationKey: [apiRoutes.authRegister],
    mutationFn: (data: LoginType) => api.post(apiRoutes.authRegister, data).then((res) => res.data),
    onError: (error) => {
      handleAxiosError(error);
    },
    onSuccess: (data) => {
      notifications.show({
        color: 'green',
        position: 'top-center',
        message: data.message,
      });
    },
    retry: 2,
  });

  return { mutate, error, isError, isPending };
}
