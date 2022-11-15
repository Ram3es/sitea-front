import styled, { css } from 'styled-components';

import { COLORS } from '@styles/colors';
import { IButtonTypings } from './button.typings';

export const ButtonSyles = styled.button<IButtonTypings>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: ${({ minWidth }) => (minWidth ? `${minWidth}px` : '130px')};
  min-height: 40px;
  border: 2px solid ${COLORS.grey};
  border-radius: 20px;
  padding: 7px 15px;
  font-size: 14px;
  font-weight: 400;
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  transition: 0.3s;
  background-color: ${({ color }) => (color ? color : 'transparent')};

  :hover {
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
  }

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      pointer-events: none;
    `}

  span {
    padding: 0px 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ isDisabled }) =>
      isDisabled &&
      css`
        opacity: 0.4;
      `}
  }
`;
