import { COLORS } from '@styles/colors';
import { Media } from '@styles/media';
import styled from 'styled-components';

export const DashboardStyles = {
  Wrapper: styled.div`
    padding: 20px 40px;
  `,

  TotalStreight: styled.div`
    margin: 20px 0;
    font-size: 22px;
    font-weight: 600;
    padding: 10px;
    span {
      color: ${COLORS.textGreen};
    }

    ${Media.mobile`
    margin: 30px 0 10px;
    font-size: 18px;
    `}
  `,

  ChartWrapper: styled.div`
    position: relative;
    height: 400px;
    margin-right: 15px;

    ${Media.mobile`
    height: 300px;
    margin:0;
   
    `}
  `,
};
