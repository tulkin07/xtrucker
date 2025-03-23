import classes from './BottomBreadcrumb.module.scss';
import { useNavigate } from 'react-router-dom';
import { Anchor, Breadcrumbs, Group, Text } from '@mantine/core';

type BottomBreadcrumbComponentProps = {
  items: { title: string; href: string }[];
};

const BottomBreadcrumbComponent: React.FC<BottomBreadcrumbComponentProps> = (props) => {
  const { items } = props;
  const navigate = useNavigate();
  const breadCrumbs = items.map((item, index) => {
    if (item.href === '#') {
      return (
        <Text fz={12} lh="140%" fw={400} key={index} c="#18181B">
          {item.title}
        </Text>
      );
    }
    return (
      <Anchor
        fz={12}
        lh="140%"
        fw={400}
        href={item.href}
        key={index}
        c="#71717A"
        onClick={(e) => {
          e.preventDefault();
          navigate(item.href);
        }}
      >
        {item.title}
      </Anchor>
    );
  });
  return (
    <Group align="center" justify="start" className={classes.breadCrumb_wrapper} left="1px">
      <Breadcrumbs
        styles={{
          separator: {
            fontSize: '12px',
            lineHeight: '140%',
            color: '#71717A',
          },
        }}
      >
        {breadCrumbs}
      </Breadcrumbs>
    </Group>
  );
};

export default BottomBreadcrumbComponent;
