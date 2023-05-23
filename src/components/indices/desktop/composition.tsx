import React, { useState, useEffect } from "react";
import apiClientWithoutToken from "src/services/api-client-without-token";
import { Typography, Table, TableBody, TableCell, TableContainer, TableRow, Chip } from "@mui/material";
import type { FC } from "react";


interface Ticket {
    symbol: string;
    name: string;
    marketcap: number;
    percent: number;
    img: string;
    _id: string;
}


export const Composition: FC = () => {

    const [composition, setComposition] = useState<Ticket[]>([])

    const getComposition = async () => {
        try {
            const result = await apiClientWithoutToken.get("/funds")
            setComposition(result.data[0].tickets)

        } catch (error) {
            console.log("ERROR=>", error)
        }
    }

    useEffect(() => {
        getComposition()

    }, [])


    return (

        <>
            <Typography
                variant="h2"
                mb="1rem"
            >
                Composición
            </Typography>

            <TableContainer
                sx={{
                    border: "2px #F5FAFF solid",
                    borderRadius: "18px"
                }}
            >
                <Table>
                    <TableBody>
                        {composition.map((content) => (
                            <TableRow
                                key={content._id}
                            >
                                <TableCell
                                    width={50}
                                >
                                    <img src={content.img} style={{ width: 45, height: 45 }} alt={content.symbol}></img>
                                </TableCell>
                                <TableCell
                                    align="left"
                                    sx={{
                                        fontSize: "14px"
                                    }}
                                >
                                    {content.name}
                                </TableCell>
                                <TableCell
                                    align="right"
                                >
                                    <Chip
                                        color="success"
                                        label={`${content.percent}%`}
                                        sx={{
                                            marginRight: "24px"
                                        }}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
        </>
    )
}