import classes from './styles/BaseAction.module.scss';
import { Group } from '@mantine/core';

type BaseActionProps = {} & React.PropsWithChildren;

const BaseAction: React.FC<BaseActionProps> = (props) => {
  return <Group className={classes.base_action_wrapper}>{props.children}</Group>;
};

export default BaseAction;
