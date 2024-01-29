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
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchAccessLogs } from "src/slices/logs-slice";
import { RootState, useDispatch } from "src/store";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#ffffff",
    color: "#1c1c1c",
    fontSize: 13,
    textTransform: "none",
    textAlign: "center",
    paddingLeft: 0,
    paddingRight: 0,
    fontWeight: 400,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 13,
    textAlign: "center",
    color: theme.palette.grey[500],
  },
}));

export const LoginHistory = () => {
  const dispatch = useDispatch();

  const { accessLogs, isLoading, error } = useSelector(
    (state: RootState) => state.accessLogs
  );

  useEffect(() => {
    dispatch(fetchAccessLogs());
  }, [dispatch])

  return (
    <Grid md={12} xs={12} margin='16px 0px 16px 32px'>
      <Card>
        <CardHeader style={{ paddingLeft:'40px'}} title="Historial de ingresos" />
        <CardContent style={{ padding: 0 }}>
        {isLoading ? (
            <div>Cargando...</div>
          ) : error ? (
            <div>Error: {error}</div>
          ) : (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell style={{ paddingLeft:'16px'}}>Fecha y hora</StyledTableCell>
                  <StyledTableCell>Dirección IP</StyledTableCell>
                  <StyledTableCell>Dispositivo</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Array.isArray(accessLogs?.data) ? (
                  accessLogs?.data?.map(r => (
                    <TableRow key={r.id}>
                      <StyledTableCell style={{ paddingLeft:'16px'}}>{r.createdAt}</StyledTableCell>
                      <StyledTableCell>{r.ip}</StyledTableCell>
                      <StyledTableCell>{r.device.substring(0,80)}</StyledTableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <StyledTableCell colSpan={3}>No hay registros de acceso.</StyledTableCell>
                  </TableRow>
                )}

              </TableBody>
            </Table>
          </TableContainer>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};
