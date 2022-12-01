import { Media } from './../../styles/media';
import styled from 'styled-components';

export const HeaderStyles = {
  Wrapper: styled.header`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    height: 80px;
    padding: 20px 30px;

    ${Media.mobile`
    flex-direction:column;
    padding: 10px 10px;

    button {
      
      min-width: 100px;
      margin-left: auto;
    }

    `}
  `,
  UserEmail: styled.span`
    margin-right: 20px;
    font-size: 18px;
    font-weight: 700;

    ${Media.mobile`
    margin:5px 0 0 auto;
    font-size: 14px;
    word-break: break-all;
    `}
  `,
};
