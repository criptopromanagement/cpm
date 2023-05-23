import * as React from 'react';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';

const style = {
    width: '100%',
    maxWidth: 360,
    borderRadius: 2,
    bgcolor: 'background.paper',
  };

function createData(
  name: string,
  time: string,
) {
  return { name, time };
}

const rows = [
  createData('Bitcoin', '39,97%'),
  createData('Ethereum', '36,08%'),
  createData('Cosmos', '3,36%'),
  createData('Chailink', '1,32%'),
  createData('Binance', '2,88%'),
  createData('Polkadot', '5,68%'),
  createData('Thorchain', '1,62%'),
  createData('Avalanche', '3,01%'),
  createData('Solana', '4,37%'),
  createData('BUSD', '1,72%'),
];

export default function Composition() {
  return (
    <>
      <Typography
        variant="h2"
        sx={{ mt: 3, mb: 2 }}
       >
        Composición
      </Typography>
      <Typography
        color="textSecondary"
        variant="subtitle2"
        sx={{ mb: 3 }}
       >
        La novedad del mercado cripto presenta desafíos a la hora de evaluar y elegir proyectos particulares para invertir. A través de los fondos CPM, que replican los índices CPM, se facilita a los inversores el proceso de decisión de inversión.
      </Typography>
    <TableContainer sx={style}>
      <Table sx={{ minWidth: 65 }} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">
                <Chip label={row.time} color="success" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}