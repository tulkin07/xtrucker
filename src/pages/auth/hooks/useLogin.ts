import { useMutation } from '@tanstack/react-query';
import { notifications } from '@mantine/notifications';
import { useApi } from '@/hooks/useApi';
import { LoginType } from '../types';

export default function useLogin() {
  const api = useApi();
  const { mutate, error, isError, isPending } = useMutation({
    mutationKey: ['login'],
    mutationFn: (data: LoginType) =>
      api.post('/auth/login/with/password', data).then((res) => res.data),
    onError: (error) => {
      notifications.show({
        color: 'red',
        position: 'top-center',
        message: error.message,
      });
    },
    retry: 2,
  });

  return { mutate, error, isError, isPending };
}
