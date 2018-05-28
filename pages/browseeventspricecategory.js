import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import EventList from '../components/EventList';
import { Card, Header, Segment, Button } from 'semantic-ui-react';
import 'isomorphic-unfetch';

const BrowseEventsFreeOrPaid = (props) => {
    
    return(
        <Layout title={`${props.url.query.price} events in Memphis | MemphisHub`}>
            <Segment clearing>
                <Header as="h1" floated="left">Browse {props.url.query.price} events | Showing {props.events.pagination.page_size} events from {props.events.pagination.object_count} events</Header>
                <Button.Group floated="right">
                    <Link href="/browseeventspricecategory?price=free" passHref>
                        <Button color='red'>Top Free Events</Button>
                    </Link>
                    <Button.Or />
                    <Link href="/browseeventspricecategory?price=paid" passHref>
                        <Button color='yellow'>Top Paid Events</Button>
                    </Link>
                </Button.Group>
            </Segment>
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