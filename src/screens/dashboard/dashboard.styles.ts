import { Media } from '@styles/media';
import styled from 'styled-components';

export const DashboardStyles = {
  TotalStreight: styled.div`
    margin: 30px 0;
    font-size: 22px;
    font-weight: 600;
    padding: 10px;

    ${Media.mobile`
    margin: 30px 0 10px;
    font-size: 18px;
    `}
  `,
};
