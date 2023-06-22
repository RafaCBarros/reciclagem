import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import CustomButton from '../../components/CustomButton/CustomButton';

import {useNavigation} from '@react-navigation/native';

const InformationScreen = () => {
  const navigation = useNavigation();

  const aoPressionarReciclar = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.tela}>
      <Text style={styles.titulo}>O que é reciclagem?</Text>
      <Text style={styles.paragrafo}>
        A reciclagem é um processo caracterizado pela transformação de um
        objeto, anteriormente descartado, em um novo produto ou insumo.
        Portanto, o processo de reciclagem realiza, por meio da alteração das
        características de diversos materiais descartáveis, a criação de um novo
        material, notadamente utilizado como matéria-prima em diferentes setores
        da sociedade.
      </Text>
      <Text style={styles.titulo2}>Como a Recicla GO funciona?</Text>
      <Text style={styles.paragrafo}>
        Reciclar é algo que nem sempre pensamos sobre, e com a Recicla GO o
        objetivo é criar um sistema que você lembra, te recompensa e você adora
        tanto como o planeta adora quem recicla.
      </Text>
      <Text style={styles.paragrafo}>
        Primeiro você tira uma foto do produto que pretende reciclar, para
        levantar qualquer dúvida e para registrar o que você pretende reciclar,
        depois você pode observar locais para a coleta desse material para
        reciclagem, onde você também pode receber códigos para adicionar ao seu
        perfil e cupons para compras com empresas parceiras que se importam com
        o planeta!
      </Text>
      <CustomButton
        texto="Bora reciclar!"
        eventoPressionar={aoPressionarReciclar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tela: {
    flex: 1,
  },
  paragrafo: {
    fontSize: 14,
    marginBottom: 5,
    paddingHorizontal: 5,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 30,
    paddingHorizontal: 15,
    marginTop: 20,
  },
  titulo2: {
    paddingHorizontal: 15,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: 'bold',
  },
});

export default InformationScreen;
