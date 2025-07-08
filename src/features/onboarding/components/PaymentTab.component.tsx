import { Col, Form, Row, Select } from 'antd';
import { useUser } from '@/context/userContext';
import {
  factoringCompanyOptions,
  paymentMethodOptions,
  paymentTermsOptions,
} from '@/pages/onboarding/constants/company-payment-types';
import useCreateCompanyPayment from '@/pages/onboarding/hooks/useCreateCompanyPayment';
import { PaymentFormData } from '@/pages/onboarding/types';
import TabLayout from './Tab.layout';

const { Option } = Select;

type PaymentTabComponentProps = {
  onButtonClick: () => void;
};

const PaymentTabComponent: React.FC<PaymentTabComponentProps> = () => {
  const { create, isPending } = useCreateCompanyPayment();
  const { user } = useUser();
  const [form] = Form.useForm();
  const handleSubmit = (values: PaymentFormData) => {
    values.company_id = user?.company_id;
    create(values);
  };
  return (
    <TabLayout
      title="Compliance & Legal Documents"
      description="Stay compliant and protect your business"
      step={3}
      buttonText="Continue"
      onButtonClick={() => form.submit()}
      isPending={isPending}
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item label="Payment Terms" name="payment_terms">
              <Select
                placeholder="Choose"
                allowClear
                style={{ height: '40px', borderRadius: '6px' }}
                options={paymentTermsOptions}
              />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item label="Factoring Company" name="factoring_company">
              <Select
                placeholder="Choose"
                allowClear
                style={{ height: '40px', borderRadius: '6px' }}
                options={factoringCompanyOptions}
              />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item label="Preferred Payment Method" name="preferred_payment_method">
              <Select
                placeholder="Choose"
                allowClear
                style={{ height: '40px', borderRadius: '6px' }}
                options={paymentMethodOptions}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </TabLayout>
  );
};

export default PaymentTabComponent;
