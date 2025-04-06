import { Box, Flex, Tooltip } from '@mantine/core';

type CustomBarComponentProps = {
  items: {
    label: string;
    color: string;
    percent: string;
  }[];
};

const CustomBarComponent: React.FC<CustomBarComponentProps> = (props) => {
  return (
    <Flex style={{ borderRadius: '4px', overflow: 'hidden' }}>
      {props.items.map((item) => {
        return (
          <Tooltip label={item.label}>
            <Box bg={item.color} flex={`1 1 ${item.percent}%`} h={40} />
          </Tooltip>
        );
      })}
    </Flex>
  );
};

export default CustomBarComponent;
