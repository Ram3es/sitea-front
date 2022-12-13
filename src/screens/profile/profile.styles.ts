import { COLORS } from '@styles/colors';
import styled from 'styled-components';
import { Media } from '@styles/media';

export const ProfileStyles = {
  Container: styled.div`
    width: fit-content;
    padding: 20px 60px 20px 20px;
    border: 1px solid black;
    border-radius: 20px;
    background-color: ${COLORS.violet};
    margin-top: 50px;

    ${Media.tablet`
    padding: 20px;
    `}

    ${Media.mobile`
    padding:  20px 0;
    width:100%;
    
    `}
  `,
  RowWrapper: styled.div`
    display: flex;
    height: 50px;
    margin-bottom: 10px;

    ${Media.mobile`
   
    `}
  `,
  Title: styled.div`
    display: flex;
    align-items: center;
    min-width: 180px;
    padding: 5px;
    font-size: 22px;
    font-weight: 700;

    ${Media.mobile`
    
    font-size: 16px;
    min-width: 115px;
    
   

    `}
  `,
  Row: styled.div`
    display: flex;
    align-items: center;
    word-break: break-all;
    font-size: 18px;
    font-weight: 600;
    margin: 0 10px;

    ${Media.mobile`
    font-size: 14px;
    `}
  `,
  BtnWrapper: styled.div`
    display: flex;

    button {
      min-width: 280px;
      color: ${COLORS.white};
      background-color: ${COLORS.black};

      ${Media.mobile`
      min-width: 220px;
      padding: 5px;
      height:45px;
      margin:0;
    `}
    }
  `,
};
