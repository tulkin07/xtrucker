import classes from '../../components/layout/dashboard/styles/Topbar.module.scss';
import { ActionIcon, Flex, Grid, Stack, TextInput } from '@mantine/core';
import BottomBreadcrumbComponent from '@/components/bottom-breadcrumb/BottomBreadcrumb.component';
import Icon from '@/components/icons/Icon.component';
import IntegrationComponent from '@/components/integration/Integration.component';
import InnerLayout from '@/components/layout/settings/extra-components/Inner.layout';

const IntegrationsPage = () => {
  return (
    <>
      <Stack p="16px" h="100%">
        <InnerLayout
          title="Integrations"
          description="Connect and manage third-party integrations for your company."
        >
          <Stack gap={16}>
            <Flex className={classes.topbar_searchbar}>
              <TextInput
                size="sm"
                variant="default"
                placeholder="Search for anything..."
                miw={466}
                h={36}
                classNames={{ input: classes.search_input }}
              />
              <ActionIcon
                size="lg"
                variant="outline"
                color="#E5E7EB"
                h={36}
                className={classes.search_btn}
              >
                <Icon icon="i_search" width="16px" height="16px" />
              </ActionIcon>
            </Flex>
            <Stack maw={768}>
              <Grid gutter={12}>
                <Grid.Col span={4}>
                  <IntegrationComponent icon="/deletable/samsara.png" title="Samsara" type="ELD" />
                </Grid.Col>
                <Grid.Col span={4}>
                  <IntegrationComponent icon="/deletable/motive.png" title="Motive" type="ELD" />
                </Grid.Col>
                <Grid.Col span={4}>
                  <IntegrationComponent icon="/deletable/geotab.png" title="GEOTAB" type="ELD" />
                </Grid.Col>
                <Grid.Col span={4}>
                  <IntegrationComponent
                    icon="/deletable/triumph.png"
                    title="Triumph"
                    type="Factoring"
                  />
                </Grid.Col>
                <Grid.Col span={4}>
                  <IntegrationComponent
                    icon="/deletable/rts.png"
                    title="RTS Financial"
                    type="Accounting"
                  />
                </Grid.Col>
              </Grid>
            </Stack>
          </Stack>
        </InnerLayout>
      </Stack>
      <BottomBreadcrumbComponent
        items={[
          { title: 'Main', href: '/dashboard' },
          { title: 'Settings', href: '/dashboard/settings/personal-info' },
          { title: 'Integrations', href: '#' },
        ]}
      />
    </>
  );
};

export default IntegrationsPage;
