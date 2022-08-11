import type { NextPage } from "next";
import Head from "next/head";
import { MainLayout } from "../components/main-layout";
import { HomeHero } from "../components/home/home-hero";
import { HomePlans } from "../components/home/home-plans";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CPM | Inversiones Cripto</title>
      </Head>
      <main>
        <HomeHero />
        <HomePlans />
      </main>
    </>
  );
};

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Home;
