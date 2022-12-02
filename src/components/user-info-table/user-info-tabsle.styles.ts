import styled from 'styled-components';
import { TableCell, TableHead } from '@material-ui/core';

import { Media } from '@styles/media';
import { COLORS } from '@styles/colors';

export const TableStyles = {
  Wrapper: styled.div`
    padding: 20px;
    border: 2px solid black;
    border-radius: 8px;

    ${Media.mobile`
    margin:0;
    border: 2px solid black;
    padding:10px;

    `}

    ${Media.tablet`
    overflow-x: auto;
    `}
  `,
  Cell: styled(TableCell)`
    && {
      text-align: center;
    }
  `,
  Head: styled(TableHead)`
    tr {
      background-color: ${COLORS.lightGrey};

      th {
        font-size: 16px;
        font-weight: 600;
      }
    }
  `,
};
