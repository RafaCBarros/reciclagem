import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';

const MapScreen = ({navigation}) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permissão para acessar geolocalização foi negada');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Esperando..';
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
        style={{width: '100%', height: '100%'}}
        region={location}
        minZoomLevel={17}
        showsUserLocation={true}>
        <Marker
          coordinate={{
            latitude: -1.459026,
            longitude: -48.489099,
          }}
          pinColor="red"
          onPress={() =>
            navigation.navigate('MarkerPage', {
              tipoReciclagem: 'metal',
              horario: 'Segunda a Sexta: 8h às 18h',
            })
          }
        />
        <Marker
          coordinate={{
            latitude: -1.457739,
            longitude: -48.4897,
          }}
          pinColor="blue"
          onPress={() =>
            navigation.navigate('MarkerPage', {
              tipoReciclagem: 'papel',
              horario: 'Terça a Sexta: 8h às 19h | Sábado: 9h às 13h',
            })
          }
        />
        <Marker
          coordinate={{
            latitude: -1.461857,
            longitude: -48.491116,
          }}
          pinColor="white"
          onPress={() =>
            navigation.navigate('MarkerPage', {
              tipoReciclagem: 'metal e papel',
              horario:
                'Segunda a Sexta: 8h às 19h30 | Sábado e Domingo: 10h às 16h',
            })
          }
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default MapScreen;
