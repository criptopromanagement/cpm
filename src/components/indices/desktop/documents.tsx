import React from "react";
import { Typography, TableContainer, Table, TableRow, TableCell, TableBody, Button, Divider, Grid } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';


const tableStyle = {
    border: "thin #F5FAFF solid",
    borderRadius: "8px",
    mt: "2rem",
    mb: "1rem"
}

const openPdf = (url: string) => {
    window.open(url, "_blank")
}

export const Documents = () => {
    return (
        <>
            <Typography
                variant="h2"
                mt="2rem"
                mb="1rem"
            >
                Documentos
            </Typography>
            <Typography
                variant="subtitle2"
            >
                Los índices CPM están diseñados para proveer a inversores una forma clara, basada en reglas y transparente de obtener el rendimiento de un grupo de criptoactivos.
                Combinando metodologías y estándares de la industria financiera tradicional, con los ajustes apropiados para adaptarlos al espacio cripto.
            </Typography>
            <TableContainer
                sx={tableStyle}
            >
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <Typography>Metodología CPM índice foundation</Typography>
                            </TableCell>
                            <TableCell
                                align="right"
                            >
                                <Button
                                    sx={{
                                        color: "#A0AEC0"
                                    }}
                                    onClick={() => openPdf("/static/documents/metodologia-indice-foundation.pdf")}
                                >
                                    <DownloadIcon />
                                </Button>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>
                                <Typography>Metodología CPM de índices Cripto</Typography>
                            </TableCell>
                            <TableCell
                                align="right"
                            >
                                <Button
                                    sx={{
                                        color: "#A0AEC0"
                                    }}
                                    onClick={() => openPdf("/static/documents/metodologia-indices-cripto.pdf")}
                                >
                                    <DownloadIcon />
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer >
        </>
    )
}