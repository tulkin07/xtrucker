import classes from './style.module.scss';
import { Box, Stack, Text } from '@mantine/core';

const NotificationCardComponent = () => {
  return (
    <Stack
      gap={8}
      px={32}
      py={16}
      maw={480}
      pos="relative"
      style={{ borderBottom: '1px solid #E8E8E8CC', '&:hover': { backgroundColor: '#F5F5F4' } }}
      className={classes.notification_card}
    >
      <Box
        w={11}
        h={11}
        style={{ borderRadius: '50%' }}
        bg="teal.4"
        pos="absolute"
        left={10}
        top={25}
      />
      <Text c="zinc.8" fz={20} lh="140%" fw={700}>
        Login attempted from new IP
      </Text>
      <Text c="zinc.8" fz={14} lh="140%" fw={400}>
        The system has detected that your account was logged from unused IP adress
      </Text>
      <Text c="zinc.4" fz={14} lh="140%" fw={400}>
        20.10.2025 | 08:34
      </Text>
    </Stack>
  );
};

export default NotificationCardComponent;
