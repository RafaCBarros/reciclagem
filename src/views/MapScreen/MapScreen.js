import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

// import {useNavigation} from '@react-navigation/native';
// dependência de mapa

const MapScreen = () => {
  //  const navigation = useNavigation();

  // dados do 'pin'

  // função para clicar no mapa e abrir

  return (
    <View style={styles.mapa}>
      <Text>Mapa</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mapa: {
    flex: 1,
  },
});

export default MapScreen;
