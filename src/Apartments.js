
import React, { Component } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

class Apartments extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 37.46,
            longitude: -122.26,
            latitudeDelta: 0.8,
            longitudeDelta: 0.8,
          }}
          minZoomLevel={10}
          maxZoomLevel={15}
          zoomEnabled={true}
          zoomControlEnabled={true}
        >
          <Marker
            coordinate={{ latitude: 37.46, longitude: -122.26 }}
            title="San Francisco"
            description="This is the city that I love"
          />
        </MapView>
      </View>
    );
  }
}
 
export default Apartments;