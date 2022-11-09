import { FC } from 'react';

import { Table as MuiTable, TableBody, TableRow } from '@material-ui/core';

import { HEAD_CELL, MOCK_USER_STRAICH } from './user-info-table.constants';
import { TableStyles as Styled } from './user-info-tabsle.styles';

export const UserInfoTable: FC = () => {
  return (
    <Styled.Wrapper>
      <MuiTable>
        <Styled.Head>
          <TableRow>
            {HEAD_CELL.map((cell) => (
              <Styled.Cell key={cell.id}>{cell.title}</Styled.Cell>
            ))}
          </TableRow>
        </Styled.Head>
        <TableBody>
          {MOCK_USER_STRAICH.map((stat) => {
            const { date, away, correct, hunched, incorrect } = stat;

            return (
              <TableRow key={date}>
                <Styled.Cell>{date}</Styled.Cell>
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
