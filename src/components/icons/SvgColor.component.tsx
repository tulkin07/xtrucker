import React, { forwardRef, Ref } from 'react';
import { Box } from '@mantine/core';

// ----------------------------------------------------------------------
interface TypeProps {
  src: string;
  sx?: object;
  color: string;
}

const SvgColor = forwardRef(({ src, sx, ...other }: React.PropsWithChildren<TypeProps>, ref) => {
  // Extract color from other props if present
  const { color, ...restProps } = other;

  return (
    <Box
      component="span"
      className="svg-color"
      ref={ref as Ref<HTMLSpanElement> | undefined}
      style={{
        width: 24,
        height: 24,
        display: 'inline-block',
        backgroundColor: color || 'currentColor', // Use explicit color prop
        mask: `url(${src}) no-repeat center / contain`,
        WebkitMask: `url(${src}) no-repeat center / contain`,
        ...sx, // Apply any custom styles last
      }}
      {...restProps}
    />
  );
});

export default SvgColor;
