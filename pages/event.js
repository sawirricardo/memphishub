import React from 'react';
import Layout from '../components/Layout';
import EventSummary from '../components/EventSummary';
import EventDescription from '../components/EventDescription';

const EventPage = (props) => {
    return (
        <Layout title={`${props.events.name.text} in MemphisHub`}>
            <p>{JSON.stringify(props.events, '\t', 2)}</p>
            <EventSummary 
                name={props.events.name.text}
                startdate={props.events.start.local}
                isfree={props.events.is_free}
                image={props.events.logo.url}
            />
            <EventDescription 
                description={props.events.description.text} 
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