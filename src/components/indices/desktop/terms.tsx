import React from 'react';
import { TableContainer, Table, TableBody, TableRow, TableCell, Typography } from '@mui/material';



function createData(
    title: string,
    value: string,
) {
    return { title, value };
}

const rows = [
    createData('Reporte', 'MENSUAL'),
    createData('Permanencia minima', '3 MESES'),
    createData('Permanencia recomendada', '3 - 5 AÑOS'),
    createData('Lanzamiento', '08/2020'),
    createData('Ingresos', 'DIARIOS'),
    createData('Plazo de rescate', '72HS'),
    createData('Comisión por rentabilidad', '10%'),
    createData('Honorarios de custodia', 'N/A'),
    createData('Aporte mínimo', '200 USDT'),
    createData("Volatilidad", "ALTA")
];

export const Terms = () => {
    return (
        <>
            <Typography
                variant="h2"
                mb="16px"
            >
                Términos
            </Typography>

            <TableContainer
                sx={{
                    border: "2px #F5FAFF solid",
                    borderRadius: "18px"

                }}
            >
                <Table >
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.title}
                                sx={{
                                    height: "79.4px"
                                }}
                            >
                                <TableCell
                                    sx={{
                                        fontSize: "14px"
                                    }}
                                >
                                    {row.title}
                                </TableCell>
                                <TableCell sx={{
                                    fontSize: "14px"
                                }}>
                                    {row.value}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}