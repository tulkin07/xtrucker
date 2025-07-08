import { Col, Form, Input, Row, Select } from 'antd';
import { companyTypes } from '@/pages/onboarding/constants/company-types';
import useCreateCompany from '@/pages/onboarding/hooks/useCreateCompany';
import TabLayout from './Tab.layout';

type CompanyTabComponentProps = {
  onButtonClick: () => void;
};

const CompanyTabComponent: React.FC<CompanyTabComponentProps> = () => {
  const [form] = Form.useForm();
  const { create, isPending } = useCreateCompany();
  const handleSubmit = (values: any) => {
    create(values);
  };

  return (
    <TabLayout
      title="Let's get your company up and running"
      description="Provide essential details like your company name, contact information, and business type."
      step={1}
      onButtonClick={() => form.submit()}
      buttonText="Continue"
      isPending={isPending}
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              label="Company name"
              name="name"
              rules={[
                { required: true, message: 'Please enter company name' },
                { min: 2, message: 'Minimum 2 characters required' },
              ]}
            >
              <Input placeholder="Type..." style={{ borderRadius: 6, height: 40 }} />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              label="Company type"
              name="company_type"
              rules={[{ required: true, message: 'Please select company type' }]}
            >
              <Select
                placeholder="Choose"
                options={companyTypes}
                style={{ borderRadius: 6, height: '40px' }}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="MC Number"
              name="mc_number"
              rules={[
                { required: true, message: 'Please enter MC Number' },
                {
                  pattern: /^\d{6,9}$/, // 6 dan 9 gacha raqam
                  message: 'Enter a valid MC Number',
                },
              ]}
            >
              <Input placeholder="123456" style={{ borderRadius: 6, height: 40 }} />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="DOT Number"
              name="usdot_number"
              rules={[
                { required: true, message: 'Please enter DOT Number' },
                {
                  pattern: /^\d{6,9}$/,
                  message: 'DOT Number must be 6 to 9 digits',
                },
              ]}
            >
              <Input placeholder="1234567" style={{ borderRadius: 6, height: 40 }} />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              label="Tax ID / EIN"
              name="tax_id"
              rules={[
                { required: true, message: 'Please enter Tax ID / EIN' },
                {
                  pattern: /^\d{2}-?\d{7}$/,
                  message: 'Tax ID must be in format XX-XXXXXXX or XXXXXXXXX',
                },
              ]}
            >
              <Input placeholder="12-3456789" style={{ borderRadius: 6, height: 40 }} />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              label="Business Address"
              name="business_address"
              rules={[
                { required: true, message: 'Please enter business address' },
                { min: 5, message: 'Minimum 5 characters required' },
              ]}
            >
              <Input placeholder="Type..." style={{ borderRadius: 6, height: 40 }} />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Phone number"
              name="phone_number"
              rules={[
                { required: true, message: 'Please enter phone number' },
                {
                  pattern: /^(?:\+1\s?)?\(?([2-9][0-9]{2})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/,
                  message: 'Enter a valid US phone number',
                },
              ]}
            >
              <Input placeholder="+1 (123) 456-7890" style={{ borderRadius: 6, height: 40 }} />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Email"
              name="email_address"
              rules={[
                { required: true, message: 'Please enter email address' },
                { type: 'email', message: 'Invalid email format' },
              ]}
            >
              <Input placeholder="example@email.com" style={{ borderRadius: 6, height: 40 }} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </TabLayout>
  );
};

export default CompanyTabComponent;
