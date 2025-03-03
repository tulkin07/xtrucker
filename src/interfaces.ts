export interface ICompany {
  id: number;
  name: string;
  address: string;
  mail_address: string;
  bank_name: string;
  mfo_name: number;
  oked_name: number;
  stir: number;
  account_number: number;
  tax_number: number;
  director: string;
  director_jshir: number;
  phone_number: string;
  status: boolean;
  image: null;
  created_at: string;
  currency: number;
  time_zone: number;
  region: number;
  district: number;
  created_by: number;
}

export type IUser = {
  phone_number: string;
  image: string;
  full_name: string;
  token: string;
  user_id: number;
  email?: string;
} | null;

export type TransactionFilterType = 'year' | 'week' | 'month';

export type TransactionWidgetType = 'daily' | 'weekly' | 'monthly' | 'yearly';

export interface IAllocation {
  amount: string;
  category: string;
  percentage: string;
  project: string;
  divided_by: string;
}

export interface ICustomShadows {
  [key: string]: string;
}
