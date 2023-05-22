import React from "react";
import { NextPage } from "next";
import MobileIndices from "../../components/indices/mobile/index-indices-mobile";
import { DesktopIndices } from "../../components/indices/desktop/index-indices-desktop";
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
