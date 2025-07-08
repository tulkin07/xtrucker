import { ReactNode } from 'react';
import mainClasses from './styles/main.module.scss';
import { Spin } from 'antd';
import { Button, Card, Stack, Text } from '@mantine/core';
import StepsTabComponent from './Steps.tab.component';

type TabLayoutProps = {
  title: string;
  description: string;
  step: number;
  maxStep?: number;
  children: ReactNode;
  buttonText?: string;
  onButtonClick?: () => void;
  isPending: boolean;
};

const TabLayout: React.FC<TabLayoutProps> = ({
  title,
  description,
  step,
  maxStep = 3,
  children,
  isPending,
  buttonText = 'Transfer ownership',
  onButtonClick = () => {},
}) => {
  return (
    <Stack gap={32}>
      <Stack gap={12}>
        <Text fz={24} lh="140%" fw={700} c="#030712">
          {title}
        </Text>
        <Text fz={14} lh="140%" fw={400} c="#3F3F46">
          {description}
        </Text>
      </Stack>
      <Stack gap={20}>
        <StepsTabComponent step={step} maxStep={maxStep} />
        <Card p={20} withBorder classNames={{ root: mainClasses.tab_card }}>
          {children}
          <Button
            disabled={isPending}
            onClick={onButtonClick}
            color="sky.8"
            radius={8}
            fullWidth
            type="submit"
            mt={16}
          >
            {isPending ? <Spin /> : buttonText}
          </Button>
        </Card>
      </Stack>
    </Stack>
  );
};

export default TabLayout;
