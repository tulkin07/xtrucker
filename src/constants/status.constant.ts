const loadStatusColorMap: LoadStatusMap = {
  ready: {
    bd: 'red.6', // green border
    bg: 'red.1', // light green background
    icon: 'red.5',
    title: 'red.5',
  },
  dispatched: {
    bd: 'yellow.4', // green border
    bg: 'yellow.0', // light green background
    icon: 'yellow.10',
    title: 'yellow.10',
  },
  reserved: {
    bd: 'cyan.3', // green border
    bg: 'cyan.0', // light green background
    icon: 'cyan.7',
    title: 'cyan.7',
  },
  enroute: {
    bd: 'sky.3', // green border
    bg: 'sky.0', // light green background
    icon: 'sky.7',
    title: 'sky.7',
  },
  onsite: {
    bd: 'purple.3', // green border
    bg: 'violet.0', // light green background
    icon: 'purple.7',
    title: 'purple.7',
  },
  canceled: {
    bd: 'red.0', // green border
    bg: 'red.2', // light green background
    icon: 'red.10',
    title: 'red.10',
  },
  repair_shop: {
    bd: 'red.0', // green border
    bg: 'red.1', // light green background
    icon: 'red.10',
    title: 'red.10',
  },
  vacation: {
    bd: 'zinc.0', // green border
    bg: 'zinc.0', // light green background
    icon: 'zinc.7',
    title: 'zinc.7',
  },
  no_info: {
    bd: 'blue.0', // grey border
    bg: 'blue.0', // light grey background
    icon: 'blue.7',
    title: 'blue.7',
  },
};

export { loadStatusColorMap };
