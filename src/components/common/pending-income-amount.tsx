import React from 'react'
import { Chip } from '@mui/material';
import { useSelector } from 'src/store';

export const PendingIncomeAmount = () => {
    const { user } = useSelector((state) => state.user.userData);

    return (
        <Chip
            label={`Ingresos pendientes $${user?.balance.locked.toFixed(2)}`}
            variant="outlined"
            color="primary"
        />
    )
}
