import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notifications } from '@mantine/notifications';
import { useApi } from '@/hooks/useApi';
import { apiRoutes } from '@/service/apiRoutes';
import { handleAxiosError } from '@/utils/handleAxiosError';
import { PaymentFormData } from '../types';

export default function useCreateCompanyPayment() {
  const api = useApi();
  const queryClient = useQueryClient();
  const {
    mutate: create,
    error,
    isError,
    isPending,
  } = useMutation({
    mutationKey: [apiRoutes.paymentBilling],
    mutationFn: (data: PaymentFormData) =>
      api.post(apiRoutes.paymentBilling, data).then((res) => res.data),
    onError: (error) => {
      handleAxiosError(error);
    },
    onSuccess: () => {
      notifications.show({
        color: 'green',
        position: 'top-center',
        message: 'Payment created',
      });
      queryClient.invalidateQueries({ queryKey: [apiRoutes.userProfile] });
    },
    retry: 1,
  });

  return { create, error, isError, isPending };
}
