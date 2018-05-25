import React from 'react';
import { Image as ImageComponent, Item } from 'semantic-ui-react'

const EventSummary = (props) => {
    const { name, startdate, description, image="" } = props
    return (
        <Item.Group>
            <Item.Image size='massive' src={image} />
            <Item>
            <Item.Content>
                <Item.Header>{name}</Item.Header>
                <Item.Meta>{startdate}</Item.Meta>
                <Item.Description>{description}</Item.Description>
            </Item.Content>
            </Item>
        </Item.Group>
    )
}

export default EventSummary;