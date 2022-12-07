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
    },
  },
};
