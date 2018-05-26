import React from 'react';
import Link from 'next/link'
import { Button, Header, Icon, Image, Modal } from "semantic-ui-react";

class EventTicket extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            id: props.id || "",
            eventTicket:[]
        }
    }

    componentDidMount () {
        fetch("https://www.eventbriteapi.com/v3/events/42149513329/ticket_classes/?token=HXRINDBW5AI3OYZSKFKZ")
        .then(response => response.json())
        .then(eventTicket => this.setState({eventTicket : eventTicket}))
        ;
    }
    render() {
        const { id } = this.state;
        return (
            <React.Fragment>
                <Modal trigger={<Button>Let's do it!</Button>}>
                    <Modal.Header>Cool! Choose your ticket, please!</Modal.Header>
                    <Modal.Content image scrolling>
                        {/* <Image size='medium' src='/assets/images/wireframe/image.png' wrapped /> */}

                        <Modal.Description>
                            <Header>Modal Header</Header>
                            <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Link href={`/checkout?eventid=${id}`} prefetch passHref>
                            <Button as="a" primary>
                                Proceed <Icon name='chevron right' />
                            </Button>
                        </Link>
                    </Modal.Actions>
                </Modal>
            </React.Fragment>
        )
    }
}

export default EventTicket;