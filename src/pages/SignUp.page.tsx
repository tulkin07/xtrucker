import classes from './styles/Register.module.scss';
import rightLargeImage from '/assets/media/register-right-image.webp';
import {
  Anchor,
  Box,
  Button,
  Checkbox,
  Flex,
  List,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';

const SignUpPage = () => {
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
            <form>
              <Stack gap={56}>
                <Stack gap={24}>
                  <TextInput
                    placeholder="Email address"
                    radius="md"
                    styles={{
                      input: {
                        boxShadow: '0px 1px 2px 0px #0000000D',
                      },
                    }}
                  />
                  <Stack gap={4}>
                    <PasswordInput
                      placeholder="Password"
                      radius="md"
                      styles={{
                        input: {
                          boxShadow: '0px 1px 2px 0px #0000000D',
                        },
                      }}
                    />
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
                  <Checkbox
                    label="I agree to the privacy policy and cookie usage"
                    styles={{ label: { fontSize: '14px', color: '#0A0A0A' } }}
                  />
                  <Button radius="md" color="teal.5" mt={16} mb={8}>
                    Create account
                  </Button>
                  <Text c="#6B7280" fz={14} fw="140%" style={{ textAlign: 'center' }}>
                    Already have an account?{' '}
                    <Anchor fz={14} fw="140%" href="/login" c="#0A0A0A">
                      Log in
                    </Anchor>
                  </Text>
                </Stack>
              </Stack>
            </form>
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
