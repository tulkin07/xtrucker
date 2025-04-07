import classes from './styles/TextArea.module.scss';
import { Textarea } from '@mantine/core';

export const TextAreaComponent = Textarea.extend({
  classNames() {
    return {
      label: classes.text_input_label,
      input: classes.text_input_input,
    };
  },
});
