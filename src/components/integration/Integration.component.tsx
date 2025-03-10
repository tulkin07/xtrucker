import { Button, Card, Group, MantineStyleProp, Stack, Text } from '@mantine/core';
import Icon from '../icons/Icon.component';

type IntegrationComponentProps = {
  title: string;
  icon: string;
  type: string;
};

const IntegrationComponent: React.FC<IntegrationComponentProps> = (props) => {
  const threeDots: MantineStyleProp = {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    width: '72px',
    whiteSpace: 'nowrap',
  };

  return (
    <Card withBorder p="8px 12px 8px 12px" radius={8} styles={{ root: { borderColor: '#E5E7EB' } }}>
      <Group justify="space-between" align="center">
        <Group gap={8}>
          <Card
            radius={8}
            w={40}
            h={40}
            shadow="0px 0px 3.08px 0px #00000029"
            p={0}
            display="flex"
            style={{ alignItems: 'center', justifyContent: 'center' }}
          >
            <img
              src={props.icon}
              alt={props.title}
              width="39.5px"
              height="39.5px"
              style={{ objectFit: 'contain' }}
            />
          </Card>
          <Stack gap={2}>
            <Text fz={14} fw={400} lh="140%" c="#18181B" style={{ ...threeDots }}>
              {props.title}
            </Text>
            <Text fz={12} fw={300} lh="140%" c="#71717A" style={{ ...threeDots }}>
              {props.type}
            </Text>
          </Stack>
        </Group>
        <Button
          rightSection={<Icon icon="i_arrow_right" color="#71717A" width="20px" height="20px" />}
          variant="subtle"
          color="#71717A"
          size="xs"
          pr={0}
          pl={5}
        >
          <Text fz={12} fw={500} lh="140%" c="#71717A">
            Connect
          </Text>
        </Button>
      </Group>
    </Card>
  );
};

export default IntegrationComponent;
