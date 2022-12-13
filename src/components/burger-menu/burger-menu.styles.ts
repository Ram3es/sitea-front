import styled from 'styled-components';
import { Media } from '@styles/media';
import { COLORS } from '@styles/colors';

export const BurgerStyles = {
  BurgerButton: styled.div<{ isOpen: boolean }>`
    display: none;
    width: 2rem;
    height: 2rem;
    justify-content: space-around;
    flex-direction: column;
    margin-right: 5px;
    position: fixed;
    right: 15px;
    top: 25px;
    cursor: pointer;

    z-index: 15;
    :hover {
      opacity: 0.6;
    }

    div {
      width: 2rem;
      height: 0.25rem;
      background-color: ${COLORS.black};
      border-radius: 10px;

      transform-origin: 1px;
      transition: all linear 0.3s;
      &:nth-child(1) {
        transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
      }
      &:nth-child(2) {
        transform: ${({ isOpen }) =>
          isOpen ? 'translateX(50%)' : 'translateX(0)'};
        opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
      }
      &:nth-child(3) {
        transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
      }
    }

    ${Media.mobile`
    display:flex;
    `}
  `,

  Wrapper: styled.div<{ isOpen: boolean }>`
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 250px;
    background-color: ${COLORS.lightGrey};
    border-bottom: 3px solid ${COLORS.green};
    z-index: 5;
    padding: 20px;
    transition: 0.3s;
    transform: ${({ isOpen }) =>
      isOpen ? 'translateY(0%)' : ' translateY(-100%)'};

    ${Media.mobile`
    display: flex;
    `}
  `,
};
