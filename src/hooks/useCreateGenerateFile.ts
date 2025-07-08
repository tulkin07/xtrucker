import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { notifications } from '@mantine/notifications';
import { handleAxiosError } from '@/utils/handleAxiosError';

type GenerateFileInput = {
  data: File; // Fayl turi
  url: string; // S3'dan olingan Signed URL
};

export default function useCreateGenerateFile() {
  const {
    mutate: createFile,
    error,
    isError,
    isPending: isPandingFile,
  } = useMutation({
    mutationKey: ['generate-file'],
    mutationFn: async ({ data, url }: GenerateFileInput) => {
      const response = await axios.put(url, data, {
        headers: {
          'Content-Type': data.type, // Faylning MIME turi (image/png, application/pdf, va h.k.)
        },
      });

      return response.data;
    },
    onError: (error) => {
      handleAxiosError(error);
    },
    onSuccess: () => {
      notifications.show({
        color: 'green',
        position: 'top-center',
        message: 'File successfully uploaded to S3',
      });
    },
    retry: 1,
  });

  return { createFile, error, isError, isPandingFile };
}
