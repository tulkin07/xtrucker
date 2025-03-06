import {
  Anchor,
  Box,
  Button,
  Card,
  Divider,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import GoogleIcon from '@/components/icons/module/Google.icon';
import classes from './styles/Login.module.css';

const LoginPage = () => {
  return (
    <Stack h="100vh" justify="center" align="center" bg="#F3F4F6">
      <Box>
        <Text className={classes.tda_login_title}>Welcome back</Text>
        <Card p={40} miw={432} bg="#fff" mt={32} mb={32} radius="lg">
          <Stack gap={28}>
            <Stack gap={16}>
              <TextInput placeholder="Email address" radius="md" />
              <PasswordInput placeholder="Password" radius="md" />
            </Stack>
            <Stack gap={24}>
              <Button radius="md" color="teal.5">
                Create account
              </Button>
              <Divider
                my="xs"
                label={
                  <Text fz={14} lh="140%" c="#6B7280">
                    or
                  </Text>
                }
                labelPosition="center"
              />
              <Button radius="md" color="#111827" leftSection={<GoogleIcon />}>
                Sign in with Google
              </Button>
            </Stack>
          </Stack>
        </Card>
        <Text className={classes.tda_login_caption}>
          Don't have an account?{' '}
          <Anchor fz="inherit" fw="inherit" href="/sign-up" c="#030712">
            Register
          </Anchor>
        </Text>
      </Box>
    </Stack>
  );
};

export default LoginPage;
