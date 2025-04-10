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

export interface ISafetyTasks {
  id: number;
  type: string;
  previous: Date;
  date: Date;
  expires: Date;
  frequency: 'weekly' | 'monthly' | 'yearly';
  driver: string;
  truck: number;
  notes: string;
  attachments: string;
}

export interface ISafetyUnit {
  id: number;
  name: string;
}
export interface ISafetyOdometer {
  miles: number;
  hours: number;
}

export interface IBillTo {
  name: string;
  carrier: string;
}

export type SafetyStatus = 'unpaid' | 'progress' | 'paid';

export interface ISafetyExpirationDate {
  id: number;
  order: number;
  unit: ISafetyUnit;
  odometer: ISafetyOdometer;
  repairDate: Date;
  totalCost: number;
  billTo: IBillTo;
  status: SafetyStatus;
  paymentData: {
    id: number;
    serviceType: string;
    quantity: number;
    price: number;
    date: Date;
    total?: number;
  }[];
}
