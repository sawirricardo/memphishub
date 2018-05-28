import React from 'react';
import Layout from '../components/Layout';
import EventList from '../components/EventList';
import { Card, Header } from 'semantic-ui-react';
import CategoryCard from '../components/CategoryCard';
import 'isomorphic-unfetch';

const BrowseCategories = ( props ) => {
    console.log(props.categories[0].id);
    return(
        <Layout title="Browse Events in Memphis">
            <Header as="h1" textAlign="center" dividing>Browse by Top Categories</Header>
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
        </Layout>
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