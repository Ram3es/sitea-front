import React, { useState } from 'react';

import { useTable } from '@components/mui-table/useTable';
import { Search } from '@material-ui/icons';
import {
  InputAdornment,
  makeStyles,
  Paper,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Toolbar,
} from '@material-ui/core';

import { HEAD_TITLE, MOCK_DATA } from './user-table.constants';

export const useStyles = makeStyles((theme) => ({
  pageContent: {
    width: 'fit-content',
    margin: theme.spacing(2),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: '75%',
  },
}));

export const UsersTable = () => {
  const [value, setValue] = useState('');

  const classes = useStyles();
  const { TblContainer, TblHead, TblPagination, pagingAndSorting } = useTable(
    MOCK_DATA,
    HEAD_TITLE,
    value
  );

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setValue(event.target.value);
  };
  return (
    <>
      <Paper className={classes.pageContent}>
        <Toolbar>
          <TextField
            className={classes.searchInput}
            variant="outlined"
            name="search"
            label="Search User"
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Toolbar>
        <TblPagination />
        <TblContainer>
          <TblHead />
          <TableBody>
            {pagingAndSorting().map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.wallet}</TableCell>
                <TableCell>{user.lastLogin}</TableCell>
                <TableCell>{user.amountLogin}</TableCell>
                <TableCell>{user.hoursSpent}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
    </>
  );
};
