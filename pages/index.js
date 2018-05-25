import Layout from '../components/Layout';
import EventList from '../components/EventList';
import Mailchimp from '../components/Mailchimp';
import Jumbotron from '../components/Jumbotron';
import { Container } from 'semantic-ui-react';
const Home = () => (
    <div>
        <Jumbotron />
        <Layout title="MemphisHub">
            <Container text>
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
            </Container>
            
        </Layout>
    </div>
);

export default Home;