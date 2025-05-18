import { IconArrowAutofitLeft, IconCalendar, IconMinus, IconPlus } from '@tabler/icons-react';
import {
  ActionIcon,
  Drawer,
  DrawerProps,
  Flex,
  Grid,
  Group,
  MultiSelect,
  Radio,
  ScrollArea,
  Select,
  Stack,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import Icon from '@/components/icons/Icon.component';
import ModifiedTableComponent from '@/components/table';

type CreateDrawerProps = {
  footer: React.ReactNode;
} & DrawerProps;

interface PaymentDataProps {
  id: number;
  repairType: string;
  quantity?: number;
  price: number;
  totalAmount?: number;
}

const CreateDrawer: React.FC<CreateDrawerProps> = (props) => {
  const { size, opened, onClose, ...rest } = props;

  const paymentData: PaymentDataProps[] = [
    {
      id: 1,
      repairType: 'Brake Drum Shoe',
      quantity: 4,
      price: 122,
    },
    {
      id: 2,
      repairType: 'Labor/Other Fee',
      quantity: 1,
      price: 122,
    },
    {
      id: 3,
      repairType: 'Tax',
      price: 12,
    },
  ];

  return (
    <Drawer
      title={
        <Group gap={8}>
          <IconArrowAutofitLeft onClick={onClose} style={{ cursor: 'pointer' }} />
          <Text fz={16} lh="140%" c="zinc.8" fw={600}>
            Create Order
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
      size={size ?? 700}
      opened={opened}
      onClose={onClose}
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
        onClick: onClose,
      }}
      {...rest}
    >
      <Grid gutter={20}>
        <Grid.Col span={6}>
          <Stack gap={24}>
            {' '}
            <Select radius={6} placeholder="Name of the driver" label="Driver" />
            <Stack gap={16}>
              <Text fz={20} fw={700} lh="140%">
                Maintenance & repairs
              </Text>
              <MultiSelect
                label="Service Types"
                placeholder="Pick value"
                data={['React', 'Angular', 'Vue', 'Svelte']}
              />
              <Select radius={6} placeholder="Address" label="Address of repair shop" />
              <Radio.Group>
                <Group mt="xs">
                  <Radio label="Shop repair" value="shop" color="dark" />
                  <Radio label="Mobile repair" value="mobile" color="dark" />
                </Group>
              </Radio.Group>

              <Textarea
                label="Description"
                placeholder="Type Description"
                resize="vertical"
                rows={5}
              />
            </Stack>
            <Stack gap={16}>
              <Text fz={20} fw={700} lh="140%">
                Equipment
              </Text>
              <Radio.Group>
                <Group mt="xs">
                  <Radio label="Truck" value="truck" color="dark" />
                  <Radio label="Trailers" value="trailers" color="dark" />
                </Group>
              </Radio.Group>
              <Grid>
                <Grid.Col span={6}>
                  <TextInput radius={6} label="Odometer" placeholder="Enter..." />
                </Grid.Col>
                <Grid.Col span={6}>
                  <TextInput radius={6} label="Current engine hours" placeholder="Enter..." />
                </Grid.Col>
              </Grid>
            </Stack>
            <Stack>
              <Text fz={20} fw={700} lh="140%">
                Repair on/by
              </Text>
              <Radio.Group>
                <Group mt="xs">
                  <Radio label="Date" value="date" color="dark" />
                  <Radio label="As soon as possible (ASAP)" value="asap" color="dark" />
                </Group>
              </Radio.Group>

              <DatePickerInput
                valueFormat="DD/MMM/YYYY"
                label="Repaired Date"
                rightSection={<IconCalendar />}
              />
            </Stack>
          </Stack>
        </Grid.Col>

        <Grid.Col span={6} styles={{ col: { marginTop: '88px' } }}>
          <Stack gap={24}>
            <Stack gap={12}>
              <Text fz={20} fw={700} lh="140%">
                Payments
              </Text>

              <ModifiedTableComponent
                data={paymentData}
                columns={[
                  {
                    label: 'Repair Type',
                    key: 'repairType',
                  },
                  {
                    label: 'Qty',
                    key: 'quantity',
                    render: ({ quantity }) => {
                      if (!quantity) {
                        return null;
                      }
                      return (
                        <TextInput
                          value={`${quantity}x`}
                          onChange={() => {}}
                          radius="md"
                          rightSectionWidth={68}
                          rightSection={
                            <Flex gap="xs">
                              <ActionIcon bg="inherit">
                                <IconMinus size={16} color="black" />
                              </ActionIcon>
                              <ActionIcon bg="inherit">
                                <IconPlus size={16} color="black" />
                              </ActionIcon>
                            </Flex>
                          }
                        />
                      );
                    },
                  },
                  {
                    label: 'Price',
                    key: 'price',
                    render: ({ price }) => {
                      return <TextInput value={`${price}$`} onChange={() => {}} radius="md" />;
                    },
                  },
                  {
                    label: 'Amount',
                    key: 'totalAmount',
                    render: ({ price, quantity }) => (quantity ?? 1) * price,
                  },
                ]}
              />
            </Stack>
            <Stack gap={12}>
              <Text fz={20} fw={700} lh="140%">
                Bill to (Payer)
              </Text>
              <Radio.Group>
                <Group mt="xs">
                  <Radio label="Company" value="company" color="dark" />
                  <Radio label="Drivers/Contractors" value="drivers" color="dark" />
                  <Radio label="Others" value="others" color="dark" />
                </Group>
              </Radio.Group>
              <MultiSelect
                label="Payers"
                placeholder="Select one or more payers"
                data={['React', 'Angular', 'Vue', 'Svelte']}
              />
              <Grid.Col span={3}>
                <DatePickerInput
                  valueFormat="DD/MMM/YYYY"
                  label="Payers date"
                  placeholder="DD/MM/YYYY"
                  rightSection={<IconCalendar />}
                />
              </Grid.Col>
            </Stack>
          </Stack>
        </Grid.Col>
      </Grid>

      {props.footer}
    </Drawer>
  );
};

export default CreateDrawer;
