import classes from '../../styles/Login.module.scss';
import { Form, Input, Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Anchor, Box, Button, Card, Divider, Stack, Text } from '@mantine/core';
import GoogleIcon from '@/components/icons/module/Google.icon';
import { useSession } from '@/context/sessionContext';
import useLogin from '../hooks/useLogin';
import { LoginType } from '../types';

const LoginPage = () => {
  const { mutate, isPending } = useLogin();
  const { setAccessToken } = useSession();
  const navigate = useNavigate();

  const handleLogin = (values: LoginType) => {
    mutate(values, {
      onSuccess: (data) => {
        setAccessToken(data.access_token);
        navigate('/dashboard');
      },
    });
  };

  return (
    <Stack h="100vh" justify="center" align="center" bg="#F3F4F6">
      <Box>
        <Text className={classes.tda_login_title}>Welcome back</Text>

        <Card p={40} miw={432} bg="#fff" mt={32} mb={32} radius="lg">
          <Form onFinish={handleLogin} layout="vertical">
            <Stack gap={28}>
              <Stack gap={0}>
                <Form.Item
                  name="gmail"
                  rules={[
                    { required: true, message: 'Please enter your email' },
                    { type: 'email', message: 'Invalid email format' },
                  ]}
                >
                  <Input
                    placeholder="Email address"
                    style={{
                      boxShadow: '0px 1px 2px 0px #0000000D',
                      height: 42,
                      borderRadius: 8,
                      margin: 0,
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: 'Please enter your password' },
                    {
                      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{7,}$/,
                      message: 'Must include uppercase, lowercase, number and 7+ characters',
                    },
                  ]}
                >
                  <Input.Password
                    placeholder="Password"
                    style={{
                      boxShadow: '0px 1px 2px 0px #0000000D',
                      height: 42,
                      borderRadius: 8,
                      margin: 0,
                    }}
                  />
                </Form.Item>
              </Stack>

              <Stack gap={15}>
                <Button type="submit" disabled={isPending} radius="md" color="teal.5">
                  {isPending ? <Spin /> : 'Log in'}
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
                <Button
                  onClick={() => {
                    window.location.href = `${import.meta.env.VITE_API_BASE_URL}/google/login`;
                  }}
                  radius="md"
                  color="#111827"
                  leftSection={<GoogleIcon />}
                >
                  Sign in with Google
                </Button>
              </Stack>
            </Stack>
          </Form>
        </Card>

        {/* Register link */}
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
