import React from 'react';
import { Card, Image, Icon, Button, Label } from 'semantic-ui-react';
import Link from 'next/link';

const CategoryCard = (props) => {
    return (
        <Link href={`/browseeventsbycategories?categories=${props.categoryid}`} passHref>
            <Card as="a">
                <Card.Content>
                    <Card.Header>{props.name}</Card.Header>
                </Card.Content>
            </Card>
        </Link>
    ); 
}
          


export default CategoryCard;