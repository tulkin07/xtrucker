import { Stack, Text } from '@mantine/core';

type InnerLayoutProps = {
  title: string;
  description: string;
} & React.PropsWithChildren;

const InnerLayout: React.FC<InnerLayoutProps> = (props) => {
  return (
    <Stack gap={32}>
      <Stack gap={12}>
        <Text fz={24} fw={700} lh="140%" c="#09090B">
          {props.title}
        </Text>
        <Text fz={14} fw={400} lh="140%" c="#71717A">
          {props.description}
        </Text>
      </Stack>
      {props.children}
    </Stack>
  );
};

export default InnerLayout;
