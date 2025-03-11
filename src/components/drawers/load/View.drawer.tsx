import { DrawerBodyProps, DrawerRootProps } from '@mantine/core';
import DrawerComponent from '../Drawer.component';

type ViewDrawerProps = {
  root: DrawerRootProps;
  body: DrawerBodyProps;
  footer: React.ReactNode;
};

const ViewDrawer: React.FC<ViewDrawerProps> = (props) => {
  return (
    <DrawerComponent title="Load details" root={props.root} body={props.body} footer={props.footer}>
      <>drawer</>
    </DrawerComponent>
  );
};

export default ViewDrawer;
