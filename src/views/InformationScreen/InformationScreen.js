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
      <Text>O que é reciclagem?</Text>
      <Text>
        A reciclagem é um processo caracterizado pela transformação de um
        objeto, anteriormente descartado, em um novo produto ou insumo.
        Portanto, o processo de reciclagem realiza, por meio da alteração das
        características de diversos materiais descartáveis, a criação de um novo
        material, notadamente utilizado como matéria-prima em diferentes setores
        da sociedade.
      </Text>
      <Text>Como a Recicla GO funciona?</Text>
      <Text>
        Reciclar é algo que nem sempre pensamos sobre, e com a Recicla GO o
        objetivo é criar um sistema que você lembra, te recompensa e você adora
        tanto como o planeta adora quem recicla.
      </Text>
      <Text>
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
});

export default InformationScreen;
