import classes from './styles.module.scss';
import { Box, Button, Card, Grid, Group, Image, Stack, Text } from '@mantine/core';

const AccountingComponent = () => {
  return (
    <Stack maw={904} mx="auto" mt={116} mb={116} className={classes.accounting_wrapper}>
      <Stack gap={60} mb={56}>
        <Stack gap={24}>
          <Stack gap={12}>
            <Box className={classes.hero_box}>
              <Text className={classes.hero_box_desc}>Xtrucker was built for Logistics</Text>
            </Box>
            <Text className={classes.hero_text}>
              A Dedicated Space for <br /> Your Accounting Team
            </Text>
            <Text className={classes.acoounting_desc}>
              Invoices, payments, and financial reports <br /> — all in a separate, secure panel
              designed just for your finance team.
            </Text>
          </Stack>
        </Stack>
      </Stack>
      <Grid gutter={64}>
        <Grid.Col span={{ base: 12, sm: 12, md: 6 }}>
          <Card className={classes.accounting_card}>
            <Stack gap={64}>
              <Image src="/assets/media/invoice-factoring.png" />
              <Stack gap={16}>
                <Box className={classes.card_title_wrapper}>
                  <Text className={classes.accounting_card_title}>Invoicing & Factoring</Text>
                </Box>
                <Text className={classes.accounting_card_desc}>
                  Send invoices in seconds and stay on top of factoring — without the
                  back-and-forth.
                </Text>
              </Stack>
            </Stack>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 12, md: 6 }}>
          <Card className={classes.accounting_card}>
            <Stack gap={64}>
              <Image src="/assets/media/driver-statements.png" />
              <Stack gap={16}>
                <Box className={classes.card_title_wrapper}>
                  <Text className={classes.accounting_card_title}>
                    <Text className={classes.accounting_card_badge}>easy</Text> Driver Statements
                  </Text>
                </Box>
                <Text className={classes.accounting_card_desc}>
                  Generate clean, transparent statements for your drivers — no confusion, no delays.
                </Text>
              </Stack>
            </Stack>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 12, md: 6 }}>
          <Card className={classes.accounting_card}>
            <Stack gap={64}>
              <Image src="/assets/media/income-expense.png" />
              <Stack gap={16}>
                <Box className={classes.card_title_wrapper}>
                  <Text className={classes.accounting_card_title}>Income & Expense</Text>
                </Box>
                <Text className={classes.accounting_card_desc}>
                  Track every dollar — know what's coming in and going out, without spreadsheets.
                </Text>
              </Stack>
            </Stack>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 12, md: 6 }}>
          <Card className={classes.accounting_card}>
            <Stack gap={64}>
              <Image src="/assets/media/carrier-broker.png" />
              <Stack gap={16}>
                <Box className={classes.card_title_wrapper}>
                  <Text className={classes.accounting_card_title}>Carrier & Broker Management</Text>
                </Box>
                <Text className={classes.accounting_card_desc}>
                  Keep profiles, payment info, and paperwork in one place for every partner you work
                  with.
                </Text>
              </Stack>
            </Stack>
          </Card>
        </Grid.Col>
        <Grid.Col span={12}>
          <Group justify="center">
            <Button maw="fit-content" mx="auto" color="#075985" radius={33} size="xl">
              Book a demo to see all the features
            </Button>
          </Group>
        </Grid.Col>
      </Grid>
    </Stack>
  );
};

export default AccountingComponent;
