import classes from './styles.module.scss';
import { useSearchParams } from 'react-router-dom';
import { Box, Group, Stack, Text } from '@mantine/core';
import { ILoad } from '../MapView.page';
import MapRouteComponent from './MapRoute.component';

const MapSidebarCardComponent: React.FC<ILoad> = (props) => {
  const [_, setSearchParams] = useSearchParams();

  const active_load = _.get('curr-load');

  const handleSearchLoad = (id: number) => {
    setSearchParams((prevParams) => {
      const curr_load = prevParams.get('curr-load');
      if (curr_load && curr_load === String(id)) {
        prevParams.delete('curr-load');
      } else {
        prevParams.set('curr-load', String(id));
      }
      return prevParams;
    });
  };

  return (
    <Stack
      className={classes.map_sidebar_card}
      style={{
        ...(active_load === String(props.id) && {
          backgroundColor: 'var(--mantine-color-blue-0)',
        }),
      }}
      role="button"
      onClick={() => handleSearchLoad(props.id)}
    >
      <Stack>
        <Group justify="space-between">
          <Text c="blue.5" fz={18} fw={600} lh="140%">
            Corina McCoy
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
              {props.status}
            </Text>
          </Box>
        </Group>
        <Text fz={16} lh="140%" fw={400} c="zinc.4">
          TQL 1119776312
        </Text>
      </Stack>
      <Stack gap={8}>
        {props.routes.map((route, index) => {
          return (
            <MapRouteComponent
              is_last={index + 1 === props.routes.length}
              label={route.label}
              location_count={props.routes.length}
              map_location={route.map_location}
            />
          );
        })}
      </Stack>
    </Stack>
  );
};

export default MapSidebarCardComponent;
