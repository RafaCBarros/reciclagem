import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';

const {width, height} = Dimensions.get('screen');

export default function Map({navigation}) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: -1.459026,
          longitude: -48.489099,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{width: width, height: height}}
        region={location}
        minZoomLevel={17}
        showsUserLocation={true}>
        <Marker
          coordinate={{
            latitude: -1.459026,
            longitude: -48.489099,
          }}
          pinColor="green"
          onPress={() =>
            navigation.navigate('MarkerPage', {
              idItem: 'organicos',
              horario: 'Das 8:00 até as 18:00',
            })
          }
        />
        <Marker
          coordinate={{
            latitude: -1.457739,
            longitude: -48.4897,
          }}
          pinColor="green"
          onPress={() =>
            navigation.navigate('MarkerPage', {
              idItem: 'plasticos',
              horario: 'Das 8:00 até as 18:00',
            })
          }
        />
        <Marker
          coordinate={{
            latitude: -1.461857,
            longitude: -48.491116,
          }}
          pinColor="green"
          onPress={() =>
            navigation.navigate('MarkerPage', {
              idItem: 'metais',
              horario: 'Das 8:00 até as 18:00',
            })
          }
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
