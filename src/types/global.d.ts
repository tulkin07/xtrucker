type PathsToStringProps<T> = T extends object
  ? {
      [K in keyof T]: T[K] extends object
        ? `${K & string}` | `${K & string}.${PathsToStringProps<T[K]>}`
        : `${K & string}`;
    }[keyof T]
  : never;

interface Column<T> {
  key: PathsToStringProps<T> | 'actions'; // This allows both nested paths and 'actions'
  label: (() => React.ReactNode) | string;
  width?: number;
  render?: (item: T) => React.ReactNode;
  sortable?: boolean;
}

interface Action<T> {
  label: ((item: T) => string) | string;
  icon: (item: T) => React.ReactNode;
  onClick: (item: T) => void;
  disabled?: (item: T) => boolean;
}

type LoadStatus =
  | 'ready'
  | 'dispatched'
  | 'reserved'
  | 'enroute'
  | 'onsite'
  | 'canceled'
  | 'repair_shop'
  | 'vacation'
  | 'no_info';

type StatusBadgeColors = {
  bd: string; // border color
  bg: string; // background color
  icon: string; // icon name
  title: string;
};

type LoadStatusMap = {
  [key in LoadStatus]: StatusBadgeColors;
};

interface Load {
  status:
    | 'ready'
    | 'dispatched'
    | 'reserved'
    | 'enroute'
    | 'onsite'
    | 'canceled'
    | 'repair_shop'
    | 'vacation'
    | 'no_info';
  load: number;
  driver: string;
  trl: {
    id: number;
  };
}
