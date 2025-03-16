import {
  ActionIcon,
  Box,
  Drawer,
  DrawerRootProps,
  Flex,
  Grid,
  Group,
  ScrollArea,
  Select,
  Stack,
  Tabs,
  Text,
  TextInput,
} from '@mantine/core';
import { CustomCreateCropzone } from '@/components/dropzone';
import Icon from '@/components/icons/Icon.component';
import topbar_classes from '@/components/layout/dashboard/styles/Topbar.module.scss';
import AttachFileDropzone from '@/features/onboarding/components/AttachFile.dropzone';

type CreateDrawerProps = {
  footer: React.ReactNode;
} & DrawerRootProps;

const CreateDrawer: React.FC<CreateDrawerProps> = (props) => {
  return (
    <Drawer
      title={
        <Group gap={8}>
          <Text fz={16} lh="140%" c="zinc.8" fw={600}>
            Create driver
          </Text>
          <Box
            style={{
              border: '1px solid #BFDBFE',
              background: '#EFF6FF',
              padding: '2.5px 8px',
              borderRadius: '8px',
            }}
          >
            <Text c="#1D4ED8" fz={12} lh="140%">
              Draft saved
            </Text>
          </Box>
        </Group>
      }
      position="right"
      size={532}
      opened={props.opened}
      onClose={props.onClose}
      scrollAreaComponent={ScrollArea.Autosize}
      styles={{
        header: {
          padding: '9px 12px',
          minHeight: '40px',
        },
        close: {
          minHeight: '24px',
          maxHeight: '24px',
        },
        title: {
          fontSize: '16px',
          fontWeight: 600,
          lineHeight: '140%',
        },
        body: {
          padding: '12px 12px 0 12px',
          height: 'calc(100vh - 46px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        },
      }}
      closeButtonProps={{
        icon: <Icon icon="i_close" width="20px" height="20px" />,
        style: {
          minHeight: '24px !important',
        },
        onClick: props.onClose,
      }}
    >
      <Tabs color="teal" defaultValue="first">
        <Tabs.List>
          <Tabs.Tab value="first" color="teal.4">
            All
          </Tabs.Tab>
          <Tabs.Tab value="second" color="teal.4">
            Documents
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="first" pt="xs">
          <Stack gap={24}>
            <Text fz={20} lh="140%" fw={700}>
              Basic information
            </Text>
            <Grid gutter={6}>
              <Grid.Col>
                <TextInput radius={6} placeholder="Type..." label="Full name" />
              </Grid.Col>
              <Grid.Col>
                <TextInput radius={6} placeholder="Type..." label="Email" type="email" />
              </Grid.Col>
              <Grid.Col>
                <TextInput radius={6} placeholder="Type..." label="Phone Number" />
              </Grid.Col>
              <Grid.Col>
                <TextInput radius={6} placeholder="Type..." label="Brokers number" />
              </Grid.Col>
            </Grid>
            <Text fz={20} lh="140%" fw={700}>
              Driver details
            </Text>
            <Grid gutter={6}>
              <Grid.Col>
                <TextInput radius={6} placeholder="Type..." label="Company name" />
              </Grid.Col>
              <Grid.Col>
                <TextInput
                  radius={6}
                  placeholder="Select..."
                  label="Social Security Number (SSN)"
                />
              </Grid.Col>
              <Grid.Col>
                <Stack gap={8}>
                  <Text fz={14} lh="140%" fw={500}>
                    Date of birth
                  </Text>
                  <Flex className={topbar_classes.topbar_searchbar} w="100%">
                    <Select
                      size="sm"
                      variant="default"
                      placeholder="Search for anything..."
                      h={36}
                      flex={1}
                      classNames={{ input: topbar_classes.search_input }}
                      styles={{
                        input: {
                          borderColor: '#D1D5DB',
                        },
                      }}
                    />
                    <ActionIcon
                      size="lg"
                      variant="outline"
                      color="#E5E7EB"
                      h={36}
                      className={topbar_classes.search_btn}
                      styles={{
                        root: {
                          borderColor: '#D1D5DB',
                        },
                      }}
                    >
                      <Icon icon="i_search" width="16px" height="16px" />
                    </ActionIcon>
                  </Flex>
                </Stack>
              </Grid.Col>
              <Grid.Col>
                <TextInput radius={6} placeholder="Type..." label="Address" />
              </Grid.Col>
              <Grid.Col>
                <TextInput radius={6} placeholder="Type..." label="City" />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select radius={6} placeholder="Type..." label="State" />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput radius={6} placeholder="Type..." label="Zip code" />
              </Grid.Col>
              <Grid.Col>
                <TextInput radius={6} placeholder="Type..." label="Address" />
              </Grid.Col>
              <Grid.Col span={4}>
                <TextInput radius={6} placeholder="Type..." label="Truck #" />
              </Grid.Col>
              <Grid.Col span={4}>
                <TextInput radius={6} placeholder="Type..." label="Trailer #" />
              </Grid.Col>
              <Grid.Col span={4}>
                <TextInput radius={6} placeholder="Type..." label="Trailer Type" />
              </Grid.Col>
            </Grid>
          </Stack>
        </Tabs.Panel>
        <Tabs.Panel value="second" pt="xs">
          <Stack gap={16}>
            <AttachFileDropzone title="Annual violation review" onDrop={() => {}} />
            <AttachFileDropzone title="Commercial Driver’s Licence (CDL)" onDrop={() => {}} />
            <AttachFileDropzone title="DOT Physical exam" onDrop={() => {}} />
            <AttachFileDropzone title="Drug test & Breath alcohol test" onDrop={() => {}} />
            <AttachFileDropzone title="Training and Certification" onDrop={() => {}} />
            <AttachFileDropzone title="Custom document name.pdf" onDrop={() => {}} />
            <CustomCreateCropzone onDrop={() => {}} />
          </Stack>
        </Tabs.Panel>
      </Tabs>

      {props.footer}
    </Drawer>
  );
};

export default CreateDrawer;
