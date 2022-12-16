import { COLORS } from '@styles/colors';
import { Media } from '@styles/media';
import styled from 'styled-components';

export const CommonStyles = {
  Container: styled.div`
    display: flex;

    ${Media.mobile`
  flex-direction: column;
  aside{
    position:fixed;
    top:0;
    right:0;
    background-color:white;
    z-index:2;
  }
  `}
  `,

  Content: styled.main`
    min-height: calc(100vh - 80px);
    width: 80%;
    padding: 20px;
    background-color: ${COLORS.bcgLightGrey};
    overflow-y: auto;

    ${Media.mobile`
   
width: 100%;
padding: 5px;
margin-top: 80px;
 
`}
  `,
};
