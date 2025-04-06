import { useMemo } from 'react';
import { AxisOptions, Chart } from 'react-charts';
// import ResizableBoxComponent from '../Resizeable.box';
import useChartConfig from '../useDemoConfig.hook';

const AreaChart = () => {
  const { data } = useChartConfig({
    series: 3,
    dataType: 'time',
    count: 5,
    elementType: 'area',
  });

  const primaryAxis = useMemo<AxisOptions<(typeof data)[number]['data'][number]>>(
    () => ({
      getValue: (datum) => datum.primary as Date,
    }),
    []
  );

  const secondaryAxes = useMemo<AxisOptions<(typeof data)[number]['data'][number]>[]>(
    () => [
      {
        getValue: (datum) => datum.secondary,
        stacked: true,
        elementType: 'area',
      },
    ],
    []
  );
  return (
    // <ResizableBoxComponent style={{ minWidth: '100%' }}>
    <Chart
      options={{
        data,
        primaryAxis,
        secondaryAxes,
      }}
      style={{
        width: '100%',
        height: '260px',
      }}
    />
    // </ResizableBoxComponent>
  );
};

export default AreaChart;
