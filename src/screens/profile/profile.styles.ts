import styled from 'styled-components';
import { Media } from '@styles/media';

export const ProfileStyles = {
  Container: styled.div`
    padding: 20px 60px;

    ${Media.tablet`
    padding: 20px;
    `}
  `,
  RowWrapper: styled.div`
    display: flex;
    padding: 10px;
  `,
  Title: styled.div`
    width: 140px;
    padding: 5px;
    font-size: 18px;
    font-weight: 600;
  `,
};
