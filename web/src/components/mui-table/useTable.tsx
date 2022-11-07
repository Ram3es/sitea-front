import React, { useState } from 'react';
import {
  makeStyles,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
  TableSortLabel,
} from '@material-ui/core';
import { IHeadCell, IUser } from '@screens/users-table/user-table.constants';
import orderBy from 'lodash.orderby';

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
  items: IUser[],
  headCells: IHeadCell[],
  value: string
) {
  const classes = useStyles();

  const pages = [5, 10, 25];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pages[page]);
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

  const pagingAndSorting = () => {
    const filtered = items.filter(
      (item) => item.email.includes(value) || item.wallet.includes(value)
    );

    return orderBy(filtered, orderByField, order).slice(
      page * rowsPerPage,
      (page + 1) * rowsPerPage
    );
  };

  const TblContainer = (props: IPropsElem) => (
    <Table className={classes.table}>{props.children}</Table>
  );

  const TblHead = () => {
    const handleSort = (id: string) => {
      const isAsc = orderByField === id && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderByField(id);
    };

    return (
      <TableHead>
        <TableRow>
          {headCells.map((item) => (
            <TableCell key={item.id}>
              <TableSortLabel
                active={orderByField === item.id}
                direction={orderByField === item.id ? order : 'asc'}
                onClick={() => {
                  handleSort(item.id);
                }}
              >
                {item.title}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  const TblPagination = () => (
    <TablePagination
      component="div"
      page={page}
      rowsPerPageOptions={pages}
      rowsPerPage={rowsPerPage}
      count={items.length}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );

  return { TblContainer, TblHead, TblPagination, pagingAndSorting };
}
