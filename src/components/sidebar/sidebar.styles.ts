import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { COLORS } from '@styles/colors';
import { Media } from '@styles/media';

export const SidebarStyles = {
  Container: styled.aside`
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 40px 40px;

    button {
      margin: 0 auto 20px;
    }

    ${Media.landscape`
      padding:20px;
    `}

    ${Media.tablet`
    padding:10px;
    `}

    
    ${Media.mobile`
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    padding:20px 5px;
    div{
      margin:0;
     a {
      min-width: 110px;
      padding: 5px 15px 8px;
     }
    }
    `}
  `,

  Wrapper: styled.div``,

  NavContainer: styled.div`
    margin-top: 45px;
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
    }
  `,
  WrapNavElem: styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  `,
};
