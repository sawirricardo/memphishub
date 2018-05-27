import React from 'react';
import Link from 'next/link';
import { Segment, Button, Icon } from 'semantic-ui-react';


const EventActionSection = (props) => {
    return (
        <Segment>
            <Link href={`/checkout?eventid=${props.eventid}`} prefetch passHref>
                <Button as="a" primary>
                    Join this event <Icon name='chevron right' />
                </Button>
            </Link>
        </Segment>
    )
}

export default EventActionSection;