import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";
import { compose, withProps } from "recompose"
import 'isomorphic-unfetch';

const EventLocation = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyABfFAjSuVJ6QUMaAI6fiFQK5Hn9R_Wg2I&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) => {
    const lat = Number(props.lat);
    const lng = Number(props.lng);
    console.log(lat, lng);
    if (lat != NaN) {
        return (
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: lat, lng: lng }}
            >
                {props.isMarkerShown && <Marker position={{ lat: lat, lng: lng }} />}
            </GoogleMap>
        )
    }  
})

class EventMap extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            venue: props.venue ||""
        }
    }

    componentDidMount() {
        //Get the latitute and longitude of the event
        fetch(`https://www.eventbriteapi.com/v3/venues/${this.props.venue}/?token=HXRINDBW5AI3OYZSKFKZ`)
        .then(response => response.json())
        .then(venue => this.setState({ venue: venue }))
        ;
    }

    render() {
        console.log(this.state.venue)
        if (this.state.venue != undefined || this.state.venue != null || this.state.event !='') {
            return (
            <EventLocation 
                isMarkerShown
                lat={this.state.venue.latitude}
                lng={this.state.venue.longitude}
            />
            )
        } else {
            return (
                <React.Fragment>
                    <h1>Loading</h1>
                </React.Fragment>
            )
        }
        
    }
}


export default EventMap;