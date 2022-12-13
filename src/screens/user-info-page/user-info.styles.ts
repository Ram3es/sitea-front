import { Media } from '@styles/media';
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
    word-break: break-all;

    ${Media.mobile`
    margin-left:40px;
    font-size: 14px;
   

    `}
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
