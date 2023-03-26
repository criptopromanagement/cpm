import { useEffect } from "react";
import type { FC } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import { Toaster } from "react-hot-toast";
import { Provider as ReduxProvider } from "react-redux";
import nProgress from "nprogress";
import { CacheProvider } from "@emotion/react";
import type { EmotionCache } from "@emotion/cache";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { RTL } from "../components/rtl";
import { SplashScreen } from "../components/splash-screen";
import { PagesWrapper } from "src/components/pages-wraper";
import {
  SettingsConsumer,
  SettingsProvider,
} from "../contexts/settings-context";
import { AuthConsumer, AuthProvider } from "../contexts/jwt-context";
import { store } from "../store";
import { createTheme } from "../theme";
import { createEmotionCache } from "../utils/create-emotion-cache";
import "../i18n";
import "../theme/global.css";

type EnhancedAppProps = AppProps & {
  Component: NextPage;
  emotionCache: EmotionCache;
};

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

const clientSideEmotionCache = createEmotionCache();

const App: FC<EnhancedAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>CPM | Inversiones Cripto</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ReduxProvider store={store}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <AuthProvider>
            <SettingsProvider>
              <SettingsConsumer>
                {({ settings }) => (
                  <ThemeProvider
                    theme={createTheme({
                      direction: settings.direction,
                      responsiveFontSizes: settings.responsiveFontSizes,
                      mode: settings.theme,
                    })}
                  >
                    <RTL direction={settings.direction}>
                      <CssBaseline />
                      <Toaster position="top-center" />
                      <AuthConsumer>
                        {(auth) =>
                          !auth.isInitialized ? (
                            <SplashScreen />
                          ) : (
                            getLayout(
                              <PagesWrapper>
                                <Component {...pageProps} />
                              </PagesWrapper>
                            )
                          )
                        }
                      </AuthConsumer>
                    </RTL>
                  </ThemeProvider>
                )}
              </SettingsConsumer>
            </SettingsProvider>
          </AuthProvider>
        </LocalizationProvider>
      </ReduxProvider>
    </CacheProvider>
  );
};

export default App;
