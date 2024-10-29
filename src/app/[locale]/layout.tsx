import { Poppins } from "@next/font/google";
import { Metadata } from "next";
import { ReduxProvider } from "@/src/providers/ReduxProvider";
import ToastProvider from "@/src/providers/ToastProvider";
import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { AOSInit } from "@/src/useAos";
import CssBaseline from "@mui/material/CssBaseline";
import "react-photo-view/dist/react-photo-view.css";

import "../../globals.css";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import {
  StyledEngineProvider,
  ThemeProvider as MuiProvider,
} from "@mui/material/styles";
import theme from "@/src/app/theme";
import { cn } from "@/src/utils/cn";
import React from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.png",
  },
  title:
    "Hubert Miernik | Next.js & React Developer - Building Dynamic Web Experiences",
  description:
    "Skilled developer specializing in Next.js and React. Passionate about creating responsive, high-performance web applications. Using React, Next, TypeScript, TailwindCSS, and modern frontend practices. Explore a portfolio featuring interactive web projects, mobile apps, and AI-powered tools. Let's bring your vision to life with innovative web solutions.",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <AOSInit />
      <body className={cn("bg-backgroundPrimary", poppins.className)}>
        <NextIntlClientProvider messages={messages}>
          <StyledEngineProvider injectFirst>
            <MuiProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <ReduxProvider>
                <ToastProvider>
                  <Header />
                  <div className={"mt-[4rem]"}>{children}</div>
                  <Footer />
                </ToastProvider>
              </ReduxProvider>
            </MuiProvider>
          </StyledEngineProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
