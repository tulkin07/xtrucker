import '@mantine/core/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/dates/styles.css';
import './_mantine.scss';

import { MantineProvider } from '@mantine/core';
import InitThemeComponent, { InitAuthComponent } from './components/base-config-components';
import { Router } from './Router';
import { theme } from './theme';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <InitThemeComponent />
      <InitAuthComponent />
      <Router />
    </MantineProvider>
  );
}
