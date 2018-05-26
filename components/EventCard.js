import React from 'react';
import { Card, Image, Icon, Button, Label } from 'semantic-ui-react';
import Link from 'next/link';

const EventCard = (props) => {
    const { eventid="", eventname="" , startdate ="" , description="", image="", isfree } = props;

    const getDateWhenTheEventStart = new Date(Date.parse(startdate));
    const TheDateWhenTheEventStart = getDateWhenTheEventStart.toDateString();

    return (
        <Link href={`/event?id=${eventid}`} passHref>
        <Card as="a">
            <Image 
                src={image}
                label={{
                    color:`${isfree ? "red" : "yellow"}`,
                    content:`${isfree ? "Free" : "Paid"}`, 
                    ribbon: true
                }}
            />
            <Card.Content>
            <Card.Header>{eventname}</Card.Header>
            <Card.Header as="h3">{TheDateWhenTheEventStart}</Card.Header>
            <Card.Meta>
                <span>{TheDateWhenTheEventStart}</span>
            </Card.Meta>
            <Card.Description>
                {`${description.substr(0, 100)}...`}
            </Card.Description>
            </Card.Content>
            <Button fluid>
                Learn More
            </Button>
        </Card>
        </Link>
    );
}

export default EventCard;