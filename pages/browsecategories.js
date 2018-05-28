import React from 'react';
import Layout from '../components/Layout';
import EventList from '../components/EventList';
import { Card, Header, Divider, Segment, Container } from 'semantic-ui-react';
import CategoryCard from '../components/CategoryCard';
import LazyHero from "react-lazy-hero";
import 'isomorphic-unfetch';

const BrowseCategories = ( props ) => {
    console.log(props.categories[0].id);
    return(
        <React.Fragment>
            <Layout title="Browse Events in Memphis">
                <LazyHero
                    isCentered
                    minHeight="50vh"
                    opacity={0.3}
                    color="#111111"
                    parallaxOffset={75}
                    imageSrc="../static/Music.jpg"
                >
                <Container text>
                    <Header as="h1" inverted style={{ fontSize: "40px" }}>Things to do in Memphis</Header>
                    <p style={{ color: "#ffffff" }}>
                        From blues to rock 'n' roll, and from Elvis to BB King, Memphis has provided us with some of the greatest music ever. 
                        It's also home to some of the most delicious barbecue and the largest barbecue cooking contest in the world.
                    </p>
                </Container>
                </LazyHero>
                <Segment basic>
                <Card.Group stackable itemsPerRow={3}>
                    {props.categories.map((category, i) => {
                        return (
                            <CategoryCard
                                key={props.categories[i].id}
                                categoryid={props.categories[i].id}
                                name={props.categories[i].name}
                            />
                        )
                    }
                    )}
                </Card.Group> 
                </Segment>
            </Layout>
        </React.Fragment>
    )
}

BrowseCategories.getInitialProps = async ( ) => {
    
    const res = await fetch(
        `https://www.eventbriteapi.com/v3/categories/?token=EUIWCJ4L7GSSIWXCPBCK`
    );
    const json = await res.json();
    return { categories: json.categories };
};

export default BrowseCategories;