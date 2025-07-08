import { useQuery } from '@tanstack/react-query';
import { useApi } from '@/hooks/useApi';
import { apiRoutes } from '@/service/apiRoutes';
import { handleAxiosError } from '@/utils/handleAxiosError';

const useGenerateFileUrl = (name: string | undefined) => {
  const api = useApi();

  const { data:fileUrl, isLoading } = useQuery<{presigned_url:string}>({
    queryKey: [apiRoutes.generatePresigned],
    queryFn: () =>
      api
        .get(apiRoutes.generatePresigned,{
            params:{filename:name,expiration:3600}
        })
        .then((res) => res.data)
        .catch((error) => {
          handleAxiosError(error);
          throw error;
        }),
    retry: 1,
    enabled: Boolean(name),
  });

  return { fileUrl, isLoading };
};

export default useGenerateFileUrl;
