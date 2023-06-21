import React from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';

/* Components */
import CustomButton from '../../components/CustomButton/CustomButton';
// import FeedSection from '../../components/FeedSection/FeedSection';

import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const aoPressionarMapa = () => {
    navigation.navigate('Map');
  };

  const aoPressionarPerfil = () => {
    navigation.navigate('Profile');
  };

  const aoPressionarInformacao = () => {
    navigation.navigate('Information');
  };

  const aoNovoDispositivoApertado = () => {
    console.log('ah');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.tela}>
      <View style={styles.root}>
        <Text style={styles.titulo}> Recicla GO </Text>
        <View style={styles.menu}>
          <CustomButton
            style={styles.menuOption}
            texto="Mapa"
            eventoPressionar={aoPressionarMapa}
          />

          <CustomButton
            texto="Camera"
            eventoPressionar={aoNovoDispositivoApertado}
          />

          <CustomButton texto="Perfil" eventoPressionar={aoPressionarPerfil} />
          <CustomButton
            texto="Sobre Reciclagem"
            eventoPressionar={aoPressionarInformacao}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tela: {},
  titulo: {
    fontSize: 24,
    marginVertical: 5,
    color: 'black',
  },
  root: {
    paddingHorizontal: 15,
    paddingTop: 25,
    flexDirection: 'column',
  },
  menu: {
    flexDirection: 'column',
  },
  menuOption: {
    color: 'white',
    height: 30,
    fontSize: 16,
    backgroundColor: 'grey',
    borderWidth: 1,
    borderColor: '#ededed',
    borderRadius: 5,
  },
});

export default HomeScreen;
