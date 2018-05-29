import React from 'react';
import Layout from '../components/Layout';
import { Container, Segment, Header } from 'semantic-ui-react';
import MailchimpContactUs from '../components/MailchimpForContactUs';


const ContactUsPage = (props) => {
    return (
        <React.Fragment>
            <Layout title="Contact Us | MemphisHub">
                <Container text>
                    <Header as="h1" attached="top" textAlign="center">Give us your {props.url.query.id}!</Header>
                    <Segment attached> 
                        <MailchimpContactUs
                            action="https://github.us18.list-manage.com/subscribe/post?u=fb17d3eb8c27deaae717f1c3f&amp;id=db46e57571"
                            fields={[
                                {
                                    name: 'EMAIL',
                                    placeholder: 'Youremail@email.com',
                                    type: 'email',
                                    required: true
                                },
                                {
                                    name: 'NAME',
                                    placeholder: 'Your Full Name',
                                    type: 'text',
                                    required: true
                                },
                                {
                                    name: 'MESSAGE',
                                    placeholder: 'Your Message...',
                                    type: 'text',
                                    required: true
                                }
                            ]}
                        />
                    </Segment>
                </Container>
            </Layout>
        </React.Fragment>
    )
}

export default ContactUsPage;