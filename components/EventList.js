import Link from 'next/link';
import { Item , Label, Container, Card } from 'semantic-ui-react';
import EventCard from './EventCard';

const EventList = ({events}) => {

    return (
            <Card.Group stackable itemsPerRow={4}>
            {events.map((event, i) => {
                    if (events[i].logo != null) {
                        return (
                                <EventCard
                                    key={events[i].id}
                                    eventid={events[i].id}
                                    eventname={events[i].name.text}
                                    description={events[i].description.text}
                                    startdate={events[i].start.local}
                                    enddate={events[i].end.local}
                                    image={events[i].logo.url}
                                    isfree={events[i].is_free}
                                    venue={events[i].venue_id}
                                    organizer={events[i].organizer_id}
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
                                enddate={events[i].end.local}
                                image="http://musclecarevents.org/wp-content/uploads/2016/07/NoImageAvailable.jpg"
                                isfree={events[i].is_free}
                                venue={events[i].venue_id}
                                organizer={events[i].organizer_id}
                            />
                        ) 
                    }
                } 
            )}
            </Card.Group>
            
        
    )
}

export default EventList;