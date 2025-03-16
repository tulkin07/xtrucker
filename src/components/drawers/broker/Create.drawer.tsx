import {
  Box,
  Drawer,
  DrawerRootProps,
  Grid,
  Group,
  ScrollArea,
  Select,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import Icon from '@/components/icons/Icon.component';

type CreateDrawerProps = {
  footer: React.ReactNode;
} & DrawerRootProps;

const CreateDrawer: React.FC<CreateDrawerProps> = (props) => {
  return (
    <Drawer
      title={
        <Group gap={8}>
          <Text fz={16} lh="140%" c="zinc.8" fw={600}>
            Create brokers
          </Text>{' '}
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
          Basic information
        </Text>
        <Grid gutter={12}>
          <Grid.Col span={6}>
            <TextInput radius={6} placeholder="Type..." label="Name" />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput radius={6} placeholder="Type..." label="Street" />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput radius={6} placeholder="Type..." label="Email" type="email" />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput radius={6} placeholder="Type..." label="City" />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput radius={6} placeholder="Type..." label="Phone number" />
          </Grid.Col>
          <Grid.Col span={6}>
            <Select radius={6} placeholder="Select..." label="State" />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput radius={6} placeholder="Type..." label="Fax" />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput radius={6} placeholder="Type..." label="Zipcode" />
          </Grid.Col>
        </Grid>
        <Text fz={20} lh="140%" fw={700}>
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
        </Grid>
      </Stack>
      {props.footer}
    </Drawer>
  );
};

export default CreateDrawer;
