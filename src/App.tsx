import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/dates/styles.css';
import './_mantine.scss';

import { MantineProvider } from '@mantine/core';
import { AppRouter } from './routes/AppRoute';
import { theme } from './theme';

import '@mantine/notifications/styles.css';
// index.tsx yoki App.tsx ning eng yuqorisiga yoziladi
import 'antd/dist/reset.css'; // yoki Ant Design 5+ bo‘lsa

import { useEffect } from 'react';
import { Notifications } from '@mantine/notifications';
import { useSession } from './context/sessionContext';
import { useUser } from './context/userContext';
import useMe from './pages/auth/hooks/useMe';

export default function App() {
  const { setUser } = useUser();
  const { accessToken } = useSession();
  const { data: user } = useMe(accessToken || undefined);

  useEffect(() => {
    if (user) {
      setUser(user);
    }
  }, [user, setUser]);
  return (
    <MantineProvider theme={theme}>
      <Notifications />
      <AppRouter />
    </MantineProvider>
  );
}
