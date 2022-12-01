import styled from 'styled-components';
import { Media } from '@styles/media';

export const ProfileStyles = {
  Container: styled.div`
    padding: 20px 60px;

    ${Media.tablet`
    padding: 20px;
    `}

    ${Media.mobile`
    padding: 0
    `}
  `,
  RowWrapper: styled.div`
    display: flex;
    align-items: center;
    padding: 10px;

    ${Media.mobile`
    padding: 10px 0;
    `}
  `,
  Title: styled.div`
    min-width: 140px;
    padding: 5px;
    font-size: 18px;
    font-weight: 600;

    ${Media.mobile`
    min-width: 90px;
    font-size: 16px;
    `}
  `,
  Row: styled.div`
    word-break: break-all;
    font-size: 18px;
    font-weight: 600;

    ${Media.mobile`
    font-size: 14px;
    `}
  `,
  BtnWrapper: styled.div`
    margin-left: 10px;
  `,
};
