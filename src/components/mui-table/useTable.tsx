import React, { useCallback, useState } from 'react';
import {
  makeStyles,
  Table as MUITable,
  TableCell,
  TableHead as MUITHead,
  TableRow,
  TablePagination as MUIPagination,
  TableSortLabel,
} from '@material-ui/core';
import { IHeadCell } from '@screens/users-table/user-table.constants';
import orderBy from 'lodash.orderby';
import { getTotalHours } from '@utils/get-total-hours';

interface IPropsElem {
  children?: React.ReactNode;
}
type TOrder = 'asc' | 'desc';

const useStyles = makeStyles((theme) => ({
  table: {
    marginTop: theme.spacing(3),
    '& thead th': {
      fontWeight: 700,
      color: theme.palette.primary.main,
      background: theme.palette.grey[50],
    },
    '& tbody td': { fontWeight: 400, fontSize: '14px' },
    '& tbody tr:hover': {
      backgroundColor: '#fffbf2',
      cursor: 'pointer',
    },
  },
}));

export function useTable(
  items: IUserWithResults[],
  headCells: IHeadCell[],
  searchInputValue: string
) {
  const classes = useStyles();

  const amountPerPages = [5, 10, 25];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(amountPerPages[page]);
  const [order, setOrder] = useState<TOrder>();
  const [orderByField, setOrderByField] = useState('');

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setRowsPerPage(Number(event.target.value));
    setPage(0);
  };
  const filteredItems = () => {
    const formatedData = items.map((user) => ({
      ...user,
      email: user.email || '',
      wallets: [...user.nearWallets, ...user.wallets]
        .map((wal) => wal.wallet)
        .join(', '),
      results: getTotalHours(user.results as IResult[]),
    }));

    return formatedData.filter(
      (item) =>
        item.email.includes(searchInputValue) ||
        item.wallets.includes(searchInputValue)
    );
  };

  const pagingAndSorting = () => {
    return orderBy(filteredItems(), orderByField, order).slice(
      page * rowsPerPage,
      (page + 1) * rowsPerPage
    );
  };

  const Table = (props: IPropsElem) => (
    <MUITable className={classes.table}>{props.children}</MUITable>
  );

  const TableHead = () => {
    const handleSort = useCallback((id: string) => {
      const isAsc = orderByField === id && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderByField(id);
    }, []);

    return (
      <MUITHead>
        <TableRow>
          {headCells.map((item) => {
            const onClick = useCallback(() => handleSort(item.id), [item.id]);
            return (
              <TableCell key={item.id}>
                <TableSortLabel
                  active={orderByField === item.id}
                  direction={orderByField === item.id ? order : 'asc'}
                  onClick={onClick}
                >
                  {item.title}
                </TableSortLabel>
              </TableCell>
            );
          })}
        </TableRow>
      </MUITHead>
    );
  };

  const TablePagination = () => (
    <MUIPagination
      component="div"
      page={page}
      rowsPerPageOptions={amountPerPages}
      rowsPerPage={rowsPerPage}
      count={filteredItems().length}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );

  return { Table, TableHead, TablePagination, pagingAndSorting };
}
