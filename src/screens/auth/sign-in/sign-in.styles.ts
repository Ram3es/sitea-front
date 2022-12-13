import { COLORS } from '@styles/colors';
import { FONTS } from '@styles/fonts';
import { Media } from '@styles/media';
import styled from 'styled-components';

export const SignInStyles = {
  Section: styled.div`
    display: flex;
    justify-content: center;

    min-height: 100vh;
    padding: 10px;
    position: relative;

    ${Media.mobile`
    align-items: center;
    `}
  `,
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: ${FONTS.productSans};
  `,

  Wrapper: styled.div`
    width: 540px;
    border: 1px solid ${COLORS.black};
    border-radius: 20px;
    padding: 30px;
    background-color: ${COLORS.green};

    ${Media.mobile`
    width:100% ;
    `}
  `,
  h1: styled.h1`
    text-align: center;
    font-size: 52px;
    font-weight: 800;
    margin: 35px 0 20px;

    span {
      font-weight: 400;
      color: ${COLORS.white};
      -webkit-text-stroke: 0.35mm ${COLORS.black};
    }
  `,
  Label: styled.p`
    font-weight: 400;
    text-align: center;
    font-size: 16px;
    line-height: 22px;
  `,
  ButtonWrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 8px;
    align-items: center;

    button {
      margin: 0 auto 20px;
      background-color: ${COLORS.black};
      color: ${COLORS.white};
      min-width: 360px;
      z-index: 5;

      ${Media.mobile`
      min-width: 100%;
      
      `}
    }
  `,
  ImageWrapper: styled.div`
    position: absolute;
    bottom: 0;
    right: 110px;

    ${Media.landscape`
    
    right: 0px;
    `}
    ${Media.smallLandscape`
    bottom: -60px;
    right: 0px;
    `}

    ${Media.mobile`
   display: none;
    `}
  `,
};
