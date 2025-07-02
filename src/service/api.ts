import axios, { AxiosError } from 'axios';

export const createApi = (
  getAccessToken: () => string | null,
  setAccessToken: (token: string | null) => void,
  logout: () => void
) => {
  const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true,
  });

  api.interceptors.request.use(
    (config) => {
      const token = getAccessToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const { data } = await axios.post(
            'https://6146-213-230-116-28.ngrok-free.app/api/auth/refresh',
            {}
          );

          const newAccess = data.token;
          setAccessToken(newAccess);
          originalRequest.headers.Authorization = `Bearer ${newAccess}`;
          return api(originalRequest);
        } catch (err: unknown) {
          const axiosErr = err as AxiosError;
          if ([401, 403].includes(axiosErr.response?.status || 0)) {
            logout();
          }
          return Promise.reject(axiosErr);
        }
      }
      return Promise.reject(error);
    }
  );

  return api;
};
