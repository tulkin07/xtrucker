import {
  ActionIcon,
  Box,
  Button,
  Card,
  Divider,
  Flex,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import BottomBreadcrumbComponent from '@/components/bottom-breadcrumb/BottomBreadcrumb.component';
import AreaChart from '@/components/charts/AreaChart';
import CustomBar from '@/components/custom-bar';
import Icon from '@/components/icons/Icon.component';
import topbarClasses from '@/components/layout/dashboard/styles/Topbar.module.scss';
import TopbarLayout from '@/components/layout/dashboard/Topbar.layout';

// import { INCOME_EXPENSE_CHART_DATA } from '@/consts';

const IncomeExpensePage = () => {
  return (
    <>
      <Stack p="16px 8px 16px 8px" h="100%" w='calc(100vw - 250px - 72px)'>
        <TopbarLayout title="Income & Expense" />
        <Stack
          component="main"
          h="calc(100vh - 32px - 57px - 25px)"
          w="100%"
          style={{ overflowY: 'auto', overflowX: 'hidden' }}
        >
          <Group justify="space-between" align="center">
            <Group align="end">
              <Flex className={topbarClasses.topbar_searchbar}>
                <TextInput
                  size="sm"
                  variant="default"
                  placeholder="Search invoices..."
                  miw={278}
                  h={36}
                  classNames={{ input: topbarClasses.search_input }}
                />
                <ActionIcon
                  size="lg"
                  variant="outline"
                  color="#E5E7EB"
                  h={36}
                  className={topbarClasses.search_btn}
                >
                  <Icon icon="i_search" width="16px" height="16px" />
                </ActionIcon>
              </Flex>
              <ActionIcon h={36} w={36} variant="outline" color="#D1D5DB" radius={6}>
                <Icon icon="i_calendar" width="20px" height="20px" />
              </ActionIcon>
              <ActionIcon h={36} w={36} variant="outline" color="#D1D5DB" radius={6}>
                <Icon icon="i_filter_line" width="20px" height="20px" />
              </ActionIcon>
            </Group>
            <Button
              color="gray.1"
              radius={10}
              leftSection={<Icon icon="i_xlsx" width="16px" height="16px" color="#000" />}
              c="#000"
            >
              Export
            </Button>
          </Group>
          <Grid gutter={12}>
            <Grid.Col span={4}>
              <Card radius={12} p={16} withBorder>
                <Stack gap={8}>
                  <Group gap={6}>
                    <Icon icon="i_money_bag" width="20px" height="20px" />
                    <Text c="zinc.4" fz={14} lh="140%" fw={400}>
                      Total gross
                    </Text>
                  </Group>
                  <Group justify="space-between">
                    <Stack gap={16}>
                      <Text c="zinc.8" fz={24} lh="140%" fw={700}>
                        $841,128.11
                      </Text>
                      <Group gap={8} align="center">
                        <Group gap={2} align="center">
                          <Icon
                            icon="i_arrow_up"
                            width="20px"
                            height="20px"
                            color="var(--mantine-color-green-5)"
                          />
                          <Text c="green" fz={14} lh="140%" fw={500}>
                            4%
                          </Text>
                        </Group>
                        <Text c="zinc.4" fz={14} lh="140%" fw={400}>
                          vs last month
                        </Text>
                      </Group>
                    </Stack>
                    <Image src="/assets/media/chart_up.png" w={120} />
                  </Group>
                </Stack>
              </Card>
            </Grid.Col>
            <Grid.Col span={4}>
              <Card radius={12} p={16} withBorder>
                <Stack gap={8}>
                  <Group gap={6}>
                    <Icon icon="i_typeline" width="20px" height="20px" />
                    <Text c="zinc.4" fz={14} lh="140%" fw={400}>
                      Total expenses
                    </Text>
                  </Group>
                  <Group justify="space-between">
                    <Stack gap={16}>
                      <Text c="zinc.8" fz={24} lh="140%" fw={700}>
                        $841,128.11
                      </Text>
                      <Group gap={8} align="center">
                        <Group gap={2} align="center">
                          <Icon
                            icon="i_arrow_dwn"
                            width="20px"
                            height="20px"
                            color="var(--mantine-color-red-6)"
                          />
                          <Text c="red.5" fz={14} lh="140%" fw={500}>
                            21%
                          </Text>
                        </Group>
                        <Text c="zinc.4" fz={14} lh="140%" fw={400}>
                          vs last month
                        </Text>
                      </Group>
                    </Stack>
                    <Image src="/assets/media/chart_down.png" w={120} />
                  </Group>
                </Stack>
              </Card>
            </Grid.Col>
            <Grid.Col span={4}>
              <Card radius={12} p={16} withBorder>
                <Stack gap={8}>
                  <Group gap={6}>
                    <Icon icon="i_savings" width="20px" height="20px" />
                    <Text c="zinc.4" fz={14} lh="140%" fw={400}>
                      Net profit
                    </Text>
                  </Group>
                  <Group justify="space-between">
                    <Stack gap={16}>
                      <Text c="zinc.8" fz={24} lh="140%" fw={700}>
                        $841,128.11
                      </Text>
                      <Group gap={8} align="center">
                        <Group gap={2} align="center">
                          <Icon
                            icon="i_arrow_up"
                            width="20px"
                            height="20px"
                            color="var(--mantine-color-green-5)"
                          />
                          <Text c="green">1%</Text>
                        </Group>
                        <Text c="zinc.4">vs last month</Text>
                      </Group>
                    </Stack>
                    <Image src="/assets/media/chart_up.png" w={120} />
                  </Group>
                </Stack>
              </Card>
            </Grid.Col>
          </Grid>
          <Card withBorder p={16} radius={12} mih={375}>
            <Stack gap={16} justify="space-between">
              <Stack gap={2}>
                <Text fz={18} lh="140%" fw={600} c="zinc.9">
                  Financial Overview
                </Text>
                <Text fz={14} lh="140%" fw={400} c="zinc.4">
                  Income, Expenses, and Net Profit Trends Over Time
                </Text>
              </Stack>
              <Stack mah={275} mih={275}>
                <AreaChart />
              </Stack>
            </Stack>
          </Card>
          <Grid gutter={16}>
            <Grid.Col span={6}>
              <Card withBorder p={16} radius={12}>
                <Stack gap={8}>
                  <Group justify="space-between">
                    <Group>
                      <Icon icon="i_money_bag" width="20px" height="20px" />
                      <Text fz={14} lh="140%" fw={400}>
                        Total Factoring income
                      </Text>
                    </Group>
                    <Button
                      variant="subtle"
                      size="xs"
                      color="#0F89EB"
                      rightSection={
                        <Icon icon="i_arrow_right" width="16px" height="16px" color="#0F89EB" />
                      }
                    >
                      See all
                    </Button>
                  </Group>

                  <Text c="zinc.8" fz={24} lh="140%" fw={700}>
                    $841,128.11
                  </Text>
                  <CustomBar
                    items={[
                      {
                        label: 'Factored and received',
                        color: 'blue.4',
                        percent: '80',
                      },
                      {
                        label: 'Non factored',
                        color: 'pink.4',
                        percent: '20',
                      },
                    ]}
                  />
                  <Group align="center">
                    <Group align="center" gap={12}>
                      <Box w={16} h={16} style={{ borderRadius: '4px' }} bg="blue.4" />
                      <Text>Factored and received</Text>
                    </Group>
                    <Divider orientation="horizontal" variant="dashed" flex={1} />
                    <Text c="zinc.9" fz={16} lh="140%" fw={700}>
                      $638,111
                    </Text>
                  </Group>
                  <Group align="center">
                    <Group align="center" gap={12}>
                      <Box w={16} h={16} style={{ borderRadius: '4px' }} bg="pink.5" />
                      <Text>Non factored</Text>
                    </Group>
                    <Divider orientation="horizontal" variant="dashed" flex={1} />
                    <Text c="zinc.9" fz={16} lh="140%" fw={700}>
                      $203,017.11
                    </Text>
                  </Group>
                </Stack>
              </Card>
            </Grid.Col>
            <Grid.Col span={6}>
              <Card withBorder p={16} radius={12}>
                <Stack gap={8}>
                  <Group justify="space-between">
                    <Group>
                      <Icon icon="i_money_bag" width="20px" height="20px" />
                      <Text fz={14} lh="140%" fw={400}>
                        Total expense of drivers
                      </Text>
                    </Group>
                    <Button
                      variant="subtle"
                      size="xs"
                      color="#0F89EB"
                      rightSection={
                        <Icon icon="i_arrow_right" width="16px" height="16px" color="#0F89EB" />
                      }
                    >
                      See all
                    </Button>
                  </Group>
                  <Text c="zinc.8" fz={24} lh="140%" fw={700}>
                    $841,128.11
                  </Text>
                  <CustomBar
                    items={[
                      {
                        label: 'Paid drivers',
                        color: 'violet.5',
                        percent: '90',
                      },
                      {
                        label: 'Unpaid drivers',
                        color: 'blue.5',
                        percent: '10',
                      },
                    ]}
                  />
                  <Group align="center">
                    <Group align="center" gap={12}>
                      <Box w={16} h={16} style={{ borderRadius: '4px' }} bg="violet.5" />
                      <Text>Paid drivers</Text>
                    </Group>
                    <Divider orientation="horizontal" variant="dashed" flex={1} />
                    <Text c="zinc.9" fz={16} lh="140%" fw={700}>
                      $103,111
                    </Text>
                  </Group>
                  <Group align="center">
                    <Group align="center" gap={12}>
                      <Box w={16} h={16} style={{ borderRadius: '4px' }} bg="blue.5" />
                      <Text>Unpaid drivers</Text>
                    </Group>
                    <Divider orientation="horizontal" variant="dashed" flex={1} />
                    <Text c="zinc.9" fz={16} lh="140%" fw={700}>
                      $12,221
                    </Text>
                  </Group>
                </Stack>
              </Card>
            </Grid.Col>
          </Grid>
        </Stack>
      </Stack>
      <BottomBreadcrumbComponent
        items={[
          { title: 'Dashboard', href: '/accounting-dashboard' },
          { title: 'Income & Expense', href: '#' },
        ]}
      />
    </>
  );
};

export default IncomeExpensePage;
