import { ILoad } from '@/pages/map-view/MapView.page';

export const loads: ILoad[] = [
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
