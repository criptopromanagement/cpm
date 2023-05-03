import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react'
import { CommonModal } from 'src/components/common';
import { Notification } from 'src/components/common/notification';
import { DepositMoneyForm, InvestMoneyForm } from 'src/components/invest';
import { useSelector } from 'src/store';
import { DepositMoney } from './deposit-money';
import { InvestMoney } from './invest-money';
import { MyTransactions } from './my-transactions';

export const MobileDashboard = () => {
    const { user: currentUser, mobile } = useSelector((state) => state);
    const { userData } = currentUser;
    const [openDepositModal, setOpenDepositModal] = useState<boolean>(false);
    const [openInvestModal, setOpenInvestModal] = useState<boolean>(false);
    const { user } = userData;

    const handleOpenDepositModal = () => setOpenDepositModal(true);
    const handleCloseDepositModal = () => setOpenDepositModal(false);
    const handleOpenInvestModal = () => setOpenInvestModal(true);
    const handleCloseInvestModal = () => setOpenInvestModal(false);
    return (
        <Grid container justifyContent="flex-start" spacing={2}>
            <Grid item xs={12} md={12} sm={12} lg={12}>
                <Typography variant="h4">
                    ¡Hola {user?.firstname} {user?.lastname}!
                </Typography>
                <Notification currentPage="dashboard" showSuccess />
            </Grid>
            {/* <Balance /> */}
            <DepositMoney handleOpenDepositModal={handleOpenDepositModal} />
            <InvestMoney handleOpenInvestModal={handleOpenInvestModal} />
            <MyTransactions />
            <CommonModal
                open={openInvestModal}
                handleClose={handleCloseInvestModal}
            >
                <InvestMoneyForm closeModal={handleCloseInvestModal} />
            </CommonModal>
            <CommonModal
                open={openDepositModal}
                handleClose={handleCloseDepositModal}
            >
                <DepositMoneyForm closeModal={() => { }} />
            </CommonModal>
        </Grid>
    )
}
