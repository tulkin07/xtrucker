import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Collapse, Group, Stack, Text } from '@mantine/core';
import Icon from '@/components/icons/Icon.component';

type Link = {
  label: string;
  path: string;
  icon: string;
  children?: Link[];
};

type NavSectionProps = {
  title: string;
  links: Link[];
};

const NavSection: React.FC<NavSectionProps> = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  // Check if a path or any of its children is active
  const isActive = (link: Link): boolean => {
    if (location.pathname === link.path) {
      return true;
    }
    if (link.children) {
      return link.children.some((child) => isActive(child));
    }
    return false;
  };

  // Toggle the open state of a nested section
  const toggleSection = (path: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [path]: !prev[path],
    }));
  };

  // Initialize active parent sections on component mount
  useEffect(() => {
    const initialOpenSections: Record<string, boolean> = {};

    const checkAndOpenParents = (links: Link[]) => {
      links.forEach((link) => {
        if (link.children) {
          if (link.children.some((child) => isActive(child))) {
            initialOpenSections[link.path] = true;
          }
          checkAndOpenParents(link.children);
        }
      });
    };

    checkAndOpenParents(props.links);
    setOpenSections(initialOpenSections);
  }, [location.pathname]); // Re-run when path changes

  // Render a single navigation item (either with children or without)
  const renderNavItem = (item: Link, depth = 0) => {
    const active = isActive(item);
    const hasChildren = item.children && item.children.length > 0;
    const isOpen = openSections[item.path] || false;

    return (
      <Stack key={item.path} gap={2} style={{ paddingLeft: depth > 0 ? `${depth * 12}px` : 0 }}>
        <Button
          styles={{
            inner: {
              justifyContent: 'space-between',
            },
            root: {
              padding: hasChildren ? '8px 12px' : undefined,
            },
          }}
          radius={6}
          size="sm"
          rightSection={
            hasChildren ? (
              <div
                style={{
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon
                  icon="i_chevron_up"
                  width="16px"
                  height="16px"
                  color="var(--mantine-color-slate-9)"
                />
              </div>
            ) : null
          }
          variant={active && !hasChildren ? 'filled' : 'subtle'}
          color={active && !hasChildren ? '#F5F5F4' : 'gray'}
          component="a"
          href={hasChildren ? '#' : item.path}
          onClick={(e) => {
            e.preventDefault();
            if (hasChildren) {
              toggleSection(item.path);
            } else {
              navigate(item.path);
            }
          }}
        >
          <Group gap={8} align="center">
            <Icon icon={item.icon} width="20px" height="20px" />
            <Text fz={14} lh="140%" fw={400} c="#18181B">
              {item.label}
            </Text>
          </Group>
        </Button>

        {hasChildren && (
          <Collapse in={isOpen}>
            <Stack gap={2}>{item.children!.map((child) => renderNavItem(child, depth + 1))}</Stack>
          </Collapse>
        )}
      </Stack>
    );
  };

  return (
    <Stack gap={8}>
      <Text fz={12} lh="140%" c="#71717A">
        {props.title}
      </Text>
      <Stack gap={2}>{props.links.map((item) => renderNavItem(item))}</Stack>
    </Stack>
  );
};

export default NavSection;
