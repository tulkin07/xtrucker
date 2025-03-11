import { DrawerRootProps } from '@mantine/core';
import { LoadCreateCropzone } from '@/components/dropzone';
import DrawerComponent from '../Drawer.component';

type CreateDrawerProps = {
  footer: React.ReactNode;
} & DrawerRootProps;

const CreateDrawer: React.FC<CreateDrawerProps> = (props) => {
  return (
    <DrawerComponent
      body={{
        styles: {
          body: {
            padding: '12px 12px 0 12px',
            minHeight: 'calc(100vh - 46px)',
            position: 'relative',
          },
        },
      }}
      footer={props.footer}
      root={props}
      title="Create load"
    >
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
      <LoadCreateCropzone />
    </DrawerComponent>
  );
};

export default CreateDrawer;
