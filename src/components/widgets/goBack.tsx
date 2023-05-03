import React from "react";
import { useRouter, NextRouter } from "next/router";
import { Button, useMediaQuery } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Theme } from "@mui/system";

const GoBack: React.FC = () => {
  const router: NextRouter = useRouter();
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  const handleBackClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    router.back();
  };
console.log(isMobile, "ismobile")
  return (
    <>
      {isMobile && (
        <Button 
            sx={{ ml: "1rem", p: 0, minWidth: 0  }}
            style={{ color: "white" }}
            onClick={handleBackClick}>
          <ArrowBackIosIcon />
        </Button>
      )}
    </>
  );
};

export default GoBack;
