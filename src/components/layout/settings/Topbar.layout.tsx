import classes from './styles/Topbar.module.scss';
import { ActionIcon, Group, Text } from '@mantine/core';
import Icon from '@/components/icons/Icon.component';

const TopbarLayout = () => {
  return (
    <Group justify="start" align="center" className={classes.settings_dashboard_topbar}>
      <Group justify="start" gap={8}>
        <ActionIcon variant="subtle" color="gray" component="a" href="/dashboard">
          <Icon icon="i_close" />
        </ActionIcon>
        <Text fz={20} lh="140%" fw={700}>
          Settings
        </Text>
      </Group>
    </Group>
  );
};

export default TopbarLayout;
