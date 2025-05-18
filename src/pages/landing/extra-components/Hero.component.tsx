import classes from './styles.module.scss';
import { ActionIcon, Anchor, Box, Button, Stack, Text } from '@mantine/core';
import Icon from '@/components/icons';

const HeroComponent = () => {
  return (
    <Stack className={classes.hero_wrapper}>
      <Stack gap={60}>
        <Stack gap={24}>
          <Stack gap={12}>
            <Box className={classes.hero_box}>
              <Text className={classes.hero_box_desc}>
                Book a demo and get <b>1 week of Xtrucker free</b>.
              </Text>
              <Anchor className={classes.hero_box_link}>Learn more</Anchor>
            </Box>
            <Text className={classes.hero_text}>
              The Most Usable TMS <br /> Built for Real Dispatchers
            </Text>
            <Text className={classes.hero_sub_text}>Same Platform. Tailored Workspaces</Text>
          </Stack>
          <Button color="#075985" size="xl" maw="fit-content" mx="auto" radius="xl">
            Try Xtrucker for free
          </Button>
        </Stack>
        <Stack gap={4} maw="fit-content" mx="auto">
          <ActionIcon mx="auto" variant="subtle" color="#18181B">
            <Icon icon="i_scroll_down" />
          </ActionIcon>
          <Text className={classes.hero_down_btn_text}>scroll down</Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HeroComponent;
