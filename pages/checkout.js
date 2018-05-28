import React from 'react';
import Link from 'next/link';
import 'isomorphic-unfetch';
import Layout from '../components/Layout';
import MailchimpForRegisteringEvents from "../components/MailchimpForRegisteringEvents";
import {Button, Icon, Container, Divider } from 'semantic-ui-react';

const Checkout = (props) => {
    return (
        <Layout title={`${props.events.name.text} | MemphisHub`}>
            <Container text>
            <h1>One more steps to join {props.events.name.text}</h1>

            <p>Please fill out this form in order to proceed.</p>
            <Divider />
                <MailchimpForRegisteringEvents 
                action="https://github.us18.list-manage.com/subscribe/post?u=fb17d3eb8c27deaae717f1c3f&amp;id=6709edd83c"
                fields={[
                    {
                        name: 'EMAIL',
                        placeholder: '',
                        type: 'email',
                        required: true
                    },
                    {
                        name: 'First Name',
                        placeholder: '',
                        type: 'text',
                        required: true
                    },
                    {
                        name: 'Last Name',
                        placeholder: '',
                        type: 'text',
                        required: true
                    }
                ]}
                eventid={props.events.id}
                />
            </Container>
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