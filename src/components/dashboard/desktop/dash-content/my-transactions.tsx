import { styled } from '@mui/material/styles';
import { Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { FC } from 'react'
import { useSelector } from 'src/store';

const RowBodyTransaction = styled(TableRow)(({ theme }) => ({
    "& > td": {
        fontSize: 14,
        fontWeight: 300
    }
}));
const TableHeadTransaction = styled(TableHead)(({ theme }) => ({
    backgroundColor: "transparent",
    "& > tr": {
        "& > th:first-of-type": {
            borderTopLeftRadius: 10
        },
        "& > th:last-child": {
            borderTopRightRadius: 10
        },
        "& > th": {
            backgroundColor: "#DADADA",
            fontSize: "15px !important",
            color: `${theme.palette.common.black} !important`,
            fontWeight: "500 !important"
        }
    }
}));
export const MyTransactions: FC = () => {
    const { transactions, loading } = useSelector((state) => state.transactions);
    return (
        <TableContainer>
            <Table>
                <TableHeadTransaction>
                    <TableRow>
                        <TableCell align="center">FECHA</TableCell>
                        <TableCell align="center">TRANSACCIÓN</TableCell>
                        <TableCell align="center">ESTADO</TableCell>
                        <TableCell align="center">MONTO</TableCell>
                    </TableRow>
                </TableHeadTransaction>
                <TableBody>
                    {transactions.map(({ id, formatedDate, formatedAmount, status, transactionTypeDescription }) => (
                        <RowBodyTransaction key={id}>
                            <TableCell align="center">{formatedDate}</TableCell>
                            <TableCell align="center">{transactionTypeDescription}</TableCell>
                            <TableCell align="center">{status === 'pending' ? <Chip label='PENDIENTE' color='warning' /> : <Chip label='APROBADO' color="primary" />}</TableCell>
                            <TableCell align="center">{formatedAmount}</TableCell>
                        </RowBodyTransaction>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
