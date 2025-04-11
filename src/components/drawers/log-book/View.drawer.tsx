import { Drawer, DrawerProps, ScrollArea } from '@mantine/core';
import Icon from '@/components/icons/Icon.component';

type ViewDrawerProps = {
  footer?: React.ReactNode;
} & DrawerProps &
  React.PropsWithChildren;

const ViewDrawer: React.FC<ViewDrawerProps> = (props) => {
  const { size, opened, onClose, ...rest } = props;

  return (
    <Drawer
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
      {props.children}

      {props.footer}
    </Drawer>
  );
};

export default ViewDrawer;
