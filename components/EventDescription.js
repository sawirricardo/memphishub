import React from 'react';
import { Header } from 'semantic-ui-react';

const EventDescription = (props) => {
    const { description } = props;
    return (
        <React.Fragment>
            <Header as="h3">About this Event</Header>
            <p>{description}</p>
        </React.Fragment>
    )
}

export default EventDescription;