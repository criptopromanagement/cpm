import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';

const style = {
    width: '100%',
    maxWidth: 360,
    borderRadius: 2,
    bgcolor: 'background.paper',
    mt: 3,
  };

function createData(
  name: string,
  path: string,
) {
  return { name, path };
}

const rows = [
  createData('Reporte', 'MENSUAL'),
  createData('Fact Sheet', '3 MESES'),
];

const Documents = () => {
  return (
    <>
      <Typography variant="h3" sx={{ mt: 3, mb: 1 }}>
        Documentos
      </Typography>
      <Typography color="textSecondary" variant="subtitle2">
        Los índices CPM están diseñados para proveer a inversores una forma
        clara, basada en reglas y transparente de obtener el rendimiento de un
        grupo de criptoactivos. Combinando metodologías y estándares de la
        industria financiera tradicional, con los ajustes apropiados para
        adaptarlos al espacio cripto.
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
                <DownloadIcon />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default Documents;
