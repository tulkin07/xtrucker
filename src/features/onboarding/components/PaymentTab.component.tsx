import { Grid, Select } from '@mantine/core';
import TabLayout from './Tab.layout';

const PaymentTabComponent = () => {
  return (
    <TabLayout
      title="Compliance & Legal Documents"
      description="Stay compliant and protect your business"
      step={3}
    >
      <Grid>
        <Grid.Col>
          <Select radius={6} label="Payment Terms" placeholder="Choose" />
        </Grid.Col>
        <Grid.Col>
          <Select radius={6} label="Factoring Company" placeholder="Choose" />
        </Grid.Col>
        <Grid.Col>
          <Select radius={6} label="Preferred Payment Method" placeholder="Choose" />
        </Grid.Col>
      </Grid>
    </TabLayout>
  );
};

export default PaymentTabComponent;
