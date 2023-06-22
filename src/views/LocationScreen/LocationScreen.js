import React from 'react';
import {View, Text} from 'react-native';

const LocationScreen = ({route}) => {
  const {params} = route;

  return (
    <View>
      <Text>Informações sobre local de reciclagem:</Text>
      <Text>Este local recicla {params.idItem}</Text>
      <Text>Funcionamento: {params.horario}</Text>
    </View>
  );
};

export default LocationScreen;
