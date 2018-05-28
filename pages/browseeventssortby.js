import React from 'react';
import Layout from '../components/Layout';
import EventList from '../components/EventList';
import { Card, Header, Segment } from 'semantic-ui-react';
import 'isomorphic-unfetch';

const BrowseEventsSortedBy = (props) => {
    const areThereMuchEvents = events.pagination.page_size < events.pagination.object_count;
    return(
        <Layout title={`${props.url.query.sort_by} events in Memphis | MemphisHub`}>
            <Segment clearing>
                <Header as="h1" floated='left'>Browse Events</Header>
                <Header as="h1" floated='right'>Showing {areThereMuchEvents ? events.pagination.page_size : events.pagination.object_count} events from {props.events.pagination.object_count} events</Header>
            </Segment>
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