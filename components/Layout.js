import Head from 'next/head';
import Link from 'next/link';
import { Container, Segment, Grid, Header, List, Responsive } from 'semantic-ui-react';
import Footer from './Footer';
import Headbar from './Headbar';

const Layout = ({ children, title = ''}) => {
    return (
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
            <Responsive {...Responsive.onlyComputer}>
                <Headbar>
                    <Container style={{paddingTop: "10vh", paddingBottom: "4em"}}>{children}</Container>
                    <Footer />
                </Headbar>
            </Responsive>
            <Responsive {...Responsive.onlyMobile}>
                <Headbar>
                    <Container style={{paddingTop: "5vh", paddingBottom: "1vh"}}>{children}</Container>
                    <Footer />
                </Headbar>
            </Responsive>
        </React.Fragment>
    )
}

export default Layout;