import { Paper } from '@material-ui/core';
import styled from 'styled-components';

export const UsersTableStyles = {
  Container: styled.div`
    display: flex;
  `,

  Paper: styled(Paper)`
    && {
      width: auto;
      padding: 10px;
      margin: 10px;
      overflow: 'auto';
    }
  `,

  TableContainer: styled.div`
    overflow-x: auto;
  `,
};
