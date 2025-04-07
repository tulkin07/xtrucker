import {
  Box,
  Drawer,
  DrawerRootProps,
  FileInput,
  Grid,
  Group,
  ScrollArea,
  Select,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import Icon from '@/components/icons/Icon.component';
import { DateInput } from '@mantine/dates';
import { IconCalendarFilled } from '@tabler/icons-react';

type CreateDrawerProps = {
  footer: React.ReactNode;
} & DrawerRootProps;

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
      size={700}
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
            <DateInput radius={6} rightSection={<IconCalendarFilled  />} placeholder="Type..." label="Date" />
          </Grid.Col>
          <Grid.Col span={12}>
            <DateInput radius={6} rightSection={<IconCalendarFilled  />} placeholder="Type..." label="Expires" />
          </Grid.Col>
          <Grid.Col span={12}>
            <DateInput radius={6} rightSection={<IconCalendarFilled  />} placeholder="Type..." label="Previous Date" />
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
          <FileInput
            label="File input"
            placeholder="Input placeholder"
            />
          </Grid.Col>

        </Grid>
        {/* <Text fz={20} lh="140%" fw={700}>
          Other information
        </Text>
        <Grid>
          <Grid.Col span={6}>
            <TextInput radius={6} placeholder="Type..." label="MC number (Motor carrier)" />
          </Grid.Col>
          <Grid.Col span={6} />
          <Grid.Col span={6}>
            <TextInput radius={6} placeholder="Type..." label="Credit rating" />
          </Grid.Col>
          <Grid.Col span={6} />
          <Grid.Col span={6}>
            <TextInput radius={6} placeholder="Type..." label="Federal Id" />
          </Grid.Col>
          <Grid.Col span={6} />
          <Grid.Col span={6}>
            <TextInput radius={6} placeholder="Type..." label="Factoring" />
          </Grid.Col>
          <Grid.Col span={6} />
        </Grid> */}
      </Stack>
      {props.footer}
    </Drawer>
  );
};

export default CreateDrawer;
