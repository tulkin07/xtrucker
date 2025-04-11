import { ActionIcon, Button, Group, Text } from '@mantine/core';
import { IRole } from '@/interfaces';
import Icon from '../icons/Icon.component';
import BaseAction from './Base.action';

type RoleActionsProps = {
  items: Record<keyof IRole, unknown>[];
  openEdit: () => void;
  clearFields: () => void;
};

const RoleActions: React.FC<RoleActionsProps> = (props) => {
  return (
    <BaseAction>
      <Group gap={8}>
        <ActionIcon color="zinc.1" radius="xl" onClick={props.clearFields}>
          <Icon icon="i_close" width="16px" height="16px" color="#6B7280" />
        </ActionIcon>
        <Text c="#6B7280" fz={14} fw={400} lh="20px">
          {props.items.length} selected
        </Text>
      </Group>
      <Group gap={8}>
        <Button
          fz={12}
          lh="140%"
          fw={400}
          px={8}
          bg="#fff"
          c="zinc.9"
          h={33}
          radius={8}
          leftSection={
            <Icon
              icon="i_paper_airplane"
              width="16px"
              height="16px"
              color="var(--mantine-color-gray-8)"
            />
          }
        >
          Send invite
        </Button>
        {props.items.length === 1 && (
          <Button
            fz={12}
            lh="140%"
            fw={400}
            px={8}
            bg="#fff"
            c="zinc.9"
            h={33}
            radius={8}
            leftSection={
              <Icon
                icon="i_pencil"
                width="16px"
                height="16px"
                color="var(--mantine-color-gray-8)"
              />
            }
            onClick={props.openEdit}
          >
            Edit information
          </Button>
        )}
        <Button
          fz={12}
          lh="140%"
          fw={400}
          px={8}
          bg="#fff"
          c="zinc.9"
          h={33}
          radius={8}
          leftSection={
            <Icon
              icon="i_trash_line"
              width="16px"
              height="16px"
              color="var(--mantine-color-gray-8)"
            />
          }
        >
          Delete user
        </Button>
      </Group>
    </BaseAction>
  );
};

export default RoleActions;
