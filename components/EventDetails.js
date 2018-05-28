import React from 'react';
import { Header, Container, List } from 'semantic-ui-react';

class EventDetails extends React.Component {
    constructor( props ) {
        super (props);
        this.state={
            startdate: props.startdate || "",
            enddate: props.enddate || "",
            venue: props.venue || "" || {}
        }
    }
    componentDidMount() {
        fetch(`https://www.eventbriteapi.com/v3/venues/${this.state.venue}/?token=HXRINDBW5AI3OYZSKFKZ`)
            .then(response => response.json())
            .then(eventvenue => this.setState({ venue: eventvenue }))
    }

    render() {
        const { startdate, enddate, venue } = this.state;

        const getDateWhenTheEventStart = new Date(Date.parse(startdate));
        const theDateWhenTheEventStart = getDateWhenTheEventStart.toDateString();
        const theHourWhenTheEventStart = getDateWhenTheEventStart.getHours();
        const theMinuteWhenTheEventStart = getDateWhenTheEventStart.getMinutes();

        const getDateWhenTheEventEnd = new Date(Date.parse(enddate));
        const theDateWhenTheEventEnd = getDateWhenTheEventEnd.toDateString();
        const theHourWhenTheEventEnd = getDateWhenTheEventEnd.getHours();
        const theMinuteWhenTheEventEnd = getDateWhenTheEventEnd.getMinutes();

        function checkTime(time) {
            if (time < 10) {
                time = '0' + time
            }
            return time;
        }

        return(
            <React.Fragment>
                <Container text>
                <Header as="h1">Date and Time</Header>
                    <p><strong>Starts:</strong> {theDateWhenTheEventStart} | {checkTime(theHourWhenTheEventStart)}:{checkTime(theMinuteWhenTheEventStart)}</p>
                    <p><strong>Ends:</strong> {theDateWhenTheEventEnd} | {checkTime(theHourWhenTheEventEnd)}:{checkTime(theMinuteWhenTheEventEnd)}</p>

                <Header as="h1">Location</Header>
                    <List>
                        <List.Item>{venue.name}</List.Item>
                        {venue.address && venue.address.address_1 != undefined && <List.Item>{venue.address.address_1}</List.Item>}
                        {venue.address && venue.address.localized_area_display != undefined && <List.Item>{venue.address.localized_area_display}</List.Item>}
                    </List>
                </Container>
            </React.Fragment>
        )
    }
}

export default EventDetails;