import classes from './styles/Select.module.scss';
import { Select } from '@mantine/core';

export const SelectComponent = Select.extend({
  classNames() {
    return {
      label: classes.text_input_label,
      input: classes.text_input_input,
    };
  },
});
