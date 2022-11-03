import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const style = {
    width: '100%',
    maxWidth: 360,
    borderRadius: 2,
  };

function createData(
  name: string,
  time: string,
) {
  return { name, time };
}

const rows = [
  createData('Reporte', 'MENSUAL'),
  createData('Plazo mínimo', '3 MESES'),
  createData('Plazo máximo', '30 AÑOS'),
  createData('Lanzamiento', '08/2020'),
  createData('Ingresos', 'MENSUAL'),
  createData('Comisión por rescate', '2020'),
  createData('Comisión por rentabilidad', '2020'),
  createData('Comisión por administración', '2020'),
  createData('Aporte mínimo', '100 USDT'),
];

export default function Terms() {
  return (
    <TableContainer sx={style} >
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
              <TableCell align="right">{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
