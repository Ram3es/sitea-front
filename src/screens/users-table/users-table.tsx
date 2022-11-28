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

import { HEAD_TITLE } from './user-table.constants';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@constants/routes';

import { UsersTableStyles as Styled } from './users-table.styles';
import { useCallback } from 'react';
import { trackPromise } from 'react-promise-tracker';

import { useEffect } from 'react';
import { getAllUses } from '@services/admin.service';

export const useStyles = makeStyles((theme) => ({
  pageContent: {
    width: 'auto',
    margin: theme.spacing(2),
    padding: theme.spacing(3),
    overflow: 'auto',
  },
  searchInput: {
    width: '75%',
  },
}));

export const UsersTable = () => {
  const [searchInputValue, setSearchInput] = useState('');
  const [allUsers, setUsers] = useState<IUserWithResults[] | []>([]);
  const navigate = useNavigate();

  const getAllUsers = useCallback(async () => {
    try {
      const { data } = await trackPromise(getAllUses());
      setUsers(data);
    } catch (error) {}
  }, []);

  const classes = useStyles();
  const { Table, TableHead, TablePagination, pagingAndSorting } = useTable(
    allUsers,
    HEAD_TITLE,
    searchInputValue
  );

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleSearchBar = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setSearchInput(event.target.value);
  };

  const handleInfoUser = (userId: string) =>
    navigate({ pathname: `/${ROUTES.admin}/${userId}` });

  return (
    <>
      <Styled.Container>
        <Paper className={classes.pageContent}>
          <Toolbar>
            <TextField
              className={classes.searchInput}
              variant="outlined"
              name="search"
              label="Search User"
              onChange={handleSearchBar}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </Toolbar>
          <TablePagination />
          <Table>
            <TableHead />
            <TableBody>
              {pagingAndSorting().map((user) => {
                const onClick = () => handleInfoUser(user.id);

                return (
                  <TableRow onClick={onClick} key={user.id}>
                    <TableCell style={{ minWidth: '200px' }}>
                      {user.email}
                    </TableCell>
                    <TableCell>{user.wallets}</TableCell>
                    <TableCell>{0}</TableCell>
                    <TableCell align="center" width="40px">
                      {0}
                    </TableCell>
                    <TableCell align="center" width="40px">
                      {user.results}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <TablePagination />
        </Paper>
      </Styled.Container>
    </>
  );
};
