import React from 'react';
import { Card, Image, Icon, Button, Label } from 'semantic-ui-react';
import Link from 'next/link';

class EventCard extends React.Component {
    constructor (props) {
        super(props);
        this.state={
            eventid: props.eventid ||"",
            eventname: props.eventname || "",
            startdate: props.startdate || "",
            enddate: props.enddate || "",
            description: props.description || "",
            image: props.image || "",
            isfree: props.isfree,
            
        }
    }

    ShowTheEventDate = () => {
        const getDateWhenTheEventStart = new Date(Date.parse(this.state.startdate));
        const getDateWhenTheEventEnd = new Date(Date.parse(this.state.enddate));

        const TheDateWhenTheEventStart = getDateWhenTheEventStart.toDateString();
        const TheDateWhenTheEventEnd = getDateWhenTheEventEnd.toDateString();

        if (TheDateWhenTheEventEnd === TheDateWhenTheEventStart) {
            return <span>{TheDateWhenTheEventStart}</span>
        } else {
            return <span>{TheDateWhenTheEventStart} until {TheDateWhenTheEventEnd}</span>
        }
    }

    render () {
        const { eventid, eventname, eventprice, isfree, image, description} = this.state

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
                
                <Card.Meta>
                    {<this.ShowTheEventDate />}
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
    
}

export default EventCard;