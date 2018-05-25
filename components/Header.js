import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import { Menu, Container, Image } from "semantic-ui-react";

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

const Header = () => (
    <React.Fragment>
        <Head>
            <link rel='stylesheet' href='../static/nprogress.css' />
        </Head>
        <Menu inverted fixed='top' size='huge'>
            <Container>
            <Link href='/' prefetch passHref>
                <Menu.Item as='a' header>
                    <Image
                        size="mini"
                    src="../static/logo-thrivingcities.png"
                    />
                    MemphisHub
                </Menu.Item>
            </Link>
            <Link href='/about' prefetch passHref>
                <Menu.Item as='a' header>About</Menu.Item>
            </Link>
            <Link href='/browseevents' prefetch passHref>
                <Menu.Item as='a' header>Browse Events</Menu.Item>
            </Link>
            </Container>
        </Menu>
    </React.Fragment>
)

export default Header;
