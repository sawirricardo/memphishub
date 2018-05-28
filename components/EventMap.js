import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";
import  { MarkerWithLabel } from "react-google-maps/lib/components/addons/MarkerWithLabel";
import { compose, withProps } from "recompose"
import 'isomorphic-unfetch';
import { Header, Container, Button } from 'semantic-ui-react'

const EventLocation = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyABfFAjSuVJ6QUMaAI6fiFQK5Hn9R_Wg2I&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  const lat = Number(props.lat);
  const lng = Number(props.lng);
  return (
    <GoogleMap defaultZoom={15} defaultCenter={{ lat: lat, lng: lng }}>
      {/* {props.isMarkerShown && <Marker position={{ lat: lat, lng: lng }} />} */}
        <MarkerWithLabel
            position={{ lat: lat, lng: lng }}
            labelAnchor={new google.maps.Point(0, 0)}
            labelStyle={{ backgroundColor: "white", border: `1px solid #ccc`, fontSize:"16px", padding: "8px" }}
        >
            <Header as="h3">{props.venue}</Header>
        </MarkerWithLabel>
    </GoogleMap>
  );
});

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
        if (this.state.venue.latitude != undefined) {
            const checkIfPlaceIsNull = this.state.venue.name == null;
            const ViewDirection = () => {
                if (!checkIfPlaceIsNull) {
                    return (
                        <React.Fragment>
                            <Header as="h1">{this.state.venue.name}</Header>
                            <p>{this.state.venue.address.localized_address_display}</p>
                            <a href={`https://www.google.com/maps/dir/?api=1&destination=${(this.state.venue.name).replace(/ /g, "+")}`} target="_blank">
                                <Button positive>View Direction</Button>
                            </a>
                        </React.Fragment>
                    )
                }  else {
                    return (
                        <React.Fragment>
                            <Header as="h1">{this.state.venue.address.address_1}</Header>
                            <p>{this.state.venue.address.localized_address_display}</p>
                            <a href={`https://www.google.com/maps/dir/?api=1&destination=${this.state.venue.address.latitude},${this.state.venue.address.longitude}`} target="_blank">
                                <Button positive>View Direction</Button>
                            </a>
                        </React.Fragment>
                    )
                }
            }
            
            return (
                <React.Fragment>
                    <Container textAlign='center'>
                    <ViewDirection />
                    </Container>
                    <br />
                    <EventLocation 
                        lat={this.state.venue.latitude}
                        lng={this.state.venue.longitude}
                        venue={this.state.venue.name}
                    />
                </React.Fragment>
            )
        } else {
            return(
                <React.Fragment>
                    <Container textAlign='center'>
                    <Header as="h3">Loading Map...</Header>
                    </Container>
                </React.Fragment>  
            )
        } 
    }
}

export default EventMap;