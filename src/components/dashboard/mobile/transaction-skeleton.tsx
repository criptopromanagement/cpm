import {
  Chip,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Skeleton,
} from "@mui/material";
import React from "react";

export const TransactionSkeleton = () => {
  return (
    <>
      <ListItem>
        <ListItemText
          primary={<Skeleton variant="text" sx={{ width: 75, height: 20 }} />}
          secondary={<Skeleton variant="text" sx={{ width: 75, height: 20 }} />}
        />
        <ListItemText
          primary={<Skeleton variant="text" sx={{ width: 75, height: 20 }} />}
          secondary={
            <Skeleton variant="text" sx={{ fontSize: "1.8rem", width: 75 }} />
          }
          primaryTypographyProps={{
            color: "darkorchid",
          }}
        />
        <ListItemIcon>
          <Chip
            label={
              <Skeleton variant="text" sx={{ fontSize: "2rem", width: 75 }} />
            }
            color="default"
          />
        </ListItemIcon>
      </ListItem>
      <Divider />
    </>
  );
};
