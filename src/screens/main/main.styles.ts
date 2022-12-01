import { Media } from '@styles/media';
import styled from 'styled-components';
export const MainStyles = {
  Container: styled.div`
    display: flex;
    height: calc(100vh - 90px);

    ${Media.mobile`
    flex-direction: column;
    `}
  `,

  Content: styled.main`
    width: 80%;
    padding: 5px;

    ${Media.mobile`
    width: 100%;
    `}
  `,
};
