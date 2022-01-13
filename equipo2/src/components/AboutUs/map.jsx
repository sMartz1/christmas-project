
import React, { Component } from 'react'
import {Map, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
    
    constructor(props){
        super(props);
        const defaultPos = {
            lat: 40.421779006268075,
            lng: -3.6926647309547094
        };
        this.state = {position: {...defaultPos}}
    }

    render() {
        return (
        <Map 
            google={this.props.google} 
            zoom={18}
            initialCenter={this.state.position}
            >
        </Map>
        );
    }
}


export default GoogleApiWrapper({apiKey: ("AIzaSyDsGEzmdf-D0CWhqdW-sZ_uBw6K8XKgd9s")})(MapContainer)