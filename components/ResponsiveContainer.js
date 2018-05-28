import Link from 'next/link';
import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import PropTypes from 'prop-types';
import NProgress from 'nprogress';
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
    Sticky } from 'semantic-ui-react'

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

class DesktopContainer extends React.Component {
    state = { }

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    render() {
        const { children } = this.props
        const { fixed } = this.state
        
        return (
            <React.Fragment>
            <Head>
                <link rel='stylesheet' href='../static/nprogress.css' />
            </Head>
            <Responsive {...Responsive.onlyComputer}>
                <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
                    <Segment inverted textAlign='center' style={{ minHeight: 25, padding: '1em 0em' }} vertical>
                        <Menu
                            fixed={fixed ? 'top' : null}
                            inverted={!fixed}
                            pointing={!fixed}
                            secondary={!fixed}
                            size='Big'
                        >
                            <Container>
                                <Link href='/' prefetch passHref>
                                    <Menu.Item as='a' style={{paddingBottom:".5em"}}>
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
                    </Segment>
                </Visibility>
                {children}
            </Responsive>
            </React.Fragment>
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
}

class MobileContainer extends React.Component {
  state = {};

  handlePusherClick = () => {
    const { sidebarOpened } = this.state;

    if (sidebarOpened) this.setState({ sidebarOpened: false });
  };

  handleToggle = () =>
    this.setState({ sidebarOpened: !this.state.sidebarOpened });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <React.Fragment>
        <Head>
          <link rel="stylesheet" href="../static/nprogress.css" />
        </Head>
        <Responsive {...Responsive.onlyMobile}>
          <Sidebar.Pushable>
            <Sidebar
              as={Menu}
              animation="uncover"
              inverted
              vertical
              visible={sidebarOpened}
            >
              <Link href="/" prefetch passHref>
                <Menu.Item as="a" header>
                  <Image size="small" src="../static/MemphisHubLogo.svg" />
                </Menu.Item>
              </Link>
              <Link href="/about" prefetch passHref>
                <Menu.Item as="a" header>
                  About
                </Menu.Item>
              </Link>
              <Link href="/browsecategories" passHref>
                <Menu.Item as="a" header>
                  Browse Categories
                </Menu.Item>
              </Link>
            </Sidebar>
            
            <Sidebar.Pusher
              dimmed={sidebarOpened}
              onClick={this.handlePusherClick}
              style={{ minHeight: "100vh" }}
            >
                  <Segment
                    inverted
                    textAlign="center"
                    style={{ minHeight: 50, padding: "1em 0em" }}
                    vertical
                  >
                    <Container>
                      <Menu inverted pointing secondary size="large">
                        <Menu.Item onClick={this.handleToggle}>
                          <Icon name="sidebar" />
                        </Menu.Item>
                      </Menu>
                    </Container>
                  </Segment>
              {children}
            </Sidebar.Pusher>
            
          </Sidebar.Pushable>
        </Responsive>
      </React.Fragment>
    );
  }
}

MobileContainer.propTypes = {
    children: PropTypes.node,
}

const ResponsiveContainer = ({children}) => (
    <React.Fragment>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </React.Fragment>
)

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
}

export default ResponsiveContainer;
// class HeaderBar extends React.Component{
//     state = {
//         menuFixed: false
//     }

//     stickTopMenu = () => this.setState({ menuFixed: true })

//     unStickTopMenu = () => this.setState({ menuFixed: false })

//     render() {
//         const { menuFixed, overlayFixed } = this.state
//         return (
//             <React.Fragment>
//                 <Head>
//                     <link rel='stylesheet' href='../static/nprogress.css' />
//                 </Head>
//                 <Visibility
//                     onBottomPassed={this.stickTopMenu}
//                     onBottomVisible={this.unStickTopMenu}
//                     once={false}
//                 >
//                     <Menu
//                         borderless
//                         fixed={menuFixed && 'Top'}
//                         style={menuFixed ? fixedMenuStyle : menuStyle}
//                         inverted
//                     >
//                     <Container>
//                     <Link href='/' prefetch passHref>
//                         <Menu.Item as='a' header>
//                         <Image
//                                 size="small"
//                                 src="../static/MemphisHubLogo.svg"
//                             />
                        
//                         </Menu.Item>
//                     </Link>
//                     <Link href='/about' prefetch passHref>
//                         <Menu.Item as='a' header>About</Menu.Item>
//                     </Link>
//                             <Link href='/browsecategories' passHref>
//                         <Menu.Item as='a' header>Browse Categories</Menu.Item>
//                     </Link>
//                     </Container>
//                 </Menu>
//                 </Visibility>
//             </React.Fragment>
//         )
//     }
// } 
    



