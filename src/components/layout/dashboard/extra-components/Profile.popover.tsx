import { Button, Stack, Text } from '@mantine/core';
import Icon from '@/components/icons/Icon.component';

const ProfilePopover = () => {
  return (
    <Stack gap={0}>
      <Text p="8px 12px" c="#14B8A6" fz={16} lh="140%" fw={600}>
        Russell Blake
      </Text>
      <Button
        size="md"
        variant="outline"
        color="#F5F5F4"
        radius={0}
        styles={{
          root: { borderInline: 'none' },
          inner: { display: 'flex', justifyContent: 'start' },
        }}
        leftSection={<Icon width="20px" height="20px" icon="i_switchaccout" />}
      >
        <Text fw={400} fz={16} lh="140%" c="#09090B">
          Change account
        </Text>
      </Button>
      <Button
        size="md"
        variant="outline"
        color="#F5F5F4"
        radius={0}
        styles={{
          root: { borderInline: 'none' },
          inner: { display: 'flex', justifyContent: 'start' },
        }}
        leftSection={<Icon width="20px" height="20px" icon="i_settings" />}
      >
        <Text fw={400} fz={16} lh="140%" c="#09090B">
          Settings
        </Text>
      </Button>
      <Button
        size="md"
        variant="outline"
        color="#F5F5F4"
        radius={0}
        styles={{
          root: { borderInline: 'none' },
          inner: { display: 'flex', justifyContent: 'start' },
        }}
        leftSection={<Icon width="20px" height="20px" icon="i_logout" color="#EF4444" />}
      >
        <Text fw={400} fz={16} lh="140%" c="#EF4444">
          Log out
        </Text>
      </Button>
    </Stack>
  );
};

export default ProfilePopover;
