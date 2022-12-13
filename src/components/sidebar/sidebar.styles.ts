import styled from 'styled-components';

import { Media } from '@styles/media';

export const SidebarStyles = {
  Container: styled.aside`
    width: 20%;
    display: flex;
    flex-direction: column;
    padding: 20px 40px 40px;

    button {
      margin: 0 auto 20px;
    }

    ${Media.landscape`
      padding:20px;
    `}

    ${Media.tablet`
    padding:10px;
   
    `}

    
    ${Media.mobile`
   
    width: 100%;
    align-items:end;
    padding:20px 0;
    

    svg {
      margin:auto;
      
     a {
      min-width: 110px;
      padding: 5px 15px 8px;
     }
    }
    `}
  `,

  Wrapper: styled.div`
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${Media.mobile`
    display:none;
    `}
  `,

  NavContainer: styled.div`
    height: 100%;
    margin-top: 45px;
  `,
};
