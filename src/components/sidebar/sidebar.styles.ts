import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { COLORS } from '@styles/colors';
import { Media } from '@styles/media';

export const SidebarStyles = {
  Container: styled.aside`
    width: 20%;
    display: block;
    padding: 40px;

    button {
      margin: 0 auto 20px;
    }

    ${Media.landscape`
      padding:20px;
    `}

    ${Media.tablet`
    padding:10px;
    `}
  `,

  NavElement: styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 25px 8px;
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    border-radius: 20px;
    background-color: 'tranparent';
    border: 1px solid black;
    text-decoration: none;
    color: black;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;

    :hover {
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    }

    &.active {
      background-color: grey;
      color: white;
      border: 1px solid ${COLORS.grey};
      pointer-events: none;
    }
  `,
  WrapNavElem: styled.div`
    margin-bottom: 20px;
  `,
};
