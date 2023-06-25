import React from "react";
import { Typography, Table, TableBody, TableCell, TableContainer, TableRow, Chip } from "@mui/material";
import type { FC } from "react";
import { Ticket } from "../types";

interface CompositionProps {
  composition: Ticket[];
}

export const Composition: FC<CompositionProps> = ({ composition }) => {
  return (
    <>
      <Typography variant="h2" mb="1rem">
        Composición
      </Typography>

      <TableContainer
        sx={{
          border: "2px #F5FAFF solid",
          borderRadius: "18px",
        }}
      >
        <Table>
          <TableBody>
            {composition.map((content) => (
              <TableRow key={content._id}>
                <TableCell width={50}>
                  <img src={content.img} style={{ width: 45, height: 45 }} alt={content.symbol} />
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontSize: "14px",
                  }}
                >
                  {content.name}
                </TableCell>
                <TableCell align="right">
                  <Chip
                    color="success"
                    label={`${content.percent}%`}
                    sx={{
                      marginRight: "24px",
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
