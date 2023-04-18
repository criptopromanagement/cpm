import React, { FC } from "react"
import { Box, Typography } from "@mui/material"
import PropTypes from 'prop-types'

interface MenuIconProps {
    open?: boolean
}


export const MenuIcon: FC<MenuIconProps> = ({ open }) => {


    const styles = {
        container: {
            height: '32px',
            width: '32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            padding: '4px',
        },
        line: {
            height: '2px',
            width: '20px',
            background: "#00FF33",
            transition: 'all 0.2s ease'
        },
        lineTop: {
            transform: open ? 'rotate(45deg)' : 'none',
            transformOrigin: 'top left',
            marginBottom: '5px',
        },
        lineMiddle: {
            opacity: open ? 0 : 1,
            transform: open ? 'translateX(-16px)' : 'none',
        },
        lineBottom: {
            transform: open ? 'translateX(-1px) rotate(-45deg)' : 'none',
            transformOrigin: 'top left',
            marginTop: '5px',
        },
    }



    return (
        <Box
            sx={styles.container}
        >

            <Typography style={{ ...styles.line, ...styles.lineTop }} />
            <Typography style={{ ...styles.line, ...styles.lineMiddle }} />
            <Typography style={{ ...styles.line, ...styles.lineBottom }} />

        </Box>
    )
}

MenuIcon.propTypes = {
    open: PropTypes.bool
}