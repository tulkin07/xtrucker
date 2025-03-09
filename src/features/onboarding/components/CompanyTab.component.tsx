import { Grid, Select, TextInput } from '@mantine/core';
import TabLayout from './Tab.layout';

const CompanyTabComponent = () => {
  return (
    <TabLayout
      title="Let's get your company up and running"
      description="Provide essential details like your company name, contact information, and business type."
      step={1}
    >
      <Grid>
        <Grid.Col>
          <TextInput radius={6} label="Company name" placeholder="Type..." />
        </Grid.Col>
        <Grid.Col>
          <Select radius={6} label="Company type" placeholder="Choose" />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput radius={6} label="MC number" placeholder="Type..." />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput radius={6} label="DOT number" placeholder="Type..." />
        </Grid.Col>
        <Grid.Col>
          <TextInput radius={6} label="Tax ID / EIN " placeholder="Type..." />
        </Grid.Col>
        <Grid.Col>
          <TextInput radius={6} label="Business Address" placeholder="Type..." />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput radius={6} label="Phone number" placeholder="+1" />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput radius={6} label="Email" placeholder="example@email.com" />
        </Grid.Col>
      </Grid>
    </TabLayout>
  );
};

export default CompanyTabComponent;