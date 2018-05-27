import React from 'react';
import Link from 'next/link';
import { Message, Button, Container } from 'semantic-ui-react';
import Layout from '../components/Layout';


const SuccessPage = (props) => {
    return (
        
        <Layout title={`You have joined ${props.events.name.text}`}>
            <Container text>
            <Message
                success
                header='Success!'
                content={`You'll receive a follow-up email from ${props.events.name.text}`}
            />
            <Link href={`/browseevents`} prefetch passHref>
                <Button>
                    Browse more Events
                </Button>
            </Link>
            <Link href={`/contactus`} prefetch passHref>
                <Button>
                    Give MemphisHub Feedback
                </Button>
            </Link>
            </Container>
        </Layout>
    )
}

SuccessPage.getInitialProps = async ({query:{registereventid}}) => {
    
    const res = await fetch(
        `https://www.eventbriteapi.com/v3/events/${registereventid}/?token=EUIWCJ4L7GSSIWXCPBCK`
    );
    const json = await res.json();

    return { events: json };
};

export default SuccessPage;