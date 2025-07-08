export type CompanyInfoType = {
  name: string;
  usdot_number: number;
  mc_number: number;
  company_type:
    | 'individual'
    | 'c_corporation'
    | 's_corporation'
    | 'partnership'
    | 'trust'
    | 'llc'
    | 'other';
  tax_id: string;
  business_address: string;
  phone_number: string;
  email_address: string;
};

export type CompanyLeagalDocsType = {
 "insurance_provider_name": string,
  "policy_number": string,
  "expiration_date":string,
  "coverage_amount": number,
  "certificate_of_insurance":string,
  "w9_form": string,
  "fmcsaoa_letter": string
  "company_id": number|undefined
};


export type PaymentFormData = {
  payment_terms: 'Net 15' | 'Net 30' | 'Net 45' | 'Net 60' | 'Due on Receipt';
  factoring_company:
    | 'Apex Capital'
    | 'RTS Financial'
    | 'Triumph Business Capital'
    | 'TAFS'
    | 'Other'
    | 'None';
  preferred_payment_method: 'ACH' | 'Wire Transfer' | 'Paper Check' | 'PayPal' | 'Zelle';
  company_id: number | undefined;
};
