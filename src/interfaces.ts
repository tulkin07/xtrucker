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

export type OnboardingTypes = 'COMPANY' | 'DOCUMENTS' | 'PAYMENT';

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

export interface IInvoiceFactoring {
  id: number;
  load: number;
  broker: string;
  driver: string;
  pu_del: string;
  delivery_date: string;
  amount: number;
  status: 'ready_for_factor' | 'sent_to_factoring' | 'factored' | 'rejected';
  comment: string;
}

export interface IICompanyValueChildren {
  file_name: string;
  type: string;
  updated_at: string;
}

export interface ICompanyValues {
  id: number;
  name: string;
  mc_number: number;
  dot_number: string;
  status: 'active' | 'inactive';
  children: {
    title: string;
    data: IICompanyValueChildren[];
  }[];
}

export interface IDriverStatements {
  id: number;
  name: string;
  week_range: string;
  total_earn: string;
  deductions: string;
  net_pay: string;
  status: 'not_created' | 'unpaid' | 'paid' | 'rejected';
}

export interface IEmployee {
  name: string;
  phone_number: string;
  email: string;
  role: string;
  id: number;
}

export interface IPermission {
  name: string;
  values: ('create' | 'read' | 'update' | 'delete')[];
  id: number;
}

export interface IRole {
  id: number;
  name: string;
  permissions: IPermission[];
}
