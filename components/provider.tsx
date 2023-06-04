"use client";

import { SessionProvider, useSession } from "next-auth/react";
import type { AppProps } from "next/app"

interface Props {
    children: React.ReactNode;
    // pageProps: any;
}

const provider = ({ children}: Props) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default provider