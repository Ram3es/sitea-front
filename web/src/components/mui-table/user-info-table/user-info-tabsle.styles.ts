import styled from 'styled-components';

import { COLORS } from '@styles/colors';
import { TableCell, TableHead } from '@material-ui/core';

export const TableStyles = {
  Wrapper: styled.div`
    padding: 20px;
    border: 2px solid black;
    border-radius: 8px;
    margin-right: 30px;
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
