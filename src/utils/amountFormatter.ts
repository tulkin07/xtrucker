export const amountFormatter = (value: string) => {
  const regex = /,/g;
  return value?.replace(regex, '');
};
