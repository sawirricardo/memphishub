import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import EventSummary from '../components/EventSummary';
import EventDescription from '../components/EventDescription';
import EventDetails from '../components/EventDetails'
import EventMap from '../components/EventMap';

import { Segment, Grid, GridRow, Divider, Button, Icon } from 'semantic-ui-react';

const EventPage = (props) => {
    return (
        <Layout title={`${props.events.name.text} | MemphisHub`}>
            <Segment>
            <EventSummary 
                eventid={props.events.id}
                name={props.events.name.text}
                startdate={props.events.start.local}
                enddate={props.events.end.local}
                isfree={props.events.is_free}
                image={props.events.logo != null ? props.events.logo.url : "http://musclecarevents.org/wp-content/uploads/2016/07/NoImageAvailable.jpg"}
                organizer={props.events.organizer_id}
                venue={props.events.venue_id}
            />
            <Divider />
                <Grid stackable reversed='computer'>
                <Grid.Row>
                    <Grid.Column floated="right" width={6} >
                        <Link href={`/checkout?eventid=${props.events.id}`} prefetch passHref>
                            <Button as="a" primary fluid>
                                JOIN THIS EVENT
                            </Button>
                        </Link>
                    </Grid.Column>
                </Grid.Row>
                </Grid>
            <Divider />
            <Grid stackable reversed='computer'>
                <Grid.Row>
                <Grid.Column floated="right" width={6}>
                    <EventDetails 
                        startdate={props.events.start.local}
                        enddate={props.events.end.local}
                        venue={props.events.venue_id}
                    />
                </Grid.Column>
                <Grid.Column floated='left' width={10}>
                    <EventDescription 
                        description={props.events.description.html} 
                    />
                </Grid.Column>
                </Grid.Row>
            </Grid>
            <Divider />
            <EventMap
                venue={props.events.venue_id}
            />
            </Segment>
        </Layout>
    )
}

EventPage.getInitialProps = async ({query:{id}}) => {
    
    const res = await fetch(
        `https://www.eventbriteapi.com/v3/events/${id}/?token=EUIWCJ4L7GSSIWXCPBCK`
    );
    const json = await res.json();

    return { events: json };
};

export default EventPage;