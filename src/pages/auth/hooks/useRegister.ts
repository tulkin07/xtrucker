import { useMutation } from '@tanstack/react-query';
import { notifications } from '@mantine/notifications';
import { useApi } from '@/hooks/useApi';
import { LoginType } from '../types';
import { handleAxiosError } from '@/utils/handleAxiosError';

export default function useRegister() {
  const api = useApi();
  const { mutate, error, isError, isPending } = useMutation({
    mutationKey: ['register'],
    mutationFn: (data: LoginType) => api.post('/auth/register', data).then((res) => res.data),
    onError: (error) => {
     handleAxiosError(error)
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
