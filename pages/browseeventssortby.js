import React from 'react';
import Link from 'next/link'
import Layout from '../components/Layout';
import EventList from '../components/EventList';
import { Card, Header, Segment, Button, Divider, Menu, Container, Grid } from 'semantic-ui-react';
import 'isomorphic-unfetch';

const BrowseEventsSortedBy = (props) => {
    const { events } = props;
    const areThereMuchEvents = events.pagination.page_size < events.pagination.object_count;
    return(
        <Layout title={`${props.url.query.sort_by} events in Memphis | MemphisHub`}>
            <Grid centered>
                <Grid.Row>
                    <Header as="h1">Showing {areThereMuchEvents ? events.pagination.page_size : events.pagination.object_count} events from {props.events.pagination.object_count} events</Header>
                </Grid.Row>
                <Grid.Row>
                <Menu text>
                    <Menu.Item header>Sort By</Menu.Item>
                    <Link href="/browseeventssortby?sort_by=best" passHref>
                        <Menu.Item name='Popularity'/>
                    </Link>
                    <Link href="/browseeventssortby?sort_by=-date" passHref>
                        <Menu.Item name='Upcoming' />
                    </Link>
                    <Link href="/browseeventssortby?sort_by=distance" passHref>
                        <Menu.Item name='Distance' />
                    </Link>
                </Menu>
                </Grid.Row>
            </Grid>
            <Divider />
            <EventList events={props.events.events}/>
        </Layout>
    )
}

BrowseEventsSortedBy.getInitialProps = async ( { query: { sort_by } } ) => {
    const res = await fetch(
        `https://www.eventbriteapi.com/v3/events/search/?sort_by=${sort_by}&location.address=Memphis&token=EUIWCJ4L7GSSIWXCPBCK`
    );
    const json = await res.json();
    return { events: json };
};

export default BrowseEventsSortedBy;