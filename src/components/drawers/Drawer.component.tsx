import { Drawer, DrawerBodyProps, DrawerRootProps, ScrollArea } from '@mantine/core';
import Icon from '../icons/Icon.component';

type DrawerComponentProps = {
  root: DrawerRootProps;
  body: DrawerBodyProps;
  title: string;
  footer: React.ReactNode;
} & React.PropsWithChildren;

const DrawerComponent: React.FC<DrawerComponentProps> = (props) => {
  return (
    <Drawer.Root
      opened={props.root.opened}
      onClose={props.root.onClose}
      scrollAreaComponent={ScrollArea.Autosize}
      position={props.root.position}
    >
      <Drawer.Overlay />
      <Drawer.Content>
        <Drawer.Header
          styles={{
            header: {
              padding: '12px',
              minHeight: '40px',
            },
          }}
        >
          <Drawer.Title
            styles={{
              title: {
                fontSize: '16px',
                lineHeight: '140%',
                fontWeight: 600,
              },
            }}
          >
            {props.title}
          </Drawer.Title>
          <Drawer.CloseButton
            styles={{ close: { minHeight: '24px !important' } }}
            icon={<Icon icon="i_close" color="#09090B" width="20px" height="20px" />}
          />
        </Drawer.Header>
        <Drawer.Body {...props.body}>{props.children}</Drawer.Body>
        {props.footer}
      </Drawer.Content>
    </Drawer.Root>
  );
};

export default DrawerComponent;
