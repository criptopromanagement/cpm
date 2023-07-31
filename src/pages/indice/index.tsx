import React from "react";
import { NextPage } from "next";
import { useSelector } from "react-redux";
import { RootState } from "src/store";
import MobileIndices from "src/components/indices/mobile/index-indices-mobile";
import { DesktopIndices } from "src/components/indices/desktop/index-indices-desktop";

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
