import { useState } from 'react';
import classes from './style.module.scss';
import { Button, FloatingIndicator, Group, Stack, Tabs, Text } from '@mantine/core';
import Icon from '@/components/icons/Icon.component';
import NotificationCardComponent from './Notification.card.component';

const NotificationPopover = () => {
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [value, setValue] = useState<string | null>('1');
  const [controlsRefs, setControlsRefs] = useState<Record<string, HTMLButtonElement | null>>({});
  const setControlRef = (val: string) => (node: HTMLButtonElement) => {
    controlsRefs[val] = node;
    setControlsRefs(controlsRefs);
  };
  return (
    <Stack gap={0} style={{ borderRadius: '16px', overflow: 'hidden' }} pos="relative">
      <Group justify="space-between" bg="#182632" p="26px 27px 40px 27px">
        <Text c="#fff" fz={20} fw={700} lh="140%">
          Notifications
        </Text>
        <Button
          radius="md"
          size="xs"
          leftSection={<Icon icon="I_double_check" color="#14B8A6" />}
          variant="subtle"
          color="teal.4"
        >
          Mark as read
        </Button>
      </Group>
      <Tabs variant="none" value={value} onChange={setValue}>
        <Tabs.List ref={setRootRef} className={classes.list}>
          <Tabs.Tab value="1" ref={setControlRef('1')} className={classes.tab}>
            System
          </Tabs.Tab>
          <Tabs.Tab value="2" ref={setControlRef('2')} className={classes.tab}>
            Loads
          </Tabs.Tab>
          <Tabs.Tab value="3" ref={setControlRef('3')} className={classes.tab}>
            Updates
          </Tabs.Tab>

          <FloatingIndicator
            target={value ? controlsRefs[value] : null}
            parent={rootRef}
            className={classes.indicator}
          />
        </Tabs.List>

        <Tabs.Panel className={classes.tab_panel} mih={400} value="1">
          <NotificationCardComponent />
          <NotificationCardComponent />
          <NotificationCardComponent />
          <NotificationCardComponent />
          <NotificationCardComponent />
          <NotificationCardComponent />
        </Tabs.Panel>
        <Tabs.Panel className={classes.tab_panel} mih={400} value="2">
          <NotificationCardComponent />
          <NotificationCardComponent />
          <NotificationCardComponent />
          <NotificationCardComponent />
          <NotificationCardComponent />
          <NotificationCardComponent />
        </Tabs.Panel>
        <Tabs.Panel className={classes.tab_panel} mih={400} value="3">
          <NotificationCardComponent />
          <NotificationCardComponent />
          <NotificationCardComponent />
          <NotificationCardComponent />
          <NotificationCardComponent />
          <NotificationCardComponent />
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
};

export default NotificationPopover;
