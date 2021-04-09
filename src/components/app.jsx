import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import FlatList from './flat_list.jsx';
import Marker from './marker.jsx';
import flats from '../../data/flats.js'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats,
      selectedFlat: flats[0],
      selectedFlatLat: 48.884211,
      selectedFlatLng: 2.34689
    }

  }

  center() {
    return {
      lat: this.state.selectedFlatLat,
      lng: this.state.selectedFlatLng
    };
  }

  selectFlat = (lat, lng) => {
    this.setState({
      selectedFlatLat: lat,
      selectedFlatLng: lng,
      selectedFlat: flats.find(element=> element.lat == lat)
    });
  }

  render() {
    return (
      <div>
        <FlatList
          flats={this.state.flats}
          selectFlat={this.selectFlat}
          selectedFlat={this.state.selectedFlat}/>
        <div className="map-container">
          <GoogleMapReact defaultCenter={this.center()} defaultZoom={12}>
            <Marker lat={this.state.selectedFlatLat} lng={this.state.selectedFlatLng} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
