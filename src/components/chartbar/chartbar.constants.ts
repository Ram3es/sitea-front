import { TooltipItem } from 'chart.js';

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'SITYEA - Statistic',
      font: { size: 22 },
    },
    legend: {
      labels: {
        font: { size: 16 },
      },
    },
    tooltip: {
      callbacks: {
        label: function (context: TooltipItem<'bar'>) {
          const labels = context.dataset.label;
          const item = context.dataset.data[context.dataIndex];
          return `${labels}: ${item} mins`;
        },
      },
    },

    customCanvasBackgroundColor: {
      color: 'white',
    },
  },
  maintainAspectRatio: false,
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },

  scales: {
    x: {
      stacked: true,
      ticks: {
        color: 'black',
        font: { size: 14 },
      },
    },
    y: {
      stacked: true,
      ticks: {
        color: 'black',
        font: { size: 14 },
      },
      title: {
        display: true,
        text: ' Minutes',
        font: { size: 14 },
      },
    },
  },
};
