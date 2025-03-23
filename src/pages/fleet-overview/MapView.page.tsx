import classes from './extra-components/styles.module.scss';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useSearchParams } from 'react-router-dom';
import { Box, Flex, ScrollArea, Stack } from '@mantine/core';
import TopbarLayout from '@/components/layout/dashboard/Topbar.layout';
import MapModal from './extra-components/Map.modal';
import MapSidebarCardComponent from './extra-components/MapSidebar.card.component';

interface ILocation {
  label: string;
  map_location: [number, number];
}

export interface ILoad {
  id: number;
  label: string;
  status: 'enroute' | 'loaded' | 'loading' | 'home';
  load_id: string;
  routes: ILocation[];
}

const FleetMapViewPage = () => {
  const [searchParams] = useSearchParams();

  const map_modal_open = searchParams.get('curr-load');

  const loads: ILoad[] = [
    {
      label: 'Chris Glasser',
      status: 'enroute',
      load_id: 'TQL 1119776312',
      id: 1,
      routes: [
        { label: '3831 Cedar Lane, Somerville, MA 02143', map_location: [38.356174, -117.728857] },
        {
          label: '3522 West Fork Street, Missoula, MT 59801',
          map_location: [39.649344, -106.937949],
        },
        { label: '4093 Overlook Drive, Richmond, IN 47374', map_location: [41.725352, -85.781349] },
      ],
    },
    {
      label: 'Mary Freund',
      status: 'home',
      load_id: 'No load',
      id: 2,
      routes: [
        { label: '3831 Cedar Lane, Somerville, MA 02143', map_location: [38.356174, -117.728857] },
      ],
    },
    {
      label: 'Corina McCoy',
      status: 'enroute',
      load_id: 'AXLE 11197763',
      id: 3,
      routes: [
        { label: '3831 Cedar Lane, Somerville, MA 02143', map_location: [38.356174, -117.728857] },
        {
          label: '4093 Overlook Drive, Richmond, IN 47374',
          map_location: [39.649344, -106.937949],
        },
      ],
    },
    {
      label: 'Corina McCoy',
      status: 'enroute',
      load_id: 'AXLE 11197763',
      id: 4,
      routes: [
        { label: '3831 Cedar Lane, Somerville, MA 02143', map_location: [38.356174, -117.728857] },
        {
          label: '4093 Overlook Drive, Richmond, IN 47374',
          map_location: [39.649344, -106.937949],
        },
      ],
    },
  ];

  return (
    <Stack h="100%">
      <TopbarLayout title="Map view" />
      <Flex>
        <Flex direction="column" w={348} className={classes.map_sidebar_wrapper}>
          <ScrollArea h="calc(100vh - 57px)">
            {loads.map((load) => {
              return (
                <MapSidebarCardComponent
                  key={load.id}
                  label={load.label}
                  status={load.status}
                  load_id={load.load_id}
                  routes={load.routes}
                  id={load.id}
                />
              );
            })}
          </ScrollArea>
        </Flex>
        <Flex direction="column" w="calc(100% - 348px)" h="calc(100vh - 57px)" pos="relative">
          {map_modal_open && <MapModal data={null} />}
          <Box pos="absolute" left={0} top={0} w="100%" h="100%" style={{ zIndex: 1 }}>
            <MapContainer
              center={[51.505, -0.09]}
              zoom={13}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[51.505, -0.09]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </Box>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default FleetMapViewPage;
