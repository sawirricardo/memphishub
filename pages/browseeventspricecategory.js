import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import EventList from '../components/EventList';
import { Card, Header, Segment, Button, Divider, Grid, Menu } from 'semantic-ui-react';
import 'isomorphic-unfetch';

const BrowseEventsFreeOrPaid = (props) => {
    
    return(
        <Layout title={`${props.url.query.price} events in Memphis | MemphisHub`}>
            <Grid centered>
                <Grid.Row>
                    <Header as="h1">Browse {props.url.query.price} events | Showing {props.events.pagination.page_size} events from {props.events.pagination.object_count} events</Header>
                </Grid.Row>
                <Grid.Row>
                    <Menu text>
                        <Menu.Item header>Sort By</Menu.Item>
                        <Link href="/browseeventspricecategory?price=free" passHref>
                            <Menu.Item>Top Free Events</Menu.Item>
                        </Link>
                        
                        <Link href="/browseeventspricecategory?price=paid" passHref>
                            <Menu.Item>Top Paid Events</Menu.Item>
                        </Link>
                    </Menu>
                </Grid.Row>
            </Grid>
            <Divider />
            <EventList events={props.events.events}/>
            
        </Layout>
    )
}

BrowseEventsFreeOrPaid.getInitialProps = async ( { query: { price } } ) => {
    const res = await fetch(
        `https://www.eventbriteapi.com/v3/events/search/?sort_by=best&location.address=Memphis&price=${price}&token=EUIWCJ4L7GSSIWXCPBCK`
    );
    const json = await res.json();
    return { events: json };
};

export default BrowseEventsFreeOrPaid;