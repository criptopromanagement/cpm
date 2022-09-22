import type { NextPage } from "next";
import Head from "next/head";
import { MainLayout } from "../components/main-layout";
import { HomeHero } from "../components/home/home-hero";
import { HomePlans } from "../components/home/home-plans";
import HomeBlog from "src/components/home/home-blog";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CPM | Inversiones Cripto</title>
      </Head>
      <main>
        <HomeHero />
        <HomePlans />
        <HomeBlog />
      </main>
    </>
  );
};

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Home;
