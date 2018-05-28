import React from 'react';
import Link from 'next/link';
import { Card, Header, Segment, Button, Grid, Container } from 'semantic-ui-react';
import EventCard from './EventCard';

const GetFreeEventList = (props) => {
    let list = []
    for (let i = 0; i < 6; i++) {
        list.push(
            <EventCard
                key={props.event[i].id}
                eventid={props.event[i].id}
                eventname={props.event[i].name.text}
                description={props.event[i].description.text}
                startdate={props.event[i].start.local}
                enddate={props.event[i].end.local}
                image={props.event[i].logo != null || props.event[i].logo != undefined  ? props.event[i].logo.url : "http://musclecarevents.org/wp-content/uploads/2016/07/NoImageAvailable.jpg"}
                isfree={props.event[i].is_free}
                venue={props.event[i].venue_id}
                organizer={props.event[i].organizer_id}
            />
        )
    } 
    return list;
}

class EventListFree extends React.Component {
    constructor () {
        super();
        this.state={
            event: []
        }
    }

    componentDidMount() {
        fetch(`https://www.eventbriteapi.com/v3/events/search/?sort_by=best&location.address=Memphis&price=free&token=EUIWCJ4L7GSSIWXCPBCK`)
          .then(response => response.json())
          .then(event => this.setState({ event: event.events }));
    }

    render() {
        
        return (
            <React.Fragment> 
                <Container>  
                <Grid>
                    <Grid.Row>
                        <Container textAlign='center'>   
                            <Header as="h1" textAlign='center'>Free Events in Memphis</Header> 
                        </Container> 
                    </Grid.Row>
                    <Grid.Row>  
                        <Card.Group stackable itemsPerRow={3}>
                            {this.state.event.length > 0 ? <GetFreeEventList event={this.state.event}/> : <Header as="h3">Loading Events...</Header>}
                        </Card.Group>
                    </Grid.Row>
                    <Grid.Row>
                        <Container textAlign='center'> 
                                <Link href='/browseeventspricecategory?price=free' passHref>
                                <Button>View All Free Events</Button>
                            </Link>
                        </Container>
                    </Grid.Row>
                </Grid>
                </Container>
            </React.Fragment>
        )
    }
}



export default EventListFree;