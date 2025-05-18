import classes from './styles.module.scss';
import { Box, Card, Group, Image, Stack, Text } from '@mantine/core';

const RolesComponent = () => {
  return (
    <Stack className={classes.roles_wrapper}>
      <Stack gap={27}>
        <Box className={classes.roles_badge}>
          <Text>Roles</Text>
        </Box>
        <Text className={classes.roles_main_text}>Tailored Tools for Every Role</Text>
        <Stack gap={0}>
          <Text className={classes.roles_desc}>No more one-size-fits-all dashboards.</Text>
          <Text className={classes.roles_desc}>
            Each department gets a focused workspace with only the tools they need.
          </Text>
        </Stack>
      </Stack>
      <Group gap={10} align="start">
        <Stack miw={340}>
          <Card radius={20} p={50} bg="#fff">
            <Text>Tools Built for Dispatchers</Text>
          </Card>
          <Card radius={20} p={50} bg="#fff">
            <Text>Panel for Accounting</Text>
          </Card>
          <Card radius={20} p={50} bg="#fff">
            <Text>Safety</Text>
          </Card>
        </Stack>
        <Stack flex={1}>
          <Card radius={20} pb={0} bg="#fff">
            <Image maw={441} mx="auto" src="/assets/media/build-tools.png" />
          </Card>
        </Stack>
      </Group>
    </Stack>
  );
};

export default RolesComponent;
