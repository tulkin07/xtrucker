interface IProps {
  arr: [];
  item: any;
}

export const filterByItem = ({ arr, item }: IProps) => {
  return arr?.filter((el) => el === item);
};
