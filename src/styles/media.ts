import { css } from 'styled-components';
import { FlattenInterpolation, ThemedStyledProps } from 'styled-components';

export type CSS<T = {}> = FlattenInterpolation<ThemedStyledProps<T, any>>;

export const SIZE = {
  xsMobile: '374px',
  sMobile: '400px',
  mobile: '600px',
  tablet: '768px',
  smallLandscape: '998px',
  landscape: '1180px',
  landscapeWreck: '1350px',
  inspector15: '1425px',
  desktop: '1500px',
  desktop1600: '1600px',
};

export const Media = {
  xsMobile: (payload: CSS) =>
    css`
      @media (max-width: ${SIZE.xsMobile}) {
        ${payload};
      }
    `,
  sMobile: (payload: CSS) =>
    css`
      @media (max-width: ${SIZE.sMobile}) {
        ${payload};
      }
    `,
  mobile: (payload: CSS) =>
    css`
      @media (max-width: ${SIZE.mobile}) {
        ${payload};
      }
    `,
  tablet: (payload: CSS) =>
    css`
      @media (max-width: ${SIZE.tablet}) {
        ${payload};
      }
    `,
  landscape: (payload: CSS) =>
    css`
      @media (max-width: ${SIZE.landscape}) {
        ${payload};
      }
    `,
  landscapeWreck: (payload: CSS) =>
    css`
      @media (max-width: ${SIZE.landscapeWreck}) {
        ${payload};
      }
    `,
  smallLandscape: (payload: CSS) =>
    css`
      @media (max-width: ${SIZE.smallLandscape}) {
        ${payload};
      }
    `,

  desktop: (payload: CSS) =>
    css`
      @media (min-width: ${SIZE.desktop}) {
        ${payload};
      }
    `,
  inspector15: (payload: CSS) =>
    css`
      @media (max-width: ${SIZE.inspector15}) {
        ${payload};
      }
    `,

  desktop1600: (payload: CSS) =>
    css`
      @media (min-width: ${SIZE.desktop1600}) {
        ${payload};
      }
    `,
};
