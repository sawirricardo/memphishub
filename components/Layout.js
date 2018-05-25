import Head from 'next/head';
import { Container } from 'semantic-ui-react';

import Header from './Header';

const Layout = ({ children, title = ''}) => (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link
                    rel="stylesheet"
                    href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
                />
                <link rel='icon' type='image/x-icon' href='/static/favicon.ico' />
            </Head>
            <Header />
            <Container style={{paddingTop: "7em"}}>{children}</Container>
        </div>
)

export default Layout;