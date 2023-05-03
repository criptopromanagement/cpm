import React from "react";
import { HomeBlogDesktop } from "./home-blog-desktop";
import { HomeBlogMobile } from "./home-blog-mobile";
import { useSelector } from "react-redux";
import { RootState } from "src/store";

export const HomeBlog = () => {
    const isMobile = useSelector((state: RootState) => state.mobile.isMobile);

    return (
        isMobile ? (
            <>
                <HomeBlogMobile />
            </>
        ) : (
            <>
                <HomeBlogDesktop />
            </>
        )
    )
};