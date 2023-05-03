import { Icon, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material'
import Link from 'next/link'
import React, { FC } from 'react'
import { NavigationItem as NavigationItemType } from 'src/types/left-bar'
interface Props {
    navigationItem: NavigationItemType
    active: boolean
}
export const NavigationItem: FC<Props> = ({ navigationItem, active, }) => {
    const { icon, text } = navigationItem;
    return (
        <Link href={navigationItem.to}>
            <MenuItem sx={{ backgroundColor: active ? "#6DEC86" : "transparent" }}>
                <ListItemIcon>
                    <Icon>{icon}</Icon>
                </ListItemIcon>
                <ListItemText>
                    <Typography variant="subtitle1">{text}</Typography>
                </ListItemText>
            </MenuItem>
        </Link>
    )
}
