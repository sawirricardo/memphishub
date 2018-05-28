import Link from 'next/link';
import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import {Container, Divider, Dropdown, Grid, Icon, Image, List, Menu, Segment, Visibility} from 'semantic-ui-react'

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

const menuStyle = {
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    // marginBottom: '1em',
    // marginTop: '1em',
    transition: 'box-shadow 0.5s ease, padding 0.5s ease',
}

const fixedMenuStyle = {
    backgroundColor: '#111',
    // border: '1px solid #ddd',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}


class HeaderBar extends React.Component{
    state = {
        menuFixed: false
    }

    stickTopMenu = () => this.setState({ menuFixed: true })

    unStickTopMenu = () => this.setState({ menuFixed: false })

    render() {
        const { menuFixed, overlayFixed } = this.state
        return (
            <React.Fragment>
                <Head>
                    <link rel='stylesheet' href='../static/nprogress.css' />
                </Head>
                <Visibility
                    onBottomPassed={this.stickTopMenu}
                    onBottomVisible={this.unStickTopMenu}
                    once={false}
                >
                    <Menu
                        borderless
                        fixed={menuFixed && 'Top'}
                        style={menuFixed ? fixedMenuStyle : menuStyle}
                        inverted
                    >
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
                            <Link href='/browsecategories' passHref>
                        <Menu.Item as='a' header>Browse Categories</Menu.Item>
                    </Link>
                    </Container>
                </Menu>
                </Visibility>
            </React.Fragment>
        )
    }
} 
    


export default HeaderBar;
