import classes from '../../styles/Register.module.scss';
import rightLargeImage from '/assets/media/register-right-image.webp';
import { Form, Input, Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Anchor, Box, Button, Checkbox, Divider, Flex, List, Stack, Text } from '@mantine/core';
import GoogleIcon from '@/components/icons/module/Google.icon';
import { apiRoutes } from '@/service/apiRoutes';
import useRegister from '../hooks/useRegister';
import { RegisterType } from '../types';

const SignUpPage = () => {
  const { mutate, isPending } = useRegister();
  const navigate = useNavigate();
  const handlRegister = (values: RegisterType) => {
    mutate(values, {
      onSuccess: () => {
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      },
    });
  };

  return (
    <Flex w="100%">
      <Box w="100%" bg="#F9FAFB" pos="relative">
        <Stack justify="center" align="center" h="calc(100vh)">
          <Stack gap={32} w="416px">
            <Stack gap={12}>
              <Text c="#030712" fz={24} fw={700} lh="140%">
                Create Your Account
              </Text>
              <Text fz={16} fw={400} lh="140%" c="#6B7280">
                Start for free and explore all the tools. <br />
                Upgrade anytime for team features.
              </Text>
            </Stack>
            <Form onFinish={handlRegister} layout="vertical">
              <Stack gap={56}>
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
                  <Stack gap={4}>
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
                    <List pl={5}>
                      <List.Item fz={12} lh="140%" fw={400} c="#030712">
                        Mix of uppercase & lowercase letters
                      </List.Item>
                      <List.Item fz={12} lh="140%" fw={400} c="#030712">
                        Minimum 7 characters long
                      </List.Item>
                      <List.Item fz={12} lh="140%" fw={400} c="#030712">
                        Contain at least 1 number
                      </List.Item>
                    </List>
                  </Stack>
                </Stack>
                <Stack gap={0}>
                  <Form.Item
                    name="accepted_terms"
                    valuePropName="checked"
                    rules={[{ required: true, message: 'You must accept the privacy policy' }]}
                  >
                    <Checkbox
                      label="I agree to the privacy policy and cookie usage"
                      styles={{ label: { fontSize: '14px', color: '#0A0A0A' } }}
                    />
                  </Form.Item>
                  <Button
                    disabled={isPending}
                    type="submit"
                    radius="md"
                    color="teal.5"
                    mt={16}
                    mb={8}
                  >
                    {isPending ? <Spin /> : ' Create account'}
                  </Button>
                  <Text c="#6B7280" fz={14} fw="140%" style={{ textAlign: 'center' }}>
                    Already have an account?{' '}
                    <Anchor fz={14} fw="140%" href="/login" c="#0A0A0A">
                      Log in
                    </Anchor>
                  </Text>
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
                      window.location.href = `${import.meta.env.VITE_API_BASE_URL + apiRoutes.authLoginWithGoogle}`;
                    }}
                    radius="md"
                    mt={10}
                    color="#111827"
                    leftSection={<GoogleIcon />}
                  >
                    Sign up with Google
                  </Button>
                </Stack>
              </Stack>
            </Form>
          </Stack>
        </Stack>
        <Text
          pos="absolute"
          bottom={43}
          c="#6B7280"
          fz={14}
          fw={400}
          style={{ textAlign: 'center' }}
          w="100%"
        >
          By proceeding, you agree to our <Anchor c="#0A0A0A">Terms</Anchor> and{' '}
          <Anchor c="#0A0A0A">Privacy Policy</Anchor>.
        </Text>
      </Box>
      <Box w="100%" h="100vh" bg="#F3F4F6" pos="relative">
        <img
          className={classes.tda_large_image}
          loading="lazy"
          src={rightLargeImage}
          alt="Dashboard introduction"
        />
      </Box>
    </Flex>
  );
};

export default SignUpPage;
