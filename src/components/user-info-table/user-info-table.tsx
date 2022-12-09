import { FC } from 'react';

import {
  makeStyles,
  Table as MuiTable,
  TableBody,
  TableRow,
} from '@material-ui/core';
import { COLORS } from '@styles/colors';
import { DATE_OPTIONS } from '@constants/format';

import { HEAD_CELL } from './user-info-table.constants';
import { TableStyles as Styled } from './user-info-tabsle.styles';

interface IUserInfoTableProps {
  results?: IResult[];
}

const useStyles = makeStyles(() => ({
  header: {
    position: 'sticky',
    top: 0,
  },
  row: {
    backgroundColor: `${COLORS.violet}`,
  },
  headRow: {
    backgroundColor: `${COLORS.white}`,
  },
}));

export const UserInfoTable: FC<IUserInfoTableProps> = ({ results }) => {
  const classes = useStyles();
  return (
    <Styled.Wrapper>
      <MuiTable>
        <Styled.Head className={classes.header}>
          <TableRow>
            {HEAD_CELL.map((cell) => (
              <Styled.Cell className={classes.headRow} key={cell.id}>
                {cell.title}
              </Styled.Cell>
            ))}
          </TableRow>
        </Styled.Head>
        <TableBody>
          {results?.map((stat) => {
            const { day, away, correct, hunched, incorrect, id } = stat;

            return (
              <TableRow className={classes.row} key={id}>
                <Styled.Cell>
                  {new Date(day).toLocaleString('en-GB', DATE_OPTIONS)}
                </Styled.Cell>
                <Styled.Cell>{correct}</Styled.Cell>
                <Styled.Cell>{hunched}</Styled.Cell>
                <Styled.Cell>{incorrect}</Styled.Cell>
                <Styled.Cell>{away}</Styled.Cell>
              </TableRow>
            );
          })}
        </TableBody>
      </MuiTable>
    </Styled.Wrapper>
  );
};
