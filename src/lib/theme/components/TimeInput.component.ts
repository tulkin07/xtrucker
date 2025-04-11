import classes from './styles/TimeInput.module.scss';
import { TimeInput } from '@mantine/dates';

export const TimeInputComponent = TimeInput.extend({
  classNames() {
    return {
      label: classes.text_input_label,
      input: classes.text_input_input,
    };
  },
});
