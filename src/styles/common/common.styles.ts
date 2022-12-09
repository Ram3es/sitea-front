import { COLORS } from '@styles/colors';
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
    min-height: 100vh;
    width: 80%;
    padding: 20px;
    background-color: ${COLORS.bcgLightGrey};

    ${Media.mobile`
width: 100%;
`}
  `,
};
