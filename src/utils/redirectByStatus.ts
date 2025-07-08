// src/utils/redirectByStatus.ts
export const redirectByStatus = (status: string, navigate: (path: string) => void) => {
  switch (status) {
    case 'ONBOARDING_STEP1':
      navigate('/onboarding?active_onboarding_tab=COMPANY');
      break;
    case 'ONBOARDING_STEP2':
      navigate('/onboarding?active_onboarding_tab=DOCUMENTS');
      break;
    case 'ONBOARDING_STEP3':
      navigate('/onboarding?active_onboarding_tab=PAYMENT');
      break;
    case 'ONBOARDING_COMPLETED':
      navigate('/dashboard');
      break;
    default:
      navigate('/onboarding?active_onboarding_tab=COMPANY');
  }
};
