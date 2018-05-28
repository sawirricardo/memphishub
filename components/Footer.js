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
            <Container textAlign='center'>
                <Grid columns={4} divided stackable inverted>
                    <Grid.Row>
                        <Grid.Column>
                            <Header inverted as='h4' content='Group 1' />
                            <List link inverted>
                                <List.Item as='a'>Link One</List.Item>
                                <List.Item as='a'>Link Two</List.Item>
                                <List.Item as='a'>Link Three</List.Item>
                                <List.Item as='a'>Link Four</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column>
                            <Header inverted as='h4' content='Group 2' />
                            <List link inverted>
                                <List.Item as='a'>Link One</List.Item>
                                <List.Item as='a'>Link Two</List.Item>
                                <List.Item as='a'>Link Three</List.Item>
                                <List.Item as='a'>Link Four</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column>
                            <Header inverted as='h4' content='Group 3' />
                            <List link inverted>
                                <List.Item as='a'>Link One</List.Item>
                                <List.Item as='a'>Link Two</List.Item>
                                <List.Item as='a'>Link Three</List.Item>
                                <List.Item as='a'>Link Four</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column>
                            <Header inverted as='h4' content='An Initiative from ThrivingCities' />
                            <p>MemphisHub is an initiative from ThrivingCities Group to help communities in Memphis</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Divider inverted section />
                <Image src='../static/MemphisHubLogo.svg' centered size='small' />
                <List horizontal inverted divided link>
                    <List.Item as='a' href='#'>Site Map</List.Item>
                    <Link href="/contactus" passHref><List.Item as='a' href='#'>Contact Us</List.Item></Link>
                    <List.Item as='a' href='#'>Terms and Conditions</List.Item>
                    <Link href="/privacypolicy" passHref><List.Item as='a' href='#'>Privacy Policy</List.Item></Link>
                </List>
            </Container>
        </Segment>
    )
}

export default Footer;