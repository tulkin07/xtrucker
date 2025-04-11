import { Button, Checkbox, Group, Select, Stack, Text, TextInput } from '@mantine/core';
import ModifiedDrawerComponent from '../ModifiedDrawer.component';

type EmployeeCreateDrawerProps = {
  open: boolean;
  close: () => void;
};

const EmployeeCreateDrawer: React.FC<EmployeeCreateDrawerProps> = (props) => {
  const { close, open } = props;
  return (
    <ModifiedDrawerComponent
      opened={open}
      onClose={close}
      title="Create employee"
      footerContent={
        <Group
          pos="fixed"
          bottom={0}
          gap="sm"
          px={12}
          py={9}
          justify="space-between"
          w="100%"
          style={{
            borderTop: `1px solid var(--mantine-color-stone-1)`,
          }}
        >
          <Button radius={10} color="gray.2" c="neutral.9" onClick={props.close}>
            Cancel
          </Button>
          <Button radius={10} color="sky.8">
            Save
          </Button>
        </Group>
      }
    >
      <Stack gap={16}>
        <Text c="zinc.8" fz={20} lh="140%" fw={700}>
          Account information
        </Text>
        <TextInput label="Full name" placeholder="Type..." />
        <TextInput label="Email" placeholder="Type..." />
        <TextInput label="Phone Number" placeholder="Type..." />
        <Checkbox color="dark" label="Send invite letter to this employee" />
        <Select
          data={[
            { label: 'Admin', value: 'admin' },
            { label: 'Accountant', value: 'accountant' },
          ]}
          value="admin"
          label="Choose role"
          placeholder="Select role"
        />
      </Stack>
    </ModifiedDrawerComponent>
  );
};

export default EmployeeCreateDrawer;
