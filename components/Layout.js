import Head from 'next/head';
import { Container } from 'semantic-ui-react';

import HeaderBar from './HeaderBar';

const Layout = ({ children, title = ''}) => (
        <React.Fragment>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link
                    rel="stylesheet"
                    href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
                />
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                <link rel='icon' type='image/x-icon' href='../static/favicon.ico' />
            </Head>
            <HeaderBar />
            <Container style={{paddingTop: "2em"}}>{children}</Container>
            
        </React.Fragment>
)

export default Layout;