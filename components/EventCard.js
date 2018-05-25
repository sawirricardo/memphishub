import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import Link from 'next/link';

const EventCard = (props) => {
    const { eventid="", eventname="" , startdate ="" , description="", image="" } = props;
    return (
        <Link href={`/event?id=${eventid}`} passHref>
        <Card as="a">
            <Image src={image} />
            <Card.Content>
            <Card.Header>{eventname}</Card.Header>
            <Card.Meta>
                <span className="date">{startdate}</span>
            </Card.Meta>
            <Card.Description>
                {`${description.substr(0, 100)}...`}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <a>
                <Icon name="user" />
                22 Friends
            </a>
            </Card.Content>
        </Card>
        </Link>
    );
}

export default EventCard;