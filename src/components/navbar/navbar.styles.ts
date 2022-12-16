import { FONTS } from '@styles/fonts';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { COLORS } from '@styles/colors';

export const NavBarStyles = {
  NavBarWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  `,

  NavElement: styled(NavLink)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${COLORS.black};
    cursor: pointer;
    transition: 0.3s;

    :hover {
      opacity: 0.6;
    }

    span {
      font-family: ${FONTS.productSans};
      font-size: 18px;
      margin-left: 15px;
    }

    &.active {
      color: ${COLORS.textGreen};
      pointer-events: none;

      svg {
        path {
          fill: ${COLORS.textGreen};
        }
      }

      svg.stroke {
        path {
          stroke: ${COLORS.textGreen};
          fill: none;
        }
      }
    }
  `,
  WrapNavElem: styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  `,
};
