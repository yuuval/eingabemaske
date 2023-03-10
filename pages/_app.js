import Header from "@components/Header"
import useSession from "@lib/session"
import "bootstrap/dist/css/bootstrap.min.css"
import {useRouter} from "next/router";
import SSRProvider from 'react-bootstrap/SSRProvider'
import Link from "next/link"
import "./_app.css"

export default function App({ Component, pageProps }) {
    const router = useRouter()

    const session = useSession()
    const newPageProps = {
        ...pageProps,
        session
    }
    return (
        <>
            <Header>
                <Link href="/" passHref>
                    app
                </Link>
            </Header>

            <main className="page">
                <SSRProvider>
                <Component {...newPageProps} />
                </SSRProvider>
            </main>
        </>
    )
}