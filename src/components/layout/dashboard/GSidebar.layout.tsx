import classes from './styles/GSidebar.module.scss';
import { ActionIcon, Group, Stack } from '@mantine/core';
import Icon from '@/components/icons/Icon.component';
import GSidebarItem from './extra-components/GSidebar.item';

const GSidebarLayout = () => {
  const globalUrls = [
    { icon: 'i_dashboard_fill', tooltip: 'Dashboard', url: '/dashboard' },
    { icon: 'i_calculator', tooltip: 'Accounting', url: '/accounting-dashboard' },
    { icon: 'i_truck_line', tooltip: 'Fleet management', url: '/fleet-dashboard' },
    { icon: 'i_shield', tooltip: 'Safety', url: '/safety-dashboard' },
    { icon: 'i_vip_crown', tooltip: 'Admin panel', url: '/admin-dashboard' },
  ];
  return (
    <Stack className={classes.layout_root_wrapper}>
      <Group justify="center" gap={16}>
        <Stack w={48} h={48} display="flex" justify="center" align="center">
          <Icon icon="i_x" width="20px" height="20px" color="#14B8A6" />
        </Stack>
        <Group gap={12} style={{ flexDirection: 'column' }}>
          {globalUrls.map((item) => {
            return (
              <GSidebarItem icon={item.icon} tooltip={item.tooltip} url={item.url} key={item.url} />
            );
          })}
        </Group>
      </Group>
      <ActionIcon w={40} h={40} radius={12} color="slate.1" mx="auto">
        <Icon icon="i_exit" width="24px" height="24px" />
      </ActionIcon>
    </Stack>
  );
};

export default GSidebarLayout;
