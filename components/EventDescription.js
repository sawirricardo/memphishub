import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";


const EventDescription = (props) => {
    const { description } = props;

    return (
        <React.Fragment>
            <Container>
                <Header as="h1">About this Event</Header>
                {ReactHtmlParser(description)}
            </Container>
        </React.Fragment>
    )
}

export default EventDescription;