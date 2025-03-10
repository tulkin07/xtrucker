import { PropsWithChildren } from 'react';
import { Popover, PopoverDropdownProps, PopoverProps } from '@mantine/core';

type PopoverComponentProps = {
  dropdown: PopoverDropdownProps;
  popover: PopoverProps;
} & PropsWithChildren;

const PopoverComponent: React.FC<PopoverComponentProps> = (props) => {
  return (
    <Popover {...props.popover}>
      <Popover.Target>{props.children}</Popover.Target>
      <Popover.Dropdown {...props.dropdown} />
    </Popover>
  );
};

export default PopoverComponent;
