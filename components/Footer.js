import React from 'react';
import Link from 'next/link'
import {
    Container, Divider, Dropdown, Grid, Header, Icon, Image, List, Menu, Segment, Visibility,
} from 'semantic-ui-react'

const Footer = () => {
    return (
        <Segment
            inverted
            style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
            vertical
        >
            <Container textAlign='left'>
                <Grid columns={3} divided stackable inverted>
                    <Grid.Row>
                        <Grid.Column>
                            <Header inverted as='h4' content='Find Events' />
                            <List link inverted>
                                <Link href="/browseeventspricecategory?price=free" passHref>
                                    <List.Item as='a' active>Top Free Events</List.Item>
                                </Link>
                                <Link href="/browseeventspricecategory?price=paid" passHref>
                                    <List.Item as='a' active>Top Paid Events</List.Item>
                                </Link>
                                <Link href="/browseeventsbycategories?categories=103" passHref>
                                    <List.Item as='a' active >Music Events</List.Item>
                                </Link>
                                <Link href="/browsecategories" passHref>
                                    <List.Item as='a' active>All Events</List.Item>
                                </Link>
                                
                            </List>
                        </Grid.Column>
                        <Grid.Column>
                            <Header inverted as='h4' content='Connect with Thriving Group' />
                            <List link inverted>
                                <List.Item content={<a href='http://www.thrivingcities.com/' target="_blank">thrivingcities.com</a>} />
                                <List.Item content={<a href='https://www.facebook.com/thrivingcities' target="_blank">Facebook</a>}/>
                                <List.Item content={<a href='https://twitter.com/thriving_cities' target="_blank">Twitter</a>} />
                                <List.Item content={<a href='http://www.thrivingcities.com/blog' target="_blank">Thriving Cities Blog</a>} />
                            </List>
                        </Grid.Column>
                        <Grid.Column>
                            <Header inverted as='h4' content='MemphisHub' />
                            <p>MemphisHub is an initiative from ThrivingCities Group to help communities in Memphis.</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Divider inverted section />
            </Container>
            <Container textAlign="center">
                <Link href="/" passHref>
                    <Image src='../static/MemphisHubLogo.svg' centered size='small' />
                </Link>
                <br />
                <br />
                <List horizontal inverted divided link>
                    <Link href="/about" passHref><List.Item as='a'>About Us</List.Item></Link>
                    <Link href="/contactus?id=shout" passHref><List.Item as='a'>Contact Us</List.Item></Link>
                    <List.Item as='a' href='#'>Terms and Conditions</List.Item>
                    <Link href="/privacypolicy" passHref><List.Item as='a'>Privacy Policy</List.Item></Link>
                </List>
            </Container>
        </Segment>
    )
}

export default Footer;