import React, { forwardRef, Ref } from 'react';
import { Box } from '@mantine/core';

// ----------------------------------------------------------------------
interface TypeProps {
  src: string;
  sx?: object;
}

const SvgColor = forwardRef(({ src, sx, ...other }: React.PropsWithChildren<TypeProps>, ref) => (
  <Box
    component="span"
    className="svg-color"
    ref={ref as Ref<HTMLSpanElement> | undefined}
    style={{
      width: 24,
      height: 24,
      display: 'inline-block',
      bgcolor: 'currentColor',
      mask: `url(${src}) no-repeat center / contain`,
      WebkitMask: `url(${src}) no-repeat center / contain`,
      ...sx,
    }}
    {...other}
  />
));

export default SvgColor;
