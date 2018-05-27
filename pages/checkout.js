import React from 'react';
import Link from 'next/link';

import Layout from '../components/Layout';

import {Button, Icon, Message } from 'semantic-ui-react';

const Checkout = (props) => {
    return (
        <Layout title={`${props.events.name.text} | MemphisHub`}>
            <p>{JSON.stringify(props)}</p>
            <h1>{props.events.name.text}</h1>
            <Link href={`/success?registereventid=${props.events.id}`} prefetch passHref>
                <Button positive>
                    Submit Form
                </Button>
            </Link>
            <Link href={`/event?id=${props.events.id}`} prefetch passHref>
                <Button>
                    Cancel
                </Button>
            </Link>
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