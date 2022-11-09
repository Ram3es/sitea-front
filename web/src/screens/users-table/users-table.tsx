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
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@constants/routes';

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

  const navigate = useNavigate();

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

  const handleInfoUser = (userId: number) => {
    navigate({ pathname: `/${ROUTES.admin}/${userId}` });
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
              <TableRow onClick={() => handleInfoUser(user.id)} key={user.id}>
                <TableCell style={{ minWidth: '200px' }}>
                  {user.email}
                </TableCell>
                <TableCell>{user.wallet}</TableCell>
                <TableCell>{user.lastLogin}</TableCell>
                <TableCell align="center" width="40px">
                  {user.amountLogin}
                </TableCell>
                <TableCell align="center" width="40px">
                  {user.hoursSpent}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
    </>
  );
};
