
import '@styles/globals.css'
import Nav from "@components/nav"
import Provider from "@components/provider"
import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app"
import { Session } from "next-auth";

export const metadata = {
    title: 'Promptopia',
    description: 'Discover & Share AI Prompts'
}

const RootLayout = ({ children }: any) => {
    return (
        <html lang='en'>
            <body>
                <Provider>
                    <div className="main">
                        <div className="gradient" />
                    </div>
                    <main className="app">
                        <Nav />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout