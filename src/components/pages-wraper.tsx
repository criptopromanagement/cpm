
import { useMediaQuery } from '@mui/material';
import { Theme } from '@mui/system';
import React, { FC, useEffect } from 'react'
import { setIsMobile } from 'src/slices/mobile-slice';
import { useDispatch } from 'src/store';

export const PagesWrapper: FC = ({ children }) => {
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setIsMobile(isMobile))
    }, [isMobile, dispatch])
    
    return (
        <>
            {children}
        </>
    )
}
