import classes from './styles.module.scss';
import { Box, Card, Grid, Image, Stack, Text } from '@mantine/core';

const SuggestionsComponent = () => {
  return (
    <Stack className={classes.suggestions_wrapper}>
      <Stack gap={56} mb={56}>
        <Stack gap={24}>
          <Stack gap={12}>
            <Box className={classes.hero_box}>
              <Text className={classes.hero_box_desc}>no worries</Text>
            </Box>
            <Text className={classes.hero_text}>Fast. Stable. Ready 24/7.</Text>
          </Stack>
        </Stack>
        <Grid gutter={51}>
          <Grid.Col span={{ base: 12, sm: 12, md: 4 }}>
            <Card className={classes.suggestion_card}>
              <Stack gap={16} p={16}>
                <Image src="/assets/media/thunder.png" w={56} h={56} />
                <Text className={classes.suggestion_card_title}>Blazing Load Times</Text>
                <Text className={classes.suggestion_card_desc}>
                  Opens instantly and runs smooth — no lag, no waiting.
                </Text>
              </Stack>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 12, md: 4 }}>
            <Card className={classes.suggestion_card}>
              <Stack gap={16} p={16}>
                <Image src="/assets/media/laptop.png" w={56} h={56} />
                <Text className={classes.suggestion_card_title}>99.99% Uptime</Text>
                <Text className={classes.suggestion_card_desc}>
                  Stays online, even when you're working late or over the weekend.
                </Text>
              </Stack>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 12, md: 4 }}>
            <Card className={classes.suggestion_card}>
              <Stack gap={16} p={16}>
                <Image src="/assets/media/cloud.png" w={56} h={56} />
                <Text className={classes.suggestion_card_title}>Cloud Sync</Text>
                <Text className={classes.suggestion_card_desc}>
                  All your changes are saved and synced automatically
                </Text>
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default SuggestionsComponent;
