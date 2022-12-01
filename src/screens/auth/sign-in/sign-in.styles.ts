import styled from 'styled-components';

export const SignInStyles = {
  Section: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 10px;
  `,

  Wrapper: styled.div`
    max-width: 450px;
    width: 100%;
    border: 1px solid black;
    border-radius: 12px;
    padding: 30px;
  `,
  h1: styled.h1`
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;
  `,
  Label: styled.p`
    text-align: center;
    font-size: 18px;
  `,
  ButtonWrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    align-items: center;

    button {
      margin: 0 auto 20px;
    }
  `,
};
