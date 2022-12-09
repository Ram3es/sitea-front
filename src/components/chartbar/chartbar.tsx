import { FC } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js/auto';

import { options } from './chartbar.constants';
import { useChartBarState } from './chartbar.state';
import { canvasBcgColor } from './chart.plugins';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  canvasBcgColor
);

export interface IChartBarProps {
  results: IResult[] | undefined;
}

export const ChartBar: FC<IChartBarProps> = ({ results }) => {
  const { data } = useChartBarState(results);

  return <Bar data={data} options={options} />;
};
