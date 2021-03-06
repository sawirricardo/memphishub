import React from 'react';
import Layout from '../components/Layout';
import EventList from '../components/EventList';
import Mailchimp from '../components/Mailchimp';
import { Container, Divider, Segment, Image, Header, Responsive } from 'semantic-ui-react';
import EventListPopular from '../components/EventListPopular';
import EventListUpcoming from '../components/EventListUpcoming';
import EventListFree from '../components/EventListFree';
import LazyHero from 'react-lazy-hero';

const Home = () => {
    console.log('Hi Developer, Thanks for checking out this website. If you find any bugs in this website, please notify me to sawir.ricardo@gmail.com or give me a shout in Github (sawirricardo). Very appreciate your help! Thank you!');
    return (
        <React.Fragment>
            <Layout title="MemphisHub">
                <LazyHero
                    isCentered
                    minHeight="50vh"
                    opacity={0.7}
                    color="#111111"
                    parallaxOffset={60}
                    imageSrc="../static/hero_image_cropped.jpg"
                >
                    <Header as="h1" inverted style={{ fontSize: "50px" }}>MemphisHub</Header>
                    <Header as="h3" inverted style={{ fontSize: "25px" }}>Do More Exciting Things in Memphis</Header>
                </LazyHero>
                <Segment basic>
                    <EventListPopular />
                </Segment>
                <Divider />
                <Segment basic>
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
                </Segment>
                
                {/* These sections only appears in computer/Desktop */}
                <Responsive {...Responsive.onlyComputer}>
                    <Divider />
                    <Segment basic>
                        <EventListFree />
                    </Segment>
                    <Divider />
                    <Segment basic>
                        <EventListUpcoming />
                    </Segment>
                </Responsive>
            </Layout>
        </React.Fragment>
    );
}
export default Home;