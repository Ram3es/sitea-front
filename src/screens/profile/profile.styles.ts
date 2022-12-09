import { COLORS } from '@styles/colors';
import styled from 'styled-components';
import { Media } from '@styles/media';

export const ProfileStyles = {
  Container: styled.div`
    width: fit-content;
    padding: 20px 60px 20px 20px;
    border: 1px solid black;
    border-radius: 20px;
    background-color: ${COLORS.violet};
    margin-top: 50px;

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
    width: 200px;
    padding: 5px;
    font-size: 22px;
    font-weight: 700;

    ${Media.mobile`
    width: 90px;
    font-size: 16px;

    `}
  `,
  Row: styled.div`
    word-break: break-all;
    font-size: 18px;
    font-weight: 600;
    margin-left: 10px;

    ${Media.mobile`
    font-size: 14px;
    `}
  `,
  BtnWrapper: styled.div`
    margin-left: 10px;

    button {
      min-width: 280px;
      color: ${COLORS.white};
      background-color: ${COLORS.black};
    }
  `,
};
