import React from 'react';
import { TableContainer, Table, TableBody, TableRow, TableCell, Typography } from '@mui/material';



function createData(
    title: string,
    value: string,
) {
    return { title, value };
}

const rows = [
    createData('Categoria', 'FONDO CRIPTO'),
    createData('Plazo mínimo', 'NO HAY'),
    createData('Plazo máximo', '99 AÑOS'),
    createData('Lanzamiento', '17/03/2023'),
    createData('Suscripciones', 'SEMANAL (MIER 16H ARG)'),
    createData('Plazo de rescate', '48 HORAS'),
    createData('Comisión por rescate', '0% / 0.5%'),
    createData('Comisión por rentabilidad', '0%'),
    createData('Comisión por administración', '2,75% ANUAL'),
    createData('Aporte mínimo', '50.000 AR$')
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
                                        fontSize: "14px",
                                        paddingLeft: "48px"
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