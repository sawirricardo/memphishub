import React from 'react';
import Link from 'next/link';
import { Image, Header, Grid, Label, Button, Modal } from 'semantic-ui-react'
import MailchimpForRegisteringEvents from './MailchimpForRegisteringEvents';
import moment from 'moment';

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
        }
    }
    
    
    componentDidMount () {
    fetch(`https://www.eventbriteapi.com/v3/organizers/${this.state.organizer}/?token=EUIWCJ4L7GSSIWXCPBCK`)
        .then(response => response.json())
        .then(organizername => this.setState({organizer: organizername.name}));
    }
            
    
    render() {
        const { name, startdate, description, image, isfree, organizer, id } = this.state;
        const getDateWhenTheEventStart = new Date(Date.parse(startdate));
        return (
            <React.Fragment>
                <Grid stackable>
                    <Grid.Column floated="left" width={10}>
                        <Image size='massive' src={image} fluid/>
                    </Grid.Column>
                    <Grid.Column floated="right" width={6}>
                        <Header as="h1" dividing>{name}</Header>
                        <Header as="h3">{organizer != null ? `Organized by ${organizer}` : ""}</Header>
                        <Header as="h3">Happening {moment(getDateWhenTheEventStart).fromNow()}</Header>
                        <Label color={isfree ? "red" : "yellow"} tag>{isfree ? "Free" : "Paid"}</Label>
                    </Grid.Column>
                </Grid>
            </React.Fragment>
        )
    }
    
}

export default EventSummary;