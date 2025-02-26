import { useEffect, useMemo, useState } from 'react';
import { AgCharts } from 'ag-charts-react';
import {
  AgBarSeriesOptions,
  AgChartOptions,
  AgLineSeriesOptions,
  AgCategoryAxisOptions,
  AgNumberAxisOptions,
} from 'ag-charts-community';
import { useSalesStore } from '@/store/salesStore';

export const SalesChart = () => {
  const [options, setOptions] = useState<AgChartOptions>({
    data: [],
    series: [
      {
        type: 'bar',
        xKey: 'name',
        yKey: 'price',
      } as AgBarSeriesOptions,
      { type: 'line', xKey: 'name', yKey: 'average' } as AgLineSeriesOptions,
    ],
    axes: [
      {
        type: 'category',
        position: 'bottom',
      } as AgCategoryAxisOptions,
      {
        type: 'number',
        position: 'left',
        keys: ['price'],
      } as AgNumberAxisOptions,
      // Use right axis for 'avgTemp' series
      {
        type: 'number',
        position: 'right',
        keys: ['average'],
      } as AgNumberAxisOptions,
    ],
  });

  const { items } = useSalesStore();

  const formattedChartData = useMemo(() => {
    return items
      .map(({ price, rating: { average }, name }) => ({
        price,
        average,
        name,
      }))
      .sort((a, b) => a.average - b.average)
      .slice(0, 10);
  }, [items]);

  useEffect(() => {
    setOptions({ ...options, data: formattedChartData });
  }, [formattedChartData]);

  return <AgCharts options={options} />;
};
