import { memo, useEffect, useState } from 'react';
import classes from './styles.module.scss';
import { useSearchParams } from 'react-router-dom';
import { Box, Button, Group, rem, Stack, Text } from '@mantine/core';
import { loads } from '@/constants/load.constant';
import { ILoad } from '../MapView.page';
import MapRouteComponent from './MapRoute.component';

type MapModalProps = {
  data: ILoad | null | undefined;
};

const MapModal: React.FC<MapModalProps> = memo(() => {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState<ILoad | undefined>(undefined);

  const map_modal_open = searchParams.get('curr-load');

  useEffect(() => {
    if (map_modal_open) {
      const load_id = parseInt(map_modal_open, 10);
      const found_data = loads.find((load) => load.id === load_id);
      setData(found_data);
    }
  }, [map_modal_open]);

  return (
    <Stack miw={375} pos="absolute" right={8} top={8} style={{ zIndex: 2 }} gap={12}>
      <Box className={classes.map_modal_wrapper} bg="#F5F5F4">
        <Stack gap={16} bg="#FFFFFF" p={12} style={{ borderRadius: '20px' }}>
          <Stack gap={4}>
            <Group justify="space-between">
              <Text fz={12} fw={600} c="zinc.4" lh="140%">
                Trk #48751
              </Text>
              <Box
                style={{
                  border: '1px solid #BFDBFE',
                  background: '#EFF6FF',
                  padding: '2.5px 8px',
                  borderRadius: '8px',
                }}
              >
                <Text c="#1D4ED8" fz={12} lh="140%" style={{ textTransform: 'capitalize' }}>
                  {data?.status}
                </Text>
              </Box>
            </Group>
            <Group justify="space-between">
              <Text fz={18} fw={600} c="blue.5" lh="140%">
                {data?.label}
              </Text>
              <Button variant="subtle" color="blue.5" size="xs" radius="lg">
                Copy location
              </Button>
            </Group>
          </Stack>
          {data?.status !== 'home' && (
            <Stack gap={8}>
              <Group justify="space-between">
                <Text fz={16} fw={400} lh={rem(24)} c="#707070">
                  Load #
                </Text>
                <Text fz={16} fw={400} lh={rem(24)} c="#030712">
                  {data?.load_id}
                </Text>
              </Group>
              <Group justify="space-between">
                <Text fz={16} fw={400} lh={rem(24)} c="#707070">
                  REF #
                </Text>
                <Text fz={16} fw={400} lh={rem(24)} c="#030712">
                  {data?.id}
                </Text>
              </Group>
            </Stack>
          )}
          <Stack gap={8}>
            {data?.routes.map((route, index) => {
              return (
                <MapRouteComponent
                  is_last={index + 1 === data?.routes.length}
                  label={route.label}
                  location_count={data?.routes.length ?? 1}
                  map_location={route.map_location}
                />
              );
            })}
          </Stack>
        </Stack>
        <Box p="16px 12px 12px 12px">
          <Stack gap={8}>
            <Text>Price information</Text>
            <Group justify="space-between">
              <Text c="#707070" fz={16} lh={rem(24)} fw={400}>
                Load rate
              </Text>
              <Text fz={16} lh={rem(24)} fw={400} c="zinc.9">
                $1520
              </Text>
            </Group>
            <Group justify="space-between">
              <Text c="#707070" fz={16} lh={rem(24)} fw={400}>
                Miles
              </Text>
              <Text fz={16} lh={rem(24)} fw={400} c="zinc.9">
                624
              </Text>
            </Group>
            <Group justify="space-between">
              <Text c="#707070" fz={16} lh={rem(24)} fw={400}>
                Dead head
              </Text>
              <Text fz={16} lh={rem(24)} fw={400} c="zinc.9">
                25
              </Text>
            </Group>
            <Group justify="space-between">
              <Text c="#707070" fz={16} lh={rem(24)} fw={400}>
                $/Mile
              </Text>
              <Text fz={16} lh={rem(24)} fw={400} c="zinc.9">
                $2.33
              </Text>
            </Group>
          </Stack>
        </Box>
      </Box>
      <Group justify="center" style={{ borderRadius: '43px' }} p={8} bg="#fff">
        <Text c="zinc.4" fz={16} lh="140%" fw={400}>
          ETA to Hackketstown
        </Text>
        <Text c="zinc.8" fz={16} lh="140%" fw={600}>
          FEB, 08:41PM
        </Text>
      </Group>
    </Stack>
  );
});

export default MapModal;
