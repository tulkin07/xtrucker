import { IconUpload, IconX } from '@tabler/icons-react';
import { Stack, Text } from '@mantine/core';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import Icon from '../icons/Icon.component';

const LoadCreateCropzone: React.FC<Partial<DropzoneProps>> = (props) => {
  return (
    <Dropzone
      onDrop={(files) => console.log('accepted files', files)}
      onReject={(files) => console.log('rejected files', files)}
      maxSize={5 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
      styles={{
        root: {
          backgroundColor: 'var(--mantine-color-blue-0)',
          borderColor: 'var(--mantine-color-blue-3)',
          padding: 12,
          borderRadius: '8px',
        },
      }}
      {...props}
    >
      <Stack
        mih={123}
        style={{ pointerEvents: 'none' }}
        display="flex"
        justify="center"
        align="center"
        gap={20}
      >
        <Dropzone.Accept>
          <IconUpload size={52} color="var(--mantine-color-blue-6)" stroke={1.5} />
        </Dropzone.Accept>
        <Dropzone.Reject>
          <IconX size={52} color="var(--mantine-color-red-6)" stroke={1.5} />
        </Dropzone.Reject>
        <Dropzone.Idle>
          <Icon icon="i_file_add" width="32px" height="32px" color="var(--mantine-color-dimmed)" />
        </Dropzone.Idle>

        <Stack gap={8}>
          <Text fw={700} fz={16} c="zinc.9" style={{ textAlign: 'center' }}>
            Drag & drop Rate confirmation or{' '}
            <Text component="span" c="blue.5">
              Browse
            </Text>
          </Text>
          <Text fw={400} fz={12} c="zinc.4" style={{ textAlign: 'center' }}>
            Supported formats: PDF, Word
          </Text>
        </Stack>
      </Stack>
    </Dropzone>
  );
};

export { LoadCreateCropzone };
