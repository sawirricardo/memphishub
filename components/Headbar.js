import Link from 'next/link';
import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    Menu,
    Responsive,
    Segment,
    Sidebar } from 'semantic-ui-react'
import index from 'react-lazy-hero';

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

const DesktopHeadbar = ( props ) => {
  return (
      <React.Fragment>
        <Head>
          <link rel='stylesheet' href='../static/nprogress.css' />
        </Head>
        <Responsive {...Responsive.onlyComputer}>
            <Menu
              fixed="top"
              inverted
              size='huge'
            >
              <Container>
                  <Link href='/' prefetch passHref>
                      <Menu.Item as='a'>
                          <Image
                            style={{height: "2em"}}
                            src="../static/MemphisHubLogo.svg"
                          />
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
            {props.children}
        </Responsive>
      </React.Fragment>
  )
}

class MobileHeadbar extends React.Component {

  state = {sidebarOpened : false, }

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const { sidebarOpened, zIndex } = this.state;
    return (
      <React.Fragment>
        <Head>
          <link rel="stylesheet" href="../static/nprogress.css" />
        </Head>
        <Responsive {...Responsive.onlyMobile}>
          <Sidebar.Pushable>
            <Sidebar as={Menu} animation="push" inverted visible={sidebarOpened} vertical>
              <Link href="/" passHref>
                <Menu.Item ><Image style={{height: "4em"}} src="../static/MemphisHubLogo.svg" /></Menu.Item>
              </Link>
              <Link href="/about" passHref>
                <Menu.Item as="a">About Thriving Cities</Menu.Item>
              </Link>
              <Link href="/browsecategories" passHref>
                <Menu.Item as="a"><Icon name="search" />Browse by Categories</Menu.Item>
              </Link>
            </Sidebar>
            <Sidebar.Pusher dimmed={sidebarOpened} onClick={this.handlePusherClick} style={{ minHeight: '100vh' }}>
              <Segment inverted textAlign='center' style={{ minHeight: 10, padding: '1em 0em' }} vertical>
              <Menu inverted size="huge">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Link href="/" prefetch passHref>
                  <Menu.Item as="a" position="right">
                    <Image style={{ height: "2em" }} src="../static/MemphisHubLogo-notext.svg" />
                  </Menu.Item>
                </Link>
              </Menu>
              </Segment>
              {this.props.children}
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Responsive>
      </React.Fragment>
    );
  }
}

const Headbar = ( { children }) => {
  return(
    <React.Fragment>
      <DesktopHeadbar>{children}</DesktopHeadbar>
      <MobileHeadbar>{children}</MobileHeadbar>
    </React.Fragment>
  )
}

export default Headbar


