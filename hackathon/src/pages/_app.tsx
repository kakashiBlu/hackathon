import { type AppType } from "next/app";
import { Inter } from "next/font/google";
import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import { createTheme, MantineProvider } from '@mantine/core';
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`font-sans ${inter.variable}`}>
      <MantineProvider theme={{ primaryShade: 6 }}>
      <Component {...pageProps} />
    </MantineProvider>
    </main>
  );
};

export default MyApp;
