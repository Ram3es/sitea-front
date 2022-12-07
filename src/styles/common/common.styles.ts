import { Media } from '@styles/media';
import styled from 'styled-components';

export const CommonStyles = {
  Container: styled.div`
    display: flex;
    height: auto;

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
