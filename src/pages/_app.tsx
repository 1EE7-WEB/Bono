import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { useRouter } from "next/router";
import Layout from "~/components/layout/Layout";
import { ClerkProvider } from "@clerk/nextjs";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "~/components/theme/theme-provider";

// i chose pages router here as its integration with tRPC is seemless.

const MyApp: AppType = ({ Component, pageProps }) => {
  const pathname = useRouter();

  console.log(pathname);
  // if pathname is landing (landing page) or 1ee7 (organization landing page) dont use layout, else use layout.
  return pathname.pathname === "/landing" ? (
    <ClerkProvider>
      <Component {...pageProps} />
    </ClerkProvider>
  ) : (
    <ClerkProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <AnimatePresence wait={true}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AnimatePresence>
      </ThemeProvider>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
