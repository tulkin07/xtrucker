const FIELDS = ['amount', 'category', 'percentage', 'project', 'divided_by'];

export const formatAllocationData = (data: { [key: string]: any }[]) => {
  return data?.map((allocation) => {
    return Object.entries(allocation).reduce((accumlator: any, [key, value]: [string, any]) => {
      if (FIELDS.includes(key)) {
        if (key === 'category') {
          accumlator[key] = value?.id;
        } else if (key === 'project') {
          accumlator[key] = value?.id;
        } else {
          accumlator[key] = value;
        }
      }
      return accumlator;
    }, {});
  });
};
