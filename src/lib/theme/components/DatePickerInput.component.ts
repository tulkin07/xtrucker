import classes from './styles/DatePickerInput.module.scss';
import { DatePickerInput } from '@mantine/dates';

export const DatePickerInputComponent = DatePickerInput.extend({
  classNames() {
    return {
      label: classes.text_input_label,
      input: classes.text_input_input,
    };
  },
});
