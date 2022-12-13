import { COLORS } from '@styles/colors';
import { FONTS } from '@styles/fonts';
import { Media } from '@styles/media';
import styled from 'styled-components';

export const HeaderStyles = {
  Wrapper: styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    ${Media.mobile`
    flex-direction:column;
    padding: 10px 0;
    margin: 0;
  
    button {
      min-width: 100px;
      margin-left: auto;
    }

    `}
  `,
  Title: styled.div`
    font-family: ${FONTS.productSans};
    font-style: normal;
    font-size: 24px;
    font-weight: 700;
    color: ${COLORS.black};
  `,

  UserInfoWrapper: styled.div`
    display: flex;

    span:first-child {
      font-size: 18px;
      margin: 0 10px;
    }
  `,

  UserInfo: styled.span`
    color: ${COLORS.textGreen};

    font-size: 18px;

    ${Media.mobile`
    
    font-size: 16px;
    word-break: break-all;
    `}
  `,
};
