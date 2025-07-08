import dayjs from 'dayjs';
import { useState } from 'react';
import { Col, DatePicker, Form, Input, Row } from 'antd';
import { useUser } from '@/context/userContext';
import useCreateCompanyLegalDocs from '@/pages/onboarding/hooks/useCreateCompanyLegalDocs';
import { CompanyLeagalDocsType } from '@/pages/onboarding/types';
import getUploadedFileInfo, { UploadedFileInfo } from '@/utils/fileUpload';
import { handleAxiosError } from '@/utils/handleAxiosError';
import AttachFileDropzone from './AttachFile.dropzone';
import TabLayout from './Tab.layout';

type DocumentsTabComponentProps = {
  onButtonClick: () => void;
};

const DocumentsTabComponent: React.FC<DocumentsTabComponentProps> = () => {
  const { user } = useUser();
  const [form] = Form.useForm();
  const { create, isPending } = useCreateCompanyLegalDocs();

  // Har bir fayl uchun alohida loading va file state
  const [loadingCOI, setLoadingCOI] = useState(false);
  const [loadingFMCSA, setLoadingFMCSA] = useState(false);
  const [loadingW9, setLoadingW9] = useState(false);

  const [fileCOI, setFileCOI] = useState<UploadedFileInfo | null>(null);
  const [fileFMCSA, setFileFMCSA] = useState<UploadedFileInfo | null>(null);
  const [fileW9, setFileW9] = useState<UploadedFileInfo | null>(null);

  const handleSubmit = (values: CompanyLeagalDocsType) => {
    values.company_id = user?.company_id;
    values.expiration_date = dayjs(values.expiration_date).format('YYYY-MM-DD');

    values.certificate_of_insurance = fileCOI?.url || '';
    values.fmcsaoa_letter = fileFMCSA?.url || '';
    values.w9_form = fileW9?.url || '';

    create(values);
  };

  const handleDrop = async (
    files: File[],
    setLoading: (value: boolean) => void,
    setFile: (file: UploadedFileInfo) => void
  ) => {
    const file = files[0];
    setLoading(true);
    try {
      const uploaded = await getUploadedFileInfo(file);
      setFile(uploaded);
    } catch (error) {
      handleAxiosError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TabLayout
      title="Compliance & Legal Documents"
      description="Stay compliant and protect your business"
      step={2}
      onButtonClick={() => form.submit()}
      isPending={isPending}
      buttonText="Continue "
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              label="Insurance Provider Name"
              name="insurance_provider_name"
              rules={[{ required: true, message: 'Please enter provider name' }]}
            >
              <Input placeholder="Type..." style={{ borderRadius: 6, height: 40 }} />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Policy Number"
              name="policy_number"
              rules={[{ required: true, message: 'Please enter policy number' }]}
            >
              <Input placeholder="Type..." style={{ borderRadius: 6, height: 40 }} />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Expiration Date"
              name="expiration_date"
              rules={[{ required: true, message: 'Please select expiration date' }]}
            >
              <DatePicker
                format="YYYY-MM-DD"
                style={{ borderRadius: 6, height: 40, width: '100%' }}
                placeholder="YYYY-MM-DD"
              />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              label="Coverage Amount ($)"
              name="coverage_amount"
              rules={[{ required: true, message: 'Please enter coverage amount' }]}
            >
              <Input placeholder="Type..." style={{ borderRadius: 6, height: 40 }} />
            </Form.Item>
          </Col>

          <Col span={24}>
            <AttachFileDropzone
              title={fileCOI?.name || 'Certificate of Insurance (COI)'}
              onDrop={(files) => handleDrop(files, setLoadingCOI, setFileCOI)}
              loading={loadingCOI}
            />
          </Col>

          <Col span={24}>
            <AttachFileDropzone
              title={fileFMCSA?.name || 'FMCSA Operating Authority Letter'}
              onDrop={(files) => handleDrop(files, setLoadingFMCSA, setFileFMCSA)}
              loading={loadingFMCSA}
            />
          </Col>

          <Col span={24}>
            <AttachFileDropzone
              title={fileW9?.name || 'W-9 Form'}
              onDrop={(files) => handleDrop(files, setLoadingW9, setFileW9)}
              loading={loadingW9}
            />
          </Col>
        </Row>
      </Form>
    </TabLayout>
  );
};

export default DocumentsTabComponent;
