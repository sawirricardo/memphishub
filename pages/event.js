import React from 'react';
import Layout from '../components/Layout';
import EventSummary from '../components/EventSummary';
import EventDescription from '../components/EventDescription';
import EventActionSection from '../components/EventActionSection';
import EventMap from '../components/EventMap';

const EventPage = (props) => {
    return (
        <Layout title={`${props.events.name.text} | MemphisHub`}>
            <EventSummary 
                eventid={props.events.id}
                name={props.events.name.text}
                startdate={props.events.start.local}
                enddate={props.events.end.local}
                isfree={props.events.is_free}
                image={props.events.logo.url}
                organizer={props.events.organizer_id}
                venue={props.events.venue_id}
            />
            <EventActionSection
                eventid={props.events.id}
            />
            <EventDescription 
                description={props.events.description.text} 
            />
            <EventMap
                venue={props.events.venue_id}
            />
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