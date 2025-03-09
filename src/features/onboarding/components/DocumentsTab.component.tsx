import { Grid, TextInput } from '@mantine/core';
import AttachFileDropzone from './AttachFile.dropzone';
import TabLayout from './Tab.layout';

const DocumentsTabComponent = () => {
  return (
    <TabLayout
      title="Compliance & Legal Documents"
      description="Stay compliant and protect your business"
      step={2}
    >
      <Grid>
        <Grid.Col>
          <TextInput radius={6} label="Insurance Provider Name" placeholder="Type..." />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput radius={6} label="Policy Number" placeholder="Type..." />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput radius={6} label="Expiration Date" placeholder="Type..." />
        </Grid.Col>
        <Grid.Col>
          <TextInput radius={6} label="Coverage Amount ($) " placeholder="Type..." />
        </Grid.Col>
        <Grid.Col>
          <AttachFileDropzone title="Certificate of Insurance (COI)" onDrop={() => {}} />
        </Grid.Col>
        <Grid.Col>
          <AttachFileDropzone title="FMCSA Operating Authority Letter" onDrop={() => {}} />
        </Grid.Col>
        <Grid.Col>
          <AttachFileDropzone title="W-9 Form" onDrop={() => {}} />
        </Grid.Col>
      </Grid>
    </TabLayout>
  );
};

export default DocumentsTabComponent;