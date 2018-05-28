import React from 'react';
import Layout from '../components/Layout';
import EventList from '../components/EventList';
import { Card, Header } from 'semantic-ui-react';
import 'isomorphic-unfetch';

const BrowseEventsByCategories = ( props ) => {
    const { events } = props
    const areThereMuchEvents = events.pagination.page_size < events.pagination.object_count
    return(
        <Layout title={`${events.pagination.object_count}Events in Memphis`}>
            <Header as="h1">
                Showing {areThereMuchEvents ? events.pagination.page_size : events.pagination.object_count} events from { events.pagination.object_count} total events</Header>
            <EventList events={events.events} />
        </Layout>
    )
}

BrowseEventsByCategories.getInitialProps = async ({ query: {categories} } ) => {
    const res = await fetch(
        `https://www.eventbriteapi.com/v3/events/search/?sort_by=best&location.address=Memphis&categories=${categories}&token=EUIWCJ4L7GSSIWXCPBCK`
    );
    const json = await res.json();
    return { events: json };
};

export default BrowseEventsByCategories;