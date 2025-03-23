import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Stack } from '@mantine/core';
import Icon from '@/components/icons/Icon.component';

type GSidebarItemProps = {
  icon: string;
  url: string;
  tooltip: string;
};

const GSidebarItem: React.FC<GSidebarItemProps> = (props) => {
  const location = useLocation();
  const is_active = useMemo(() => {
    if (location.pathname.startsWith(props.url)) {
      return true;
    }
    return false;
  }, [props.url, location.pathname]);

  const navigate = useNavigate();
  return (
    <Stack
      w={40}
      h={40}
      bg="teal.1"
      display="flex"
      justify="center"
      align="center"
      style={{
        borderRadius: '12px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: is_active ? 'var(--mantine-color-teal-2)' : 'var(--mantine-color-teal-1)',
        cursor: 'pointer',
      }}
      onClick={() => {
        navigate(props.url);
      }}
    >
      <Icon icon={props.icon} width="16px" height="16px" />
    </Stack>
  );
};

export default GSidebarItem;
