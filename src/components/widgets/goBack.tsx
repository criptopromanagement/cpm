import React from "react";
import { useRouter, NextRouter } from "next/router";
import { Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useSelector } from "react-redux";
import { RootState } from "src/store";

const GoBack: React.FC = () => {
  const router: NextRouter = useRouter();
  const isMobile = useSelector((state: RootState) => state.mobile.isMobile);
  
  const handleBackClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    router.back();
  };

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
