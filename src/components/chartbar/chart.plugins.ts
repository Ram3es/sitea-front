import { Plugin } from 'chart.js';
import { COLORS } from '@styles/colors';

export const canvasBcgColor: Plugin = {
  id: 'customCanvasBackgroundColor',
  beforeDraw: (chart, args, options) => {
    const { ctx } = chart;
    ctx.save();
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = (options.color as string) || COLORS.white;
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  },
};
