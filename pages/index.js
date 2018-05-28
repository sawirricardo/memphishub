import React from 'react';
import Layout from '../components/Layout';
import EventList from '../components/EventList';
import Mailchimp from '../components/Mailchimp';
import { Container, Divider, Segment, Image } from 'semantic-ui-react';
import EventListPopular from '../components/EventListPopular';
import EventListUpcoming from '../components/EventListUpcoming';
import EventListFree from '../components/EventListFree';
import LazyHero from 'react-lazy-hero';

const Home = () => (
    <React.Fragment>
        <LazyHero>
            <h1>Generic Startup Hype Headline</h1>
        </LazyHero>
        <Layout title="MemphisHub">
            
            <Segment basic>
                <EventListPopular />
            </Segment>
            <Container text>
            <Segment raised style={{ paddingTop: "2em" }}>
                <Mailchimp 
                    action="https://github.us18.list-manage.com/subscribe/post?u=fb17d3eb8c27deaae717f1c3f&amp;id=db46e57571"
                    fields={[
                    {
                        name: 'EMAIL',
                        placeholder: 'Youremail@email.com',
                        type: 'email',
                        required: true
                    }
                    ]}
                />
            </Segment>
            </Container>
            <Segment basic>
                <EventListFree />
            </Segment>
            <Divider />
            <Segment basic>
                <EventListUpcoming />
            </Segment>
            <Divider />
            
            
        </Layout>
    </React.Fragment>
);

export default Home;