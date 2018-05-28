import React from 'react';
import Link from 'next/link'
import Layout from '../components/Layout';
import EventList from '../components/EventList';
import { Card, Header, Segment, Button, Divider } from 'semantic-ui-react';
import 'isomorphic-unfetch';

const BrowseEventsSortedBy = (props) => {
    const { events } = props;
    const areThereMuchEvents = events.pagination.page_size < events.pagination.object_count;
    return(
        <Layout title={`${props.url.query.sort_by} events in Memphis | MemphisHub`}>
            <Segment clearing basic>
                <Header as="h1" floated="left">Showing {areThereMuchEvents ? events.pagination.page_size : events.pagination.object_count} events from {props.events.pagination.object_count} events</Header>
                <Button.Group floated="right">
                    <Link href="/browseeventssortby?sort_by=best" passHref>
                        <Button color='green'>Popularity</Button>
                    </Link>
                    <Button.Or />
                    <Link href="/browseeventssortby?sort_by=-date" passHref>
                        <Button color='yellow'>Upcoming</Button>
                    </Link>
                    <Button.Or />
                    <Link href="/browseeventssortby?sort_by=distance" passHref>
                        <Button color='yellow'>Distance</Button>
                    </Link>
                </Button.Group>
            </Segment>
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