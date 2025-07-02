
import { useMemo } from 'react';
import { useSession } from '@/context/sessionContext';
import { createApi } from '@/service/api';

export const useApi = () => {
  const { accessToken, setAccessToken, logout } = useSession();

  const api = useMemo(
    () => createApi(() => accessToken, setAccessToken, logout),
    [accessToken, setAccessToken, logout]
  );

  return api;
};
