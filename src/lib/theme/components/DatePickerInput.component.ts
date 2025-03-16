import { DatePickerInput } from '@mantine/dates';
import { FORM_INPUT, INPUT_LABEL } from './constant';

export const DatePickerInputComponent = DatePickerInput.extend({
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
