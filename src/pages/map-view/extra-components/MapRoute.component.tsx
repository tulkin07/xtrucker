import React, { useMemo } from 'react';
import { Box, Group, Text } from '@mantine/core';
import Icon from '@/components/icons/Icon.component';

type MapRouteComponentProps = {
  label: string;
  map_location: [number, number];
  location_count: number;
  is_last: boolean;
};

const MapRouteComponent: React.FC<MapRouteComponentProps> = (props) => {
  const { label, location_count, is_last } = props;
  const check_icon = useMemo(
    () => Boolean(location_count > 1 && is_last),
    [location_count, is_last]
  );
  return (
    <Group justify="start" gap={8}>
      {check_icon ? (
        <Icon icon="i_location" color="#EF4444" width="16px" height="16px" />
      ) : (
        <Box
          w={9.6}
          h={9.6}
          mx={3.2}
          style={{
            borderRadius: '50%',
            border: '1.6px solid var(--mantine-color-gray-5)',
          }}
        />
      )}
      <Text c="gray.9" fz={14} lh="140%" fw={400}>
        {label}
      </Text>
    </Group>
  );
};

export default MapRouteComponent;
