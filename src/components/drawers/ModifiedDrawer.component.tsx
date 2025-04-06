import React, { ReactNode } from 'react';
import { IconX } from '@tabler/icons-react';
import { Button, Drawer, Group, ScrollArea, Text, useMantineTheme } from '@mantine/core';

interface CustomDrawerProps {
  opened: boolean;
  onClose: () => void;
  title?: string;
  size?: string | number;
  position?: 'left' | 'right' | 'top' | 'bottom';
  overlayBlur?: number;
  closeOnClickOutside?: boolean;
  headerContent?: ReactNode;
  footerContent?: ReactNode;
  children: ReactNode;
}

function ModifiedDrawerComponent({
  opened,
  onClose,
  title = 'Drawer Title',
  size = 'md',
  position = 'right',
  closeOnClickOutside = true,
  headerContent,
  footerContent,
  children,
}: CustomDrawerProps) {
  const theme = useMantineTheme();

  // Default header content
  const defaultHeaderContent = (
    <Group
      align="center"
      gap="sm"
      justify="space-between"
      px={12}
      py={9}
      style={{
        borderBottom: `1px solid ${theme.colors.gray[2]}`,
      }}
    >
      <Text fz={16} fw={600} lh="140%">
        {title}
      </Text>
      <Button
        variant="subtle"
        color="gray"
        onClick={onClose}
        style={{ padding: 0, height: 28, width: 28 }}
      >
        <IconX size={18} />
      </Button>
    </Group>
  );

  // Default footer content
  const defaultFooterContent = (
    <Group
      pos="fixed"
      bottom={0}
      gap="sm"
      px={12}
      py={9}
      justify="end"
      w="100%"
      style={{
        borderTop: `1px solid ${theme.colors.gray[2]}`,
      }}
    >
      <Button size="md" h={40} radius={10} color="sky.8">
        Save
      </Button>
    </Group>
  );

  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      size={size}
      position={position}
      closeOnClickOutside={closeOnClickOutside}
      withCloseButton={false}
      trapFocus
      padding={0}
      zIndex={1000}
      styles={{
        body: {
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '100vh',
        },
      }}
    >
      {/* Header */}
      {headerContent || defaultHeaderContent}
      {/* Body with ScrollArea for content that might overflow */}
      <ScrollArea
        style={{
          flex: 1,
          padding: theme.spacing.md,
          maxHeight: 'calc(100vh )',
        }}
      >
        {children}
      </ScrollArea>

      {/* Footer */}
      {(footerContent || defaultFooterContent) && (footerContent || defaultFooterContent)}
    </Drawer>
  );
}

export default ModifiedDrawerComponent;
