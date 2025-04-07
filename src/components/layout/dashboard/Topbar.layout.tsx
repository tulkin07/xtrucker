import classes from './styles/Topbar.module.scss';
import { useNavigate } from 'react-router-dom';
import { ActionIcon, Flex, Group, Text, TextInput } from '@mantine/core';
import Icon from '@/components/icons/Icon.component';
import NotificationPopover from './extra-components/Notification.popover';
import PopoverComponent from './extra-components/Popover.component';
import ProfilePopover from './extra-components/Profile.popover';

type TopbarLayoutProps = {
  title: string;
};

const TopbarLayout: React.FC<TopbarLayoutProps> = (props) => {
  const navigate = useNavigate();
  return (
    <Group
      justify="space-between"
      align="center"
      className={classes.topbar_wrapper}
      w="calc(100% - 321px)"
    >
      <Text fz={20} fw={700} lh="140%">
        {props.title}
      </Text>
      <Flex className={classes.topbar_searchbar}>
        <TextInput
          size="sm"
          variant="default"
          placeholder="Search for anything..."
          miw={278}
          h={36}
          classNames={{ input: classes.search_input }}
          radius="6px 0 0 6px"
        />
        <ActionIcon
          size="lg"
          variant="outline"
          color="#E5E7EB"
          h={36}
          className={classes.search_btn}
        >
          <Icon icon="i_search" width="16px" height="16px" />
        </ActionIcon>
      </Flex>
      <Group align="center">
        <PopoverComponent
          popover={{ position: 'bottom-end', shadow: 'md' }}
          dropdown={{
            children: <NotificationPopover />,
            p: 0,
            miw: 480,
            styles: {
              dropdown: {
                borderRadius: '12px',
              },
            },
          }}
        >
          <ActionIcon variant="outline" color="#E4E4E7" radius={8} size="lg">
            <Icon width="20px" height="20px" icon="i_notification" />
          </ActionIcon>
        </PopoverComponent>
        <ActionIcon
          component="a"
          href="/dashboard/settings/personal-info"
          variant="outline"
          color="#E4E4E7"
          radius={8}
          size="lg"
          onClick={(e) => {
            e.preventDefault();
            navigate('/dashboard/settings/personal-info');
          }}
        >
          <Icon width="20px" height="20px" icon="i_settings" />
        </ActionIcon>
        <ActionIcon variant="outline" color="#E4E4E7" radius={8} size="lg">
          <Icon width="20px" height="20px" icon="i_qmessage" />
        </ActionIcon>
        <PopoverComponent
          popover={{ position: 'bottom-end', shadow: 'md' }}
          dropdown={{
            children: <ProfilePopover />,
            p: 0,
            miw: 216,
            styles: {
              dropdown: {
                borderRadius: '12px',
              },
            },
          }}
        >
          <ActionIcon variant="outline" color="#E4E4E7" radius={8} size="lg">
            <Icon width="20px" height="20px" icon="i_profile" />
          </ActionIcon>
        </PopoverComponent>
      </Group>
    </Group>
  );
};

export default TopbarLayout;
