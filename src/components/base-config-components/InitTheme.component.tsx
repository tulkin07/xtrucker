import { useLayoutEffect } from 'react';
import { useMantineColorScheme } from '@mantine/core';

const InitThemeComponent = () => {
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  useLayoutEffect(() => {
    if (colorScheme === 'dark') {
      setColorScheme('light');
    }
  }, [colorScheme]);
  return null;
};

export default InitThemeComponent;
