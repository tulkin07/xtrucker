import { useCallback, useMemo } from 'react';
import onboardingClasses from '../styles/Onboarding.module.scss';
import { IconArrowLeft } from '@tabler/icons-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Box, Button, Group, Stack } from '@mantine/core';
import CompanyTabComponent from '@/features/onboarding/components/CompanyTab.component';
import DocumentsTabComponent from '@/features/onboarding/components/DocumentsTab.component';
import PaymentTabComponent from '@/features/onboarding/components/PaymentTab.component';
import { OnboardingTypes } from '@/interfaces';

const OnboardingPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const curr_tab = searchParams.get('active_onboarding_tab') as OnboardingTypes;
  const navigate = useNavigate();

  const handleSkip = useCallback(() => {
    switch (curr_tab) {
      case 'DOCUMENTS': {
        setSearchParams((prevParams) => {
          prevParams.set('active_onboarding_tab', 'PAYMENT');
          return prevParams;
        });
        break;
      }
      case 'PAYMENT': {
        navigate('/dashboard');
        break;
      }
      default: {
        setSearchParams((prevParams) => {
          prevParams.set('active_onboarding_tab', 'DOCUMENTS');
          return prevParams;
        });
        break;
      }
    }
  }, [curr_tab]);

  const handleBack = useCallback(() => {
    switch (curr_tab) {
      case 'COMPANY': {
        navigate('/login');
        break;
      }
      case 'DOCUMENTS': {
        setSearchParams((prevParams) => {
          prevParams.set('active_onboarding_tab', 'COMPANY');
          return prevParams;
        });
        break;
      }
      case 'PAYMENT': {
        setSearchParams((prevParams) => {
          prevParams.set('active_onboarding_tab', 'DOCUMENTS');
          return prevParams;
        });
        break;
      }
    }
  }, [curr_tab]);

  const renderTabs = useMemo(() => {
    switch (curr_tab) {
      case 'DOCUMENTS':
        return <DocumentsTabComponent onButtonClick={handleSkip} />;
      case 'PAYMENT':
        return <PaymentTabComponent onButtonClick={handleSkip} />;
      default:
        return <CompanyTabComponent onButtonClick={handleSkip} />;
    }
  }, [curr_tab]);

  return (
    <Box bg="#F3F4F6" h="100vh" className={onboardingClasses.onboardingBox}>
      <Button
        radius="md"
        pos="fixed"
        left={30}
        top={30}
        variant="subtle"
        leftSection={<IconArrowLeft />}
        color="dark"
        onClick={handleBack}
      >
        Back
      </Button>
      <Stack maw={500} gap={20}>
        {renderTabs}
        <Group justify="center">
          {/* <Button variant="subtle" color="#384252" radius="md" onClick={handleSkip}>
            Skip
          </Button> */}
        </Group>
      </Stack>
    </Box>
  );
};

export default OnboardingPage;
