import classes from './styles/Topbar.module.scss';
import { ActionIcon, Group, Text } from '@mantine/core';
import Icon from '@/components/icons/Icon.component';
import { useNavigate } from 'react-router-dom';

const TopbarLayout = () => {
  const navigate = useNavigate();
  return (
    <Group justify="start" align="center" className={classes.settings_dashboard_topbar}>
      <Group justify="start" gap={8}>
        <ActionIcon variant="subtle" color="gray" component="a" href="/dashboard" 
          onClick={(e) => {
            e.preventDefault();
            navigate('/dashboard');
          }}
        >
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
