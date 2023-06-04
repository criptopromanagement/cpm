import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  TableContainer,
  TableHead,
  TableRow,
  Table,
  TableBody,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#343333",
    color: theme.palette.primary.main,
    fontSize: 14,
    textTransform: "none",
    textAlign: "center",
    paddingLeft: 0,
    paddingRight: 0,
    fontWeight: 300,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 13,
    textAlign: "center",
    color: theme.palette.grey[500],
  },
}));
const data = [
  {
    fechaHora: "20/04/2022 04:20 AM",
    ip: "95.130.17.84",
    dispositivo: "Chrome Mac OS 10.15.7",
  },
  {
    fechaHora: "05/01/2022 00:23 PM",
    ip: "95.130.17.84",
    dispositivo: "Chrome Mac OS 10.15.7",
  },
];
export const LoginHistory = () => {
  return (
    <Grid item md={12} xs={12}>
      <Card>
        <CardHeader title="Historial de ingresos" />
        <CardContent style={{ padding: 0 }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell>Fecha y hora</StyledTableCell>
                  <StyledTableCell>Dirección IP</StyledTableCell>
                  <StyledTableCell>Dispositivo</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((r) => (
                  <TableRow key={r.fechaHora}>
                    <StyledTableCell>{r.fechaHora}</StyledTableCell>
                    <StyledTableCell>{r.ip}</StyledTableCell>
                    <StyledTableCell>{r.dispositivo}</StyledTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Grid>
  );
};
