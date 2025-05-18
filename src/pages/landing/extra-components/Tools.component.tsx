import classes from './styles.module.scss';
import { Box, Button, Card, Grid, Group, Stack, Text } from '@mantine/core';

const ToolsComponent = () => {
  return (
    <Box bg="#f9fafb">
      <Group className={classes.tools_wrapper}>
        <Grid w="100%" gutter={40}>
          <Grid.Col span={{ base: 12, sm: 12, md: 4.5 }}>
            <Stack>
              <Box className={classes.tool_box}>
                <Text>Only tools that is necessary</Text>
              </Box>
              <Text className={classes.tool_box_title}>Dispatchers tools.</Text>
              <Text className={classes.tool_box_desc}>
                <b>Manage loads</b>, plan ahead, and stay in sync — all in one familiar view
              </Text>
              <Button maw="fit-content" color="#075985" size="lg" h={40} radius="xl">
                See Demo
              </Button>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 12, md: 7.5 }}>
            <Card radius={10} withBorder shadow="md" mih={500}>
              <Stack display="flex" justify="center" align="center">
                <Text>Here will be added animation</Text>
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>
      </Group>
    </Box>
  );
};

export default ToolsComponent;
