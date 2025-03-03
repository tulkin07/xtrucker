import { IAllocation } from '@/interfaces';
import { amountFormatter } from './amountFormatter';

const FIELDS = [
  'balance',
  'amount',
  'accepted_date',
  'transaction_date',
  'transaction_type',
  'contragent',
  'description',
  'allocations',
  'tags',
  'end_date',
  'recurrence_type',
  'custom_recurrence_data',
  'files',
];

export const transationDataFormatter = (data: any) => {
  return Object.entries(data).reduce((accumlator: any, [key, value]: [string, any]) => {
    if (FIELDS.includes(key)) {
      if (key === 'amount') {
        accumlator[key] = amountFormatter(value);
      } else if (key === 'allocations') {
        accumlator[key] = value?.map((item: IAllocation) => ({
          ...item,
          amount: amountFormatter(item?.amount),
        }));
      } else {
        accumlator[key] = value;
      }
    }
    return accumlator;
  }, {});
};
