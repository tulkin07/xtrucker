import classes from './styles/TextInput.module.scss';
import { TextInput } from '@mantine/core';

export const TextInputComponent = TextInput.extend({
  classNames() {
    return {
      label: classes.text_input_label,
      input: classes.text_input_input,
    };
  },
});
