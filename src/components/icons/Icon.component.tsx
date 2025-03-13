import { CSSProperties } from 'react';
import SvgColor from './SvgColor.component';

interface TypeProps {
  icon: string;
  path?: string;
  width?: string;
  height?: string;
  color?: string;
  style?: CSSProperties;
}

const Icon = ({
  icon,
  path = '/assets/icons/',
  width = '24px',
  height = '24px',
  color = '#030712',
  style = {},
}: TypeProps) => {
  return (
    <SvgColor src={`${path}${icon}.svg`} sx={{ width, height, color, ...style }} color={color} />
  );
};

export default Icon;
