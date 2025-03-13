import React, { useRef, useState } from 'react';
import { IconClock } from '@tabler/icons-react';
import { ActionIcon, Badge, Box, Flex, Grid, Group, Stack, TextInput } from '@mantine/core';
import { DatePickerInput, TimeInput } from '@mantine/dates';
import Icon from '../icons/Icon.component';

// Types for our components
export type TimeSlot = {
  from: string;
  to: string;
};

export type LocationType = 'pickup' | 'stop' | 'dropoff';

export type TimelineItemProps = {
  locationLabel: string;
  locationType: LocationType;
  date: Date;
  timeSlot: TimeSlot;
  addressPlaceholder?: string;
  actionButton?: {
    label: string;
    onClick: () => void;
  };
  isActive?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
};

export type TimelineProps = {
  currentLocation?: string;
  items: TimelineItemProps[];
  onAddressChange?: (address: string, index: number) => void;
  onDateChange?: (date: Date, index: number) => void;
  onTimeChange?: (timeSlot: TimeSlot, index: number) => void;
};

// The TimelineItem component
const TimelineItem: React.FC<TimelineItemProps & { index: number }> = ({
  locationLabel,
  date,
  addressPlaceholder = 'enter address',
  actionButton,
  isFirst,
  isLast,
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);
  const [hovered, setHovered] = useState(false);

  const pickerControl = (
    <ActionIcon variant="subtle" color="gray" onClick={() => ref.current?.showPicker()}>
      <IconClock size={16} stroke={1.5} />
    </ActionIcon>
  );
  const pickerControl2 = (
    <ActionIcon variant="subtle" color="gray" onClick={() => ref2.current?.showPicker()}>
      <IconClock size={16} stroke={1.5} />
    </ActionIcon>
  );
  return (
    <Flex pos="relative" gap={8}>
      <Box pos="relative" w={17}>
        {isLast ? (
          <Icon
            icon="i_location"
            color="#EF4444"
            width="16px"
            height="16px"
            style={{ position: 'absolute', left: 0.5, top: '35px' }}
          />
        ) : (
          <Box
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ cursor: 'grab' }}
          >
            {hovered ? (
              <Icon
                icon="i_drag_indicator"
                width="16px"
                height="16px"
                style={{ position: 'absolute', left: 0.5, top: '35px' }}
              />
            ) : (
              <Box
                w={9.6}
                h={9.6}
                style={{
                  borderRadius: '50%',
                  border: '1.6px solid var(--mantine-color-gray-5)',
                  position: 'absolute',
                  left: '4px',
                  top: '38px',
                }}
              />
            )}
          </Box>
        )}
        {!isLast && (
          <Icon
            icon="i_border"
            color="#E5E7EB"
            width="1px"
            height="61.33px"
            style={{ position: 'absolute', left: '8px', top: '48px' }}
          />
        )}
      </Box>
      <Grid flex={1} mb={isLast ? 0 : 12}>
        <Grid.Col span={5}>
          <TextInput
            placeholder={addressPlaceholder}
            label={locationLabel}
            style={{ flex: 1 }}
            styles={{
              root: { borderRadius: actionButton ? '4px 0 0 4px' : 4 },
              input: { height: 36 },
            }}
            radius={6}
            rightSection={
              !isFirst && (
                <Group display="flex" justify="center" mr={10}>
                  <Badge
                    color="#BFDBFE"
                    bg="#EFF6FF"
                    c="#1D4ED8"
                    variant="outline"
                    radius={6}
                    p="2.5px 8px"
                    w={35}
                  >
                    PU
                  </Badge>
                </Group>
              )
            }
          />
        </Grid.Col>
        {!isFirst && (
          <>
            <Grid.Col span={3}>
              <DatePickerInput
                value={date}
                valueFormat="DD/MM/YYYY"
                label="Date"
                h={36}
                w={158}
                rightSection={
                  <ActionIcon variant="subtle">
                    <Icon icon="i_calendar" width="20px" height="20px" />
                  </ActionIcon>
                }
                styles={{
                  input: {
                    fontSize: '14px',
                    lineHeight: '140%',
                    fontWeight: 400,
                  },
                }}
              />
            </Grid.Col>
            <Grid.Col span={2}>
              <TimeInput label="From" ref={ref} rightSection={pickerControl} />
            </Grid.Col>
            <Grid.Col span={2}>
              <TimeInput label="To" ref={ref2} rightSection={pickerControl2} />
            </Grid.Col>
          </>
        )}
      </Grid>
    </Flex>
  );
};

// The main Timeline component
const Timeline: React.FC<TimelineProps> = ({
  //   currentLocation,
  items,
  //   onAddressChange,
  //   onDateChange,
  //   onTimeChange,
}) => {
  return (
    <Box>
      <Stack gap={0}>
        {items.map((item, index) => (
          <TimelineItem
            key={index}
            {...item}
            index={index}
            isFirst={index === 0}
            isLast={index === items.length - 1}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default Timeline;
