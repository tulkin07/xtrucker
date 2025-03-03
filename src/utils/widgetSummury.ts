import { TransactionFilterType, TransactionWidgetType } from '@/interfaces';

export function widgetSummury(value?: TransactionFilterType): TransactionWidgetType {
  switch (value) {
    case 'year':
      return 'yearly';
    case 'month':
      return 'monthly';
    case 'week':
      return 'weekly';
    default:
      return 'daily';
  }
}
