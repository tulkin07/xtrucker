import { Select } from '@mantine/core';
import { FORM_INPUT, INPUT_LABEL } from './constant';

export const SelectComponent = Select.extend({
  styles() {
    return {
      label: {
        ...INPUT_LABEL,
      },
      input: {
        ...FORM_INPUT,
      },
    };
  },
});
