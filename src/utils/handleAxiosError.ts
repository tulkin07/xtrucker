import { isAxiosError } from 'axios';
import { notifications } from '@mantine/notifications';

export function handleAxiosError(error: unknown, fallbackMessage = 'Something went wrong') {
  // Faqat AxiosError bo‘lsa ishlaymiz
  if (isAxiosError(error)) {
    const detail =
      error.response?.data?.detail ||
      error.response?.data?.message ||
      (typeof error.response?.data === 'string' ? error.response.data : null);

    notifications.show({
      color: 'red',
      position: 'top-center',
      message: detail || fallbackMessage,
    });
  } else {
    // Boshqa errorlar uchun
    notifications.show({
      color: 'red',
      position: 'top-center',
      message: fallbackMessage,
    });
  }

}
