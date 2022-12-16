import styled from 'styled-components';
import { COLORS } from '@styles/colors';
import { Media } from '@styles/media';
import { FONTS } from '@styles/fonts';

export const FaqPageStyles = {
  ContentContainer: styled.div`
    display: flex;
    padding: 40px 0px;

    ${Media.mobile`
    
    flex-direction:column;
     padding-bottom: 0;
    
    
    `}
  `,

  TitleSection: styled.div`
    width: 40%;
    padding: 5px;

    ${Media.mobile`
    width:100%;
    padding: 5px 10px;
    `}
  `,
  QustionSection: styled.div`
    width: 60%;
    padding: 5px 15px 5px;

    ${Media.mobile`
    width:100%;
    padding: 5px 10px;
    
    `}
  `,

  h2: styled.h2`
    font-family: ${FONTS.productSans};
    font-size: 52px;
    font-weight: 700;

    span {
      font-weight: 400;
      color: ${COLORS.white};
      -webkit-text-stroke: 0.2mm ${COLORS.black};
    }
    p {
      font-size: 16px;
      margin: 10px 0;
      max-width: 80%;
      font-weight: 400;

      ${Media.mobile`
      max-width:100%;
      font-size: 16px;
      `}
    }
  `,
  QuestionTale: styled.div<{ isActive: boolean }>`
    max-height: ${({ isActive }) => (isActive ? '200px' : '50px')};
    padding: 10px 40px 15px 48px;
    background-color: ${({ isActive }) =>
      isActive ? `${COLORS.black}` : `${COLORS.violet}`};
    color: ${({ isActive }) => (isActive ? COLORS.white : COLORS.black)};
    border-radius: 20px;
    border: 1px solid ${COLORS.black};
    margin-bottom: 15px;
    position: relative;

    transition: 0.3s ease-in-out;

    svg {
      path {
        fill: ${({ isActive }) => (isActive ? COLORS.white : COLORS.black)};
      }
    }

    span {
      font-family: ${FONTS.productSans};
      font-size: 17px;
    }

    p {
      visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
      margin-top: 20px;
      transition-delay: 150ms;
      transition-property: visibility;
    }

    ${Media.mobile`
     min-height: 70px;
     padding: 10px 60px 15px 48px;
      `}
  `,

  Circle: styled.div`
    content: '';
    width: 11px;
    height: 11px;
    border-radius: 100%;
    position: absolute;
    top: 17px;
    margin: auto;
    left: 25px;
    background: ${COLORS.white};
    border: 1.5px solid ${COLORS.black};

    ${Media.mobile`
    top:25px;
      `}
  `,
  IconWrapper: styled.div`
    position: absolute;
    top: 11px;
    right: 40px;

    ${Media.mobile`
    top:18px;
      `}
  `,
};
