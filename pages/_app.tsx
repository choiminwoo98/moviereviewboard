import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Header from "@/components/header";

export default function App({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps) {
    console.log(session);
    return (
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    );
}
