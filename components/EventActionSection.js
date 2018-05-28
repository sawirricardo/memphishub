import React from 'react';
import Link from 'next/link';
import {  Button, Icon, Grid } from 'semantic-ui-react';


const EventActionSection = (props) => {
    return (
        <React.Fragment>
            <Grid>
                <Grid.Column floated='left' width={5}>
                    <Link href={`/checkout?eventid=${props.eventid}`} prefetch passHref>
                        <Button as="a" primary>
                            Join this event <Icon name='chevron right' />
                        </Button>
                    </Link>
                </Grid.Column>
            </Grid>
        </React.Fragment>
    )
}

export default EventActionSection;