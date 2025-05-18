import classes from './styles.module.scss';
import { Anchor, Button, Group } from '@mantine/core';
import Icon from '@/components/icons';

const NavbarComponent = () => {
  return (
    <Group
      component="nav"
      justify="space-between"
      align="center"
      className={classes.navbar_wrapper}
    >
      <div className={classes.navbar_logo_wrapper}>
        <Icon icon="i_root_logo" width="157px" height="42px" color="#14B8A6" />
      </div>

      <Group gap={40}>
        <Anchor className={classes.navbar_link} href="">
          Features
        </Anchor>
        <Anchor className={classes.navbar_link} href="">
          Workspace
        </Anchor>
        <Anchor className={classes.navbar_link} href="">
          Support
        </Anchor>
        <Anchor className={classes.navbar_link} href="">
          Pricing
        </Anchor>
      </Group>
      <Group gap={8} className={classes.navbar_buttons_wrapper}>
        <Button size="md" h={40} variant="subtle" radius="xl" color="#27272A">
          Log in
        </Button>
        <Button size="md" h={40} radius="xl" color="#075985">
          Request a Demo
        </Button>
      </Group>
    </Group>
  );
};

export default NavbarComponent;
