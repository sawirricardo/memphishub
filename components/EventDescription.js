import React from 'react';
import { Header, Container } from 'semantic-ui-react';


const EventDescription = (props) => {
    const { description } = props;
    
    return (
        <React.Fragment>
            <Container text>
                <Header as="h3">About this Event</Header>
                {description}
            </Container>
        </React.Fragment>
    )
}

export default EventDescription;