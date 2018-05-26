import React from 'react';

import Layout from '../components/Layout';

import {Button, Icon, Message } from 'semantic-ui-react';

const Checkout = (props) => {
    return (
        <Layout title={`Confirmation ${props.events.name.text} | MemphisHub`}>
            <h1>Confirmation of {props.events.name.text}</h1>
            <Button animated='vertical'>
                <Button.Content hidden>
                    <Icon name='check circle' />
                </Button.Content>
                <Button.Content visible>I'm in!</Button.Content>
            </Button>
            <Message positive>
                <Message.Header>Great! Can't wait to see ya!</Message.Header>
            </Message>
        </Layout>
    )
}

Checkout.getInitialProps = async ({ query: { eventid } }) => {

    const res = await fetch(
        `https://www.eventbriteapi.com/v3/events/${eventid}/?token=EUIWCJ4L7GSSIWXCPBCK`
    );
    const json = await res.json();

    return { events: json };
};

export default Checkout