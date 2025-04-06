import React from 'react';
import { Stack, TextInput } from '@mantine/core';
import AttachFileDropzone from '@/features/onboarding/components/AttachFile.dropzone';
import ModifiedDrawerComponent from '../ModifiedDrawer.component';

type CompaniesCreateDrawerProps = {
  open: boolean;
  close: () => void;
};

const CompaniesCreateDrawer: React.FC<CompaniesCreateDrawerProps> = (props) => {
  const { close, open } = props;
  return (
    <ModifiedDrawerComponent opened={open} onClose={close} title="Create company">
      <Stack gap={16}>
        <TextInput label="Company name" placeholder="Type..." />
        <TextInput label="MC" placeholder="Type..." />
        <TextInput label="DOT" placeholder="Type..." />
        <AttachFileDropzone title="Authority_MC" onDrop={() => {}} />
        <AttachFileDropzone title="W9" onDrop={() => {}} />
        <AttachFileDropzone title="Factoring contract" onDrop={() => {}} />
        <AttachFileDropzone title="Certificate of insurance" onDrop={() => {}} />
        <AttachFileDropzone title="Proof of incurance" onDrop={() => {}} />
      </Stack>
    </ModifiedDrawerComponent>
  );
};

export default CompaniesCreateDrawer;
