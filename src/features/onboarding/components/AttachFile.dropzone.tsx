import { IconUpload, IconX } from '@tabler/icons-react';
import { Button, Group, Text } from '@mantine/core';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import Icon from '@/components/icons/Icon.component';

interface AttachFileDropzoneProps extends DropzoneProps {
  title: string;
}

const AttachFileDropzone: React.FC<AttachFileDropzoneProps> = (props) => {
  return (
    <Dropzone
      maxSize={5 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
      styles={{ root: { borderColor: '#E5E7EB' } }}
      radius={6}
      p="8px 8px 8px 12px"
      {...props}
    >
      <Group justify="space-between" style={{ pointerEvents: 'none', flexDirection: 'row' }}>
        <Group gap={8}>
          <Dropzone.Accept>
            <IconUpload size={52} color="var(--mantine-color-blue-6)" stroke={1.5} />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX size={52} color="var(--mantine-color-red-6)" stroke={1.5} />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <Icon icon="i_file" color="#111827" />
          </Dropzone.Idle>
          <Text fz={16} lh="140%" fw={400} c="#9CA3AF">
            {props.title}
          </Text>
        </Group>
        <Dropzone.Idle>
          <Button h={32} radius={8} color="sky.8">
            Upload
          </Button>
        </Dropzone.Idle>
      </Group>
    </Dropzone>
  );
};

export default AttachFileDropzone;
