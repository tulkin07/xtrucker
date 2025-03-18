import { useState } from 'react';
import classes from './styles.module.scss';
import { ActionIcon, Box, Group, Stack, Table, Text } from '@mantine/core';
import { useMouse } from '@mantine/hooks';
import Icon from '@/components/icons/Icon.component';

const CustomCalendarComponent = () => {
  const [showHourLine, setShowHourLine] = useState(false);
  const { ref, x, y } = useMouse();

  console.log(x, y, showHourLine);

  return (
    <>
      <Table
        withColumnBorders
        withRowBorders
        stickyHeader
        pos="relative"
        style={{
          borderColor: 'var(--mantine-color-gray-1)',
          boxShadow: 'none',
        }}
      >
        {showHourLine && (
          <Stack
            pos="absolute"
            left={`${x - 22}px`}
            top="0px"
            style={{ pointerEvents: 'none', zIndex: 100 }}
            justify="center"
            align="center"
            gap={0}
          >
            <Box
              w={44}
              h={23}
              bg="#E2001A"
              style={{
                borderRadius: '25px',
                border: '1px solid #CD0A0A',
                pointerEvents: 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text fw={400} fz={12} lh="140%" c="#fff">
                4:40
              </Text>
            </Box>
            <Box
              h="calc(100vh - 163px)"
              w="1px"
              style={{ border: '1px solid #E2001A', pointerEvents: 'none' }}
            />
          </Stack>
        )}
        <Table.Thead style={{ borderColor: 'var(--mantine-color-gray-1)' }} ref={ref}>
          <Table.Tr style={{ borderColor: 'var(--mantine-color-gray-1)' }}>
            <Table.Th bg="neutral.0" className={classes.table_head_data}>
              <Group align="center" justify="space-between" wrap="nowrap">
                <Text component="span" fz={12} lh="140%" c="zinc.4" style={{ borderRadius: '4px' }}>
                  Driver
                </Text>
                <ActionIcon variant="subtle" size="xs">
                  <Icon icon="i_filter_top" width="16px" height="16px" color="#71717A" />
                </ActionIcon>
              </Group>
            </Table.Th>
            <Table.Th
              onMouseEnter={() => setShowHourLine(true)}
              onMouseLeave={() => setShowHourLine(false)}
              bg="neutral.0"
              className={classes.table_head_data_split_hours}
            >
              <Group align="center" justify="space-between">
                <Text component="span" fz={12} lh="140%" c="zinc.4">
                  Mon 29
                </Text>
                <ActionIcon variant="subtle" size="xs">
                  <Icon icon="i_filter_top" width="16px" height="16px" color="#71717A" />
                </ActionIcon>
              </Group>
            </Table.Th>
            <Table.Th
              onMouseEnter={() => setShowHourLine(true)}
              onMouseLeave={() => setShowHourLine(false)}
              bg="neutral.0"
              className={classes.table_head_data_split_hours}
            >
              <Group align="center" justify="space-between">
                <Text component="span" fz={12} lh="140%" c="zinc.4">
                  Tue 30
                </Text>
                <ActionIcon variant="subtle" size="xs">
                  <Icon icon="i_filter_top" width="16px" height="16px" color="#71717A" />
                </ActionIcon>
              </Group>
            </Table.Th>
            <Table.Th
              onMouseEnter={() => setShowHourLine(true)}
              onMouseLeave={() => setShowHourLine(false)}
              bg="neutral.0"
              className={classes.table_head_data_split_hours}
            >
              <Group align="center" justify="space-between">
                <Text component="span" fz={12} lh="140%" c="zinc.4">
                  Wed 31
                </Text>
                <ActionIcon variant="subtle" size="xs">
                  <Icon icon="i_filter_top" width="16px" height="16px" color="#71717A" />
                </ActionIcon>
              </Group>
            </Table.Th>
            <Table.Th
              onMouseEnter={() => setShowHourLine(true)}
              onMouseLeave={() => setShowHourLine(false)}
              bg="neutral.0"
              className={classes.table_head_data_split_hours}
            >
              <Group align="center" justify="space-between">
                <Text component="span" fz={12} lh="140%" c="zinc.4">
                  Thu 1
                </Text>
                <ActionIcon variant="subtle" size="xs">
                  <Icon icon="i_filter_top" width="16px" height="16px" color="#71717A" />
                </ActionIcon>
              </Group>
            </Table.Th>
            <Table.Th
              onMouseEnter={() => setShowHourLine(true)}
              onMouseLeave={() => setShowHourLine(false)}
              bg="neutral.0"
              className={classes.table_head_data_split_hours}
            >
              <Group align="center" justify="space-between">
                <Text component="span" fz={12} lh="140%" c="zinc.4">
                  Fri 2
                </Text>
                <ActionIcon variant="subtle" size="xs">
                  <Icon icon="i_filter_top" width="16px" height="16px" color="#71717A" />
                </ActionIcon>
              </Group>
            </Table.Th>
            <Table.Th
              onMouseEnter={() => setShowHourLine(true)}
              onMouseLeave={() => setShowHourLine(false)}
              bg="neutral.0"
              className={classes.table_head_data_split_hours}
            >
              <Group align="center" justify="space-between">
                <Text component="span" fz={12} lh="140%" c="zinc.4">
                  Sat 3
                </Text>
                <ActionIcon variant="subtle" size="xs">
                  <Icon icon="i_filter_top" width="16px" height="16px" color="#71717A" />
                </ActionIcon>
              </Group>
            </Table.Th>
            <Table.Th
              onMouseEnter={() => setShowHourLine(true)}
              onMouseLeave={() => setShowHourLine(false)}
              bg="neutral.0"
              className={classes.table_head_data_split_hours}
            >
              <Group align="center" justify="space-between">
                <Text component="span" fz={12} lh="140%" c="zinc.4">
                  Sun 4
                </Text>
                <ActionIcon variant="subtle" size="xs">
                  <Icon icon="i_filter_top" width="16px" height="16px" color="#71717A" />
                </ActionIcon>
              </Group>
            </Table.Th>
            <Table.Th bg="neutral.0" className={classes.table_head_data}>
              <Group align="center" justify="space-between">
                <Text component="span" fz={12} lh="140%" c="zinc.4">
                  Total gross
                </Text>
                <ActionIcon variant="subtle" size="xs">
                  <Icon icon="i_filter_top" width="16px" height="16px" color="#71717A" />
                </ActionIcon>
              </Group>
            </Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td className={classes.table_tbody_data}>
              <Text fz={12} fw={400} lh="140%" c="blue.3" component="span">
                Lorri Warf
              </Text>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack gap={2}>
                <Text
                  fz={16}
                  fw={700}
                  lh="140%"
                  c="blue.8"
                  style={{ whiteSpace: 'nowrap', textAlign: 'right' }}
                >
                  $2,736.10
                </Text>
                <Text
                  fz={12}
                  fw={400}
                  lh="140%"
                  c="blue.8"
                  style={{ whiteSpace: 'nowrap', textAlign: 'right' }}
                >
                  2.0/mile
                </Text>
              </Stack>
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td className={classes.table_tbody_data}>
              <Text fz={12} fw={400} lh="140%" c="blue.3" component="span">
                Lorri Warf
              </Text>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack gap={2}>
                <Text
                  fz={16}
                  fw={700}
                  lh="140%"
                  c="blue.8"
                  style={{ whiteSpace: 'nowrap', textAlign: 'right' }}
                >
                  $2,736.10
                </Text>
                <Text
                  fz={12}
                  fw={400}
                  lh="140%"
                  c="blue.8"
                  style={{ whiteSpace: 'nowrap', textAlign: 'right' }}
                >
                  2.0/mile
                </Text>
              </Stack>
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td className={classes.table_tbody_data}>
              <Text fz={12} fw={400} lh="140%" c="blue.3" component="span">
                Lorri Warf
              </Text>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack gap={2}>
                <Text
                  fz={16}
                  fw={700}
                  lh="140%"
                  c="blue.8"
                  style={{ whiteSpace: 'nowrap', textAlign: 'right' }}
                >
                  $2,736.10
                </Text>
                <Text
                  fz={12}
                  fw={400}
                  lh="140%"
                  c="blue.8"
                  style={{ whiteSpace: 'nowrap', textAlign: 'right' }}
                >
                  2.0/mile
                </Text>
              </Stack>
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td className={classes.table_tbody_data}>
              <Text fz={12} fw={400} lh="140%" c="blue.3" component="span">
                Lorri Warf
              </Text>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack gap={2}>
                <Text
                  fz={16}
                  fw={700}
                  lh="140%"
                  c="blue.8"
                  style={{ whiteSpace: 'nowrap', textAlign: 'right' }}
                >
                  $2,736.10
                </Text>
                <Text
                  fz={12}
                  fw={400}
                  lh="140%"
                  c="blue.8"
                  style={{ whiteSpace: 'nowrap', textAlign: 'right' }}
                >
                  2.0/mile
                </Text>
              </Stack>
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td className={classes.table_tbody_data}>
              <Text fz={12} fw={400} lh="140%" c="blue.3" component="span">
                Lorri Warf
              </Text>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack gap={2}>
                <Text
                  fz={16}
                  fw={700}
                  lh="140%"
                  c="blue.8"
                  style={{ whiteSpace: 'nowrap', textAlign: 'right' }}
                >
                  $2,736.10
                </Text>
                <Text
                  fz={12}
                  fw={400}
                  lh="140%"
                  c="blue.8"
                  style={{ whiteSpace: 'nowrap', textAlign: 'right' }}
                >
                  2.0/mile
                </Text>
              </Stack>
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td className={classes.table_tbody_data}>
              <Text fz={12} fw={400} lh="140%" c="blue.3" component="span">
                Lorri Warf
              </Text>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack gap={2}>
                <Text
                  fz={16}
                  fw={700}
                  lh="140%"
                  c="blue.8"
                  style={{ whiteSpace: 'nowrap', textAlign: 'right' }}
                >
                  $2,736.10
                </Text>
                <Text
                  fz={12}
                  fw={400}
                  lh="140%"
                  c="blue.8"
                  style={{ whiteSpace: 'nowrap', textAlign: 'right' }}
                >
                  2.0/mile
                </Text>
              </Stack>
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td className={classes.table_tbody_data}>
              <Text fz={12} fw={400} lh="140%" c="blue.3" component="span">
                Lorri Warf
              </Text>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack gap={2}>
                <Text
                  fz={16}
                  fw={700}
                  lh="140%"
                  c="blue.8"
                  style={{ whiteSpace: 'nowrap', textAlign: 'right' }}
                >
                  $2,736.10
                </Text>
                <Text
                  fz={12}
                  fw={400}
                  lh="140%"
                  c="blue.8"
                  style={{ whiteSpace: 'nowrap', textAlign: 'right' }}
                >
                  2.0/mile
                </Text>
              </Stack>
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td className={classes.table_tbody_data}>
              <Text fz={12} fw={400} lh="140%" c="blue.3" component="span">
                Lorri Warf
              </Text>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack gap={2}>
                <Text
                  fz={16}
                  fw={700}
                  lh="140%"
                  c="blue.8"
                  style={{ whiteSpace: 'nowrap', textAlign: 'right' }}
                >
                  $2,736.10
                </Text>
                <Text
                  fz={12}
                  fw={400}
                  lh="140%"
                  c="blue.8"
                  style={{ whiteSpace: 'nowrap', textAlign: 'right' }}
                >
                  2.0/mile
                </Text>
              </Stack>
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td className={classes.table_tbody_data}>
              <Text fz={12} fw={400} lh="140%" c="blue.3" component="span">
                Lorri Warf
              </Text>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack gap={2}>
                <Text
                  fz={16}
                  fw={700}
                  lh="140%"
                  c="blue.8"
                  style={{ whiteSpace: 'nowrap', textAlign: 'right' }}
                >
                  $2,736.10
                </Text>
                <Text
                  fz={12}
                  fw={400}
                  lh="140%"
                  c="blue.8"
                  style={{ whiteSpace: 'nowrap', textAlign: 'right' }}
                >
                  2.0/mile
                </Text>
              </Stack>
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td className={classes.table_tbody_data}>
              <Text fz={12} fw={400} lh="140%" c="blue.3" component="span">
                Lorri Warf
              </Text>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack gap={2}>
                <Text
                  fz={16}
                  fw={700}
                  lh="140%"
                  c="blue.8"
                  style={{ whiteSpace: 'nowrap', textAlign: 'right' }}
                >
                  $2,736.10
                </Text>
                <Text
                  fz={12}
                  fw={400}
                  lh="140%"
                  c="blue.8"
                  style={{ whiteSpace: 'nowrap', textAlign: 'right' }}
                >
                  2.0/mile
                </Text>
              </Stack>
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td className={classes.table_tbody_data}>
              <Text fz={12} fw={400} lh="140%" c="blue.3" component="span">
                Lorri Warf
              </Text>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack gap={2}>
                <Text
                  fz={16}
                  fw={700}
                  lh="140%"
                  c="blue.8"
                  style={{ whiteSpace: 'nowrap', textAlign: 'right' }}
                >
                  $2,736.10
                </Text>
                <Text
                  fz={12}
                  fw={400}
                  lh="140%"
                  c="blue.8"
                  style={{ whiteSpace: 'nowrap', textAlign: 'right' }}
                >
                  2.0/mile
                </Text>
              </Stack>
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td className={classes.table_tbody_data}>
              <Text fz={12} fw={400} lh="140%" c="blue.3" component="span">
                Lorri Warf
              </Text>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack gap={2}>
                <Text
                  fz={16}
                  fw={700}
                  lh="140%"
                  c="blue.8"
                  style={{ whiteSpace: 'nowrap', textAlign: 'right' }}
                >
                  $2,736.10
                </Text>
                <Text
                  fz={12}
                  fw={400}
                  lh="140%"
                  c="blue.8"
                  style={{ whiteSpace: 'nowrap', textAlign: 'right' }}
                >
                  2.0/mile
                </Text>
              </Stack>
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td className={classes.table_tbody_data}>
              <Text fz={12} fw={400} lh="140%" c="blue.3" component="span">
                Lorri Warf
              </Text>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack gap={2}>
                <Text
                  fz={16}
                  fw={700}
                  lh="140%"
                  c="blue.8"
                  style={{ whiteSpace: 'nowrap', textAlign: 'right' }}
                >
                  $2,736.10
                </Text>
                <Text
                  fz={12}
                  fw={400}
                  lh="140%"
                  c="blue.8"
                  style={{ whiteSpace: 'nowrap', textAlign: 'right' }}
                >
                  2.0/mile
                </Text>
              </Stack>
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td className={classes.table_tbody_data}>
              <Text fz={12} fw={400} lh="140%" c="blue.3" component="span">
                Lorri Warf
              </Text>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack gap={2}>
                <Text
                  fz={16}
                  fw={700}
                  lh="140%"
                  c="blue.8"
                  style={{ whiteSpace: 'nowrap', textAlign: 'right' }}
                >
                  $2,736.10
                </Text>
                <Text
                  fz={12}
                  fw={400}
                  lh="140%"
                  c="blue.8"
                  style={{ whiteSpace: 'nowrap', textAlign: 'right' }}
                >
                  2.0/mile
                </Text>
              </Stack>
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td className={classes.table_tbody_data}>
              <Text fz={12} fw={400} lh="140%" c="blue.3" component="span">
                Lorri Warf
              </Text>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack gap={2}>
                <Text
                  fz={16}
                  fw={700}
                  lh="140%"
                  c="blue.8"
                  style={{ whiteSpace: 'nowrap', textAlign: 'right' }}
                >
                  $2,736.10
                </Text>
                <Text
                  fz={12}
                  fw={400}
                  lh="140%"
                  c="blue.8"
                  style={{ whiteSpace: 'nowrap', textAlign: 'right' }}
                >
                  2.0/mile
                </Text>
              </Stack>
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td className={classes.table_tbody_data}>
              <Text fz={12} fw={400} lh="140%" c="blue.3" component="span">
                Lorri Warf
              </Text>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack gap={2}>
                <Text
                  fz={16}
                  fw={700}
                  lh="140%"
                  c="blue.8"
                  style={{ whiteSpace: 'nowrap', textAlign: 'right' }}
                >
                  $2,736.10
                </Text>
                <Text
                  fz={12}
                  fw={400}
                  lh="140%"
                  c="blue.8"
                  style={{ whiteSpace: 'nowrap', textAlign: 'right' }}
                >
                  2.0/mile
                </Text>
              </Stack>
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td className={classes.table_tbody_data}>
              <Text fz={12} fw={400} lh="140%" c="blue.3" component="span">
                Lorri Warf
              </Text>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack
                gap={4}
                p="2px 4px"
                pos="absolute"
                top={7}
                bg="blue.0"
                style={{ borderRadius: '4px' }}
              >
                <Text fz={12} fw={600} lh="140%" c="blue.8" style={{ whiteSpace: 'nowrap' }}>
                  AXLE 11197763
                </Text>
                <Text fz={12} fw={400} lh="140%" c="blue.8">
                  $ 12000
                </Text>
              </Stack>
            </Table.Td>
            <Table.Td className={classes.table_tbody_data_split_hours}>
              <Stack gap={2}>
                <Text
                  fz={16}
                  fw={700}
                  lh="140%"
                  c="blue.8"
                  style={{ whiteSpace: 'nowrap', textAlign: 'right' }}
                >
                  $2,736.10
                </Text>
                <Text
                  fz={12}
                  fw={400}
                  lh="140%"
                  c="blue.8"
                  style={{ whiteSpace: 'nowrap', textAlign: 'right' }}
                >
                  2.0/mile
                </Text>
              </Stack>
            </Table.Td>
          </Table.Tr>
        </Table.Tbody>
        <Table.Tfoot
          pos="sticky"
          bottom={0}
          bg="#fff"
          style={{ borderTop: '1px solid var(--mantine-color-gray-1)' }}
        >
          <Table.Tr style={{ borderTop: '1px solid var(--mantine-color-gray-1)' }}>
            <Table.Td className={classes.table_tfoot_data}>
              <Text fz={12} fw={400} lh="140%" c="blue.3" component="span">
                All
              </Text>
            </Table.Td>
            <Table.Td className={classes.table_tfoot_data} colSpan={7} />
            <Table.Td className={classes.table_tfoot_data}>
              <Text fz={14} fw={600} lh="140%" c="blue.8" style={{ textAlign: 'right' }}>
                $128 000
              </Text>
            </Table.Td>
          </Table.Tr>
        </Table.Tfoot>
      </Table>
    </>
  );
};

export default CustomCalendarComponent;
