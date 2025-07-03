
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SessionProvider } from './context/sessionContext';
import { UserProvider } from './context/userContext';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';


const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <UserProvider>
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
          <App />
      </QueryClientProvider>
    </SessionProvider>
  </UserProvider>
);
