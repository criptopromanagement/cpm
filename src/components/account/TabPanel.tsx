import React, { FC } from "react";
import { Typography, Box } from '@mui/material';

interface Props {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export const TabPanel: FC<Props> = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};
