import { useLayoutEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Loader, Stack } from '@mantine/core';

const SimpleLayout = () => {
  const navigate = useNavigate();
  useLayoutEffect(() => {
    navigate('/sign-up');
  }, []);
  return (
    <Stack>
      <Stack w="100%" h="100vh" justify="center" align="center">
        <Loader size="lg" />
      </Stack>
      <Outlet />
    </Stack>
  );
};

export default SimpleLayout;
