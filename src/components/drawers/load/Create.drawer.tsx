import {
  Badge,
  Box,
  Button,
  Drawer,
  DrawerRootProps,
  Grid,
  Group,
  ScrollArea,
  Stack,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';
import { LoadCreateCropzone } from '@/components/dropzone';
import Icon from '@/components/icons/Icon.component';
import TimeLineComponent, { TimelineItemProps } from '@/components/timeline/TimeLine.component';

type CreateDrawerProps = {
  footer: React.ReactNode;
} & DrawerRootProps;

const CreateDrawer: React.FC<CreateDrawerProps> = (props) => {
  const timelineItems: TimelineItemProps[] = [
    {
      locationLabel: 'Current location of the driver',
      locationType: 'pickup',
      date: new Date('2025-11-11'),
      timeSlot: { from: '10:00', to: '--:--' },
      addressPlaceholder: 'enter address',
      actionButton: {
        label: 'PU',
        onClick: () => console.log('Pickup action clicked'),
      },
    },
    {
      locationLabel: 'Pickup',
      locationType: 'pickup',
      date: new Date('2025-11-11'),
      timeSlot: { from: '10:00', to: '--:--' },
      addressPlaceholder: 'enter address',
      actionButton: {
        label: 'PU',
        onClick: () => console.log('Pickup action clicked'),
      },
    },
    {
      locationLabel: 'Stop 1',
      locationType: 'stop',
      date: new Date('2025-11-11'),
      timeSlot: { from: '12:00', to: '16:00' },
      addressPlaceholder: 'enter address',
      actionButton: {
        label: 'PU',
        onClick: () => console.log('Stop action clicked'),
      },
    },
    {
      locationLabel: 'Drop off',
      locationType: 'dropoff',
      date: new Date('2025-11-11'),
      timeSlot: { from: '16:00', to: '20:00' },
      addressPlaceholder: 'enter address',
      actionButton: {
        label: 'DEL',
        onClick: () => console.log('Drop off action clicked'),
      },
      isActive: true,
    },
  ];
  return (
    <Drawer
      title="Create load"
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
          minHeight: 'calc(100vh - 42px - 61px)',
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
      <Stack gap={24} py={12}>
        <LoadCreateCropzone />
        <Text fz={20} fw={700} c="zinc.9">
          Route information
        </Text>
        <Stack gap={16}>
          <TimeLineComponent
            currentLocation="Chicago, IL 55177"
            items={timelineItems}
            onAddressChange={(address, index) =>
              console.log(`Address changed at index ${index}: ${address}`)
            }
            onDateChange={(date, index) => console.log(`Date changed at index ${index}: ${date}`)}
            onTimeChange={(timeSlot, index) =>
              console.log(`Time changed at index ${index}`, timeSlot)
            }
          />
          <Box>
            <Button
              color="teal.5"
              variant="subtle"
              size="xs"
              radius="md"
              leftSection={
                <Icon
                  icon="i_add_rounded"
                  color="var(--mantine-color-teal-5)"
                  width="20px"
                  height="20px"
                />
              }
            >
              Add stop
            </Button>
          </Box>
        </Stack>
        <Stack gap={10}>
          <Group gap={12}>
            <Text fz={20} fw={700} c="zinc.9">
              Load details
            </Text>
            <Badge
              variant="outline"
              color="red"
              radius={6}
              size="md"
              leftSection={<Icon icon="i_warn" width="14px" height="14px" color="#B91C1C" />}
              bg="red.0"
            >
              DNU
            </Badge>
            <Badge
              variant="outline"
              color="red"
              radius={6}
              size="md"
              leftSection={<Icon icon="i_warn" width="14px" height="14px" color="#B91C1C" />}
              bg="red.0"
            >
              Factoring limit
            </Badge>
            <Badge
              variant="outline"
              color="red"
              radius={6}
              size="md"
              leftSection={<Icon icon="i_warn" width="14px" height="14px" color="#B91C1C" />}
              bg="red.0"
            >
              Over limit
            </Badge>
          </Group>
          <Grid gutter={12}>
            <Grid.Col span={6}>
              <TextInput
                color="#D1D5DB"
                radius={6}
                label="Load#"
                placeholder="Enter..."
                styles={{
                  input: {
                    height: '36px',
                  },
                }}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                color="#D1D5DB"
                radius={6}
                label="Commodity"
                placeholder="Enter..."
                styles={{
                  input: {
                    height: '36px',
                  },
                }}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                color="#D1D5DB"
                radius={6}
                label="Load value status"
                placeholder="Enter..."
                styles={{
                  input: {
                    height: '36px',
                  },
                }}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                color="#D1D5DB"
                radius={6}
                label="Load type"
                placeholder="Enter..."
                styles={{
                  input: {
                    height: '36px',
                  },
                }}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                color="#D1D5DB"
                radius={6}
                label="REF#"
                placeholder="Enter..."
                styles={{
                  input: {
                    height: '36px',
                  },
                }}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                color="#D1D5DB"
                radius={6}
                label="Weight"
                placeholder="Enter..."
                styles={{
                  input: {
                    height: '36px',
                  },
                }}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                color="#D1D5DB"
                radius={6}
                label="Broker"
                placeholder="Enter..."
                styles={{
                  input: {
                    height: '36px',
                  },
                }}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                color="#D1D5DB"
                radius={6}
                label="Price"
                placeholder="Enter..."
                styles={{
                  input: {
                    height: '36px',
                  },
                }}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                color="#D1D5DB"
                radius={6}
                label="Brokers number"
                placeholder="Enter..."
                styles={{
                  input: {
                    height: '36px',
                  },
                }}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                color="#D1D5DB"
                radius={6}
                label="Miles"
                placeholder="Enter..."
                styles={{
                  input: {
                    height: '36px',
                  },
                }}
              />
            </Grid.Col>
            <Grid.Col>
              <Textarea
                label="Notes"
                placeholder="Enter..."
                radius={6}
                autosize
                maxRows={8}
                minRows={4}
                rows={4}
              />
            </Grid.Col>
          </Grid>
        </Stack>
      </Stack>
      {props.footer}
    </Drawer>
  );
};

export default CreateDrawer;
