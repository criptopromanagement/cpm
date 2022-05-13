import React from 'react'
import Head from 'next/head'
import { MainNavbar } from "../../components/dashboard/dash-navbar";

const Dashboard = () => {
    return (
        <>
            <Head>
                <title>
                    Dashboard | CPM
                </title>
            </Head>
            < MainNavbar />
        </>
    )
}

export default Dashboard