import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

// Componente de exibir dados
import ItemCard from '../../components/ItemCard/ItemCard';

// import {useNavigation} from '@react-navigation/native';

// API para puxar informações

const ScannerScreen = () => {
  //  const navigation = useNavigation();

  // funcao para ao fotografar abrir outra area com informações

  return (
    <View style={styles.cam}>
      <Text>Camera</Text>
      <ItemCard style={styles.detalhe} />
    </View>
  );
};

const styles = StyleSheet.create({
  cam: {
    flex: 1,
  },
  detalhe: {
    display: 'none',
  },
});

export default ScannerScreen;
