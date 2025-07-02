import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/dates/styles.css';
import './_mantine.scss';

import { MantineProvider } from '@mantine/core';
import { AppRouter } from './routes/AppRoute';
import { theme } from './theme';

import '@mantine/notifications/styles.css';
import { Notifications } from '@mantine/notifications';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Notifications />
      <AppRouter />
    </MantineProvider>
  );
}
