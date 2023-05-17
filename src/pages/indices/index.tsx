import React from "react";
import { NextPage } from "next";
import MobileIndices from "./mobile/index-indices-mobile";
import { DesktopIndices } from "./desktop/index-indices-desktop";
import { useSelector } from "react-redux";
import { RootState } from "src/store";

const Indices: NextPage = () => {
    const isMobile = useSelector((state: RootState) => state.mobile.isMobile);

    return (
        <>
            {
                isMobile ? (

                    <MobileIndices />
                ) : (
                    <DesktopIndices />
                )
            }

        </>
    );
};

export default Indices;
