import React from 'react';
import Layout from '../components/Layout';
import EventList from '../components/EventList';
import { Card } from 'semantic-ui-react';
import 'isomorphic-unfetch';

const BrowseEvents = ( {events} ) => {
    
    return(
        <Layout title="Go Make some noise there">
            <EventList events={events}/>
        </Layout>
    )
}

BrowseEvents.getInitialProps = async () => {
    
    const res = await fetch(
        "https://www.eventbriteapi.com/v3/events/search/?location.address=Memphis&token=EUIWCJ4L7GSSIWXCPBCK"
    );
    const json = await res.json();
    return { events: json.events };
};

export default BrowseEvents;