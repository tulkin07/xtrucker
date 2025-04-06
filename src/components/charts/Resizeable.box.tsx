import React from 'react';
import { ResizableBox as ReactResizableBox } from 'react-resizable';

import 'react-resizable/css/styles.css';

type ResizableBoxProps = {
  width?: number;
  height?: number;
  resizable?: boolean;
  style?: React.CSSProperties;
  className?: string;
} & React.PropsWithChildren;

const ResizableBoxComponent: React.FC<ResizableBoxProps> = (props) => {
  const { children, width = 600, height = 260, resizable = true, style = {}, className } = props;
  return (
    <>
      <div
        style={{
          display: 'inline-block',
          width: 'auto',
          background: 'white',
          borderRadius: '0.5rem',
          ...style,
        }}
      >
        {resizable ? (
          <ReactResizableBox width={width} height={height} style={{ minWidth: '100%' }}>
            <div
              style={{
                width: '100%',
                height: '100%',
                minWidth: '100%',
              }}
              className={className}
            >
              {children}
            </div>
          </ReactResizableBox>
        ) : (
          <div
            style={{
              width: `${width}px`,
              height: `${height}px`,
            }}
            className={className}
          >
            {children}
          </div>
        )}
      </div>
    </>
  );
};

export default ResizableBoxComponent;
