import React from 'react';
import Link from 'next/link';
import { Image, Header, Grid, Label, Button, Modal } from 'semantic-ui-react'
import MailchimpForRegisteringEvents from './MailchimpForRegisteringEvents';

class EventSummary extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            name:props.name || "",
            startdate:props.startdate || "",
            image:props.image || "",
            isfree: props.isfree,
            organizer: props.organizer || ""
        }
    }
    
    
    componentDidMount () {
    fetch(`https://www.eventbriteapi.com/v3/organizers/${this.state.organizer}/?token=EUIWCJ4L7GSSIWXCPBCK`)
        .then(response => response.json())
        .then(organizername => this.setState({organizer: organizername.name}))
        ;
    }
            
    
    render() {
        const { name, startdate, description, image, isfree, organizer } = this.state;
        const getDateWhenTheEventStart = new Date(Date.parse(startdate));
        const TheDateWhenTheEventStart = getDateWhenTheEventStart.toDateString();
        return (
            <React.Fragment>
                <Grid stackable>
                    <Grid.Column width={9}>
                        <Image size='massive' src={image} />
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Header as="h1">{name}</Header>
                        <Header as="h3">{`${TheDateWhenTheEventStart} | ${organizer}`}</Header>
                        <Label color={isfree ? "red" : "yellow"} tag>{isfree ? "Free" : "Paid"}</Label>
                        
                    </Grid.Column>
                </Grid>
            </React.Fragment>
        )
    }
    
}

export default EventSummary;