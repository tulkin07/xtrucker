import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notifications } from '@mantine/notifications';
import { useApi } from '@/hooks/useApi';
import { apiRoutes } from '@/service/apiRoutes';
import { handleAxiosError } from '@/utils/handleAxiosError';
import { CompanyInfoType } from '../types';

export default function useCreateCompany() {
  const api = useApi();
  const queryClient = useQueryClient();
  const {
    mutate: create,
    error,
    isError,
    isPending,
  } = useMutation({
    mutationKey: [apiRoutes.companyCreate],
    mutationFn: (data: CompanyInfoType) =>
      api.post(apiRoutes.companyCreate, data).then((res) => res.data),
    onError: (error) => {
      handleAxiosError(error);
    },
    onSuccess: () => {
      notifications.show({
        color: 'green',
        position: 'top-center',
        message: 'Company created',
      });
      queryClient.invalidateQueries({ queryKey: [apiRoutes.userProfile] });
    },
    retry: 1,
  });

  return { create, error, isError, isPending };
}
