import styled from 'styled-components';

export const UserInfoStyles = {
  Wrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 25px;
  `,
  Title: styled.div`
    margin: 30px;
    font-size: 22px;
    font-weight: 600;
  `,
  BtnBack: styled.div`
    font-size: 18px;
    cursor: pointer;
    transition: 0.3s;
    :hover {
      opacity: 0.6;
    }
  `,
};
