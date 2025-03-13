import { useLocation } from 'react-router-dom';
import { Button, Stack, Text } from '@mantine/core';
import Icon from '@/components/icons/Icon.component';

type Link = {
  label: string;
  path: string;
  icon: string;
};

type NavSectionProps = {
  title: string;
  links: Link[];
};

const NavSection: React.FC<NavSectionProps> = (props) => {
  const location = useLocation();

  return (
    <Stack gap={8}>
      <Text fz={12} lh="140%" c="#71717A">
        {props.title}
      </Text>
      <Stack gap={2}>
        {props.links.map((item, index) => {
          const curr_path = location.pathname === item.path;
          return (
            <Button
              key={index}
              styles={{
                inner: {
                  justifyContent: 'start',
                },
              }}
              radius={6}
              size="sm"
              leftSection={<Icon icon={item.icon} />}
              variant={curr_path ? 'filled' : 'subtle'}
              color={curr_path ? '#F5F5F4' : 'gray'}
              component="a"
              href={item.path}
            >
              <Text fz={14} lh="140%" fw={400} c={curr_path ? '#18181B' : '#18181B'}>
                {item.label}
              </Text>
            </Button>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default NavSection;
