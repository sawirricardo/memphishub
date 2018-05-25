import Link from 'next/link';
import { Item , Label, Container, Card } from 'semantic-ui-react';
import EventCard from './EventCard';
import "isomorphic-unfetch";

const EventList = ({events}) => {

    return (
            <Card.Group itemsPerRow={3}>
            {events.map((event, i) => {
                    if (events[i].logo != null) {
                        return (
                            
                                <EventCard
                                    key={events[i].id}
                                    eventid={events[i].id}
                                    eventname={events[i].name.text}
                                    description={events[i].description.text}
                                    startdate={events[i].start.local}
                                    image={events[i].logo.url}
                                />
                            
                        )
                    } else {
                        return (
                            <EventCard
                                key={events[i].id}
                                eventid={events[i].id}
                                eventname={events[i].name.text}
                                description={events[i].description.text}
                                startdate={events[i].start.local}
                                image=""
                            />
                        ) 
                    }
                } 
            )}
            </Card.Group>
            
        
    )
}

export default EventList;