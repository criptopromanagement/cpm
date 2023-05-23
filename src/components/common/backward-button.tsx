import React from "react";
import { IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useRouter } from "next/router";

export const BackwardButton = () => {
  const router = useRouter();
  return (
    <IconButton onClick={() => router.back()}>
      <ChevronLeftIcon fontSize="large" />
    </IconButton>
  );
};
