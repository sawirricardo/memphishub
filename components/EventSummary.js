import React from 'react';
import { Image, Header, Grid, Label } from 'semantic-ui-react'

const EventSummary = (props) => {
    const { name, startdate, description, image="", isfree } = props
    return (
        <React.Fragment>
            <Grid>
                <Grid.Column width={8}>
                    <Image size='massive' src={image} />
                </Grid.Column>
                <Grid.Column width={4}>
                    <Header as="h1">{name}</Header>
                        <Label as='a' color={isfree ? "red" : ""} tag>{isfree ? "Free" : "Paid"}</Label>
                </Grid.Column>
            </Grid>
        </React.Fragment>
    )
}

export default EventSummary;