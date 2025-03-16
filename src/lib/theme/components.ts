import { MantineThemeComponent } from '@mantine/core';
import { DatePickerInputComponent } from './components/DatePickerInput.component';
import { SelectComponent } from './components/Select.component';
import { TextAreaComponent } from './components/TextArea.component';
import { TextInputComponent } from './components/TextInput.component';
import { TimeInputComponent } from './components/TimeInput.component';

export const COMPONENTS: Record<string, MantineThemeComponent> | undefined = {
  TextInput: TextInputComponent,
  DatePickerInput: DatePickerInputComponent,
  TimeInput: TimeInputComponent,
  Select: SelectComponent,
  Textarea: TextAreaComponent,
};
