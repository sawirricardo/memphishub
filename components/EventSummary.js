import React from 'react';
import Link from 'next/link';
import { Image, Header, Grid, Label, Button, Modal } from 'semantic-ui-react'
import MailchimpForRegisteringEvents from './MailchimpForRegisteringEvents';

class EventSummary extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            id:props.eventid || "",
            name:props.name || "",
            startdate:props.startdate || "",
            enddate: props.enddate || "",
            image:props.image || "",
            isfree: props.isfree,
            organizer: props.organizer || "",
            venue: props.venue || ""
        }
    }
    
    
    componentDidMount () {
    fetch(`https://www.eventbriteapi.com/v3/organizers/${this.state.organizer}/?token=EUIWCJ4L7GSSIWXCPBCK`)
        .then(response => response.json())
        .then(organizername => this.setState({organizer: organizername.name}));

        fetch(`https://www.eventbriteapi.com/v3/venues/${this.state.venue}/?token=HXRINDBW5AI3OYZSKFKZ`)
        .then(response => response.json())
        .then(eventvenue => this.setState({venue: eventvenue}))
    }
            
    
    render() {
        const { name, startdate, enddate, description, image, isfree, organizer, venue, id } = this.state;

        const getDateWhenTheEventStart = new Date(Date.parse(startdate));
        const TheDateWhenTheEventStart = getDateWhenTheEventStart.toDateString();
        const TheHourWhenTheEventStart = getDateWhenTheEventStart.getHours();

        const getDateWhenTheEventEnd = new Date(Date.parseeEnddate);
        const TheDateWhenTheEventEnd = getDateWhenTheEventEnd.toDateString();
        const TheHourWhenTheEventEnd = getDateWhenTheEventEnd.getHours();
        return (
            <React.Fragment>
                <Grid stackable>
                    <Grid.Column width={9}>
                        <Image size='massive' src={image} />
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Header as="h1">{name}</Header>
                        <Header as="h3">{`${TheDateWhenTheEventStart} | ${organizer}`}</Header>
                        <p>{`${venue.name}, ${venue.address != null? venue.address.address_1 : "Online"}`}</p>
                        <Label color={isfree ? "red" : "yellow"} tag>{isfree ? "Free" : "Paid"}</Label>
                    </Grid.Column>
                </Grid>
            </React.Fragment>
        )
    }
    
}

export default EventSummary;