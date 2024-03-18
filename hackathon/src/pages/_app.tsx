import { type AppType } from "next/app";
import { Inter } from "next/font/google";
import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import { createTheme, MantineProvider } from '@mantine/core';
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react"
import {type Session } from "next-auth";
import '@mantine/dropzone/styles.css';
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const MyApp: AppType <{session : Session | null}>= ({
  Component,
  pageProps : { session, ...pageProps},
}) => {
  return (
    <main className={`font-sans ${inter.variable}`}>
      <SessionProvider session={session}>
      <MantineProvider theme={{ primaryShade: 6 }}>
      <Component {...pageProps} />
    </MantineProvider>
    </SessionProvider>
    </main>
  );
};

export default MyApp;
