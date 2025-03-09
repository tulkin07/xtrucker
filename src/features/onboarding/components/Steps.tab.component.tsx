import { useMemo } from 'react';
import { Box, Group, Stack, Text } from '@mantine/core';

type StepsTabComponentProps = {
  step: number;
  maxStep: number;
};

const StepsTabComponent: React.FC<StepsTabComponentProps> = (props) => {
  const { step, maxStep } = props;

  const renderSteps = useMemo(() => {
    const steps = [];

    for (let i = 0; i < maxStep; i++) {
      steps.push(
        <Box
          key={i}
          style={{
            height: '4px',
            borderRadius: '1px',
            width: `${100 / maxStep - 2}%`, // Calculate width based on maxStep, leaving space for gaps
            ...(step >= i + 1
              ? {
                  backgroundColor: '#27272A',
                }
              : {
                  backgroundColor: '#9CA3AF',
                }),
          }}
        />
      );
    }

    return steps;
  }, [maxStep, step]);

  return (
    <Stack>
      <Text>
        Step {step} of {maxStep}
      </Text>
      <Group gap={8} style={{ width: '100%' }}>
        {renderSteps}
      </Group>
    </Stack>
  );
};

export default StepsTabComponent;
