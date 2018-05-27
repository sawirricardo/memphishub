import React from 'react';
import Link from 'next/link'
import { Button, Header, Icon, Image, Modal, Item } from "semantic-ui-react";

class EventTicketButton extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            id: props.eventid || "",
            eventTicket:[]
        }
    }

    componentDidMount () {
        fetch(`https://www.eventbriteapi.com/v3/events/${this.state.id}/ticket_classes/?token=HXRINDBW5AI3OYZSKFKZ`)
        .then(response => response.json())
            .then(eventTicket => this.setState({ eventTicket: eventTicket.ticket_classes}))
        ;
    }

    render() {
        const { id, eventTicket } = this.state; 
        console.log(eventTicket)
        return (
            <React.Fragment>
                <Modal trigger={<Button>Let's do it!</Button>} closeIcon>
                    <Modal.Header>Cool! Choose your ticket, please!</Modal.Header>
                    <Modal.Content image scrolling>
                        {/* <Image size='medium' src='/assets/images/wireframe/image.png' wrapped /> */}
                        <Modal.Description>
                            {eventTicket.length > 0 ?
                            <Item.Group
                                items={[
                                    {
                                        childKey:0,
                                        header: eventTicket[0].name
                                    },
                                    {
                                        childKey: 2,
                                        header: eventTicket[1].name
                                    },
                                    {
                                        childKey: 3,
                                        header: eventTicket[2].name
                                    },
                                    {
                                        childKey: 4,
                                        header: eventTicket[3].name
                                    }
                                ]}
                            >
                            </Item.Group>
                            :
                            <Header>Loading</Header>
                            }
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

export default EventTicketButton;