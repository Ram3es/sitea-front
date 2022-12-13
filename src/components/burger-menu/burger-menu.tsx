import { useState } from 'react';
import { NavBar } from '@components/navbar';
import { BurgerStyles as Styled } from './burger-menu.styles';

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => setIsOpen((state) => !state);
  return (
    <>
      <Styled.BurgerButton isOpen={isOpen} onClick={handleClick}>
        <div />
        <div />
        <div />
      </Styled.BurgerButton>
      <Styled.Wrapper isOpen={isOpen}>
        <NavBar />
      </Styled.Wrapper>
    </>
  );
};
