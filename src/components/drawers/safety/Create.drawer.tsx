import { IconCalendarFilled, IconFile } from '@tabler/icons-react';
import {
  Box,
  Button,
  Drawer,
  DrawerProps,
  DrawerRootProps,
  FileButton,
  FileInput,
  Flex,
  Grid,
  Group,
  ScrollArea,
  Select,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { DateInput } from '@mantine/dates';
import Icon from '@/components/icons/Icon.component';

type CreateDrawerProps = {
  footer: React.ReactNode;
} & DrawerProps;

const CreateDrawer: React.FC<CreateDrawerProps> = (props) => {
  return (
    <Drawer
      title={
        <Group gap={8}>
          <Text fz={16} lh="140%" c="zinc.8" fw={600}>
            Create ticket
          </Text>{' '}
          {/* <Box
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
          </Box> */}
        </Group>
      }
      position="right"
      size={props.size ?? 700}
      w={props.w}
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
      overlayProps={props.overlayProps}
    >
      <Stack gap={24}>
        <Text fz={20} lh="140%" fw={700}>
          Task Details
        </Text>
        <Grid gutter={12}>
          <Grid.Col span={12}>
            <Select radius={6} placeholder="Type..." label="Type" />
          </Grid.Col>
          <Grid.Col span={12}>
            <Select radius={6} placeholder="Type..." label="Driver" />
          </Grid.Col>
          <Grid.Col span={12}>
            <DateInput
              radius={6}
              rightSection={<IconCalendarFilled />}
              placeholder="Type..."
              label="Date"
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <DateInput
              radius={6}
              rightSection={<IconCalendarFilled />}
              placeholder="Type..."
              label="Expires"
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <DateInput
              radius={6}
              rightSection={<IconCalendarFilled />}
              placeholder="Type..."
              label="Previous Date"
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <Select radius={6} placeholder="Select..." label="Frequency" />
          </Grid.Col>
          <Grid.Col span={12}>
            <Select radius={6} placeholder="Type..." label="Status" />
          </Grid.Col>
          <Grid.Col span={12}>
            <TextInput radius={6} placeholder="Type..." label="Amount" />
          </Grid.Col>
          <Grid.Col span={12}>
            <Select radius={6} placeholder="Type..." label="Compensation" />
          </Grid.Col>
          <Grid.Col span={12}>
            <TextInput radius={6} placeholder="Type..." label="Note" />
          </Grid.Col>
          <Grid.Col span={12}>
            <TextInput radius={6} placeholder="Type..." label="Note" />
          </Grid.Col>
          <Grid.Col span={12}>
            <Flex justify="space-between" align="center" p="md">
              <Group>
                <IconFile size={20} />
                <Text fz={16} fw={400} lh={'140%'}>
                  Upload invoice
                </Text>
              </Group>

              <FileButton onChange={() => {}}>
                {(props) => (
                  <Button {...props} radius="md" color="sky.8">
                    Upload
                  </Button>
                )}
              </FileButton>
            </Flex>
          </Grid.Col>
        </Grid>
      </Stack>
      {props.footer}
    </Drawer>
  );
};

export default CreateDrawer;
