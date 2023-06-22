import React, {useState} from 'react';
import {Text, ScrollView, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import DetailCupoun from '../../components/DetailCoupon/DetailCoupon';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';

const ProfileScreen = () => {
  const navigation = useNavigation();

  // dados dos cupons
  const [descricao, setDescricao] = useState('');
  const [hora, setHora] = useState('');

  const aoPressionarLembrete = () => {
    console.warn(`Lembrete: ${descricao} salvo para ${hora}`);

    // enviar para banco para que o usuário possua essas informações
    setDescricao('');
    setHora('');
  };

  return (
    <ScrollView>
      <View style={styles.perfil}>
        <Icon.Button
          name="arrow-left"
          size={16}
          backgroundColor="#efefef"
          color="black"
          onPress={() => navigation.navigate('Home')}>
          <Text style={{fontSize: 18, color: 'black'}}>Voltar</Text>
        </Icon.Button>
        <Text style={styles.titulo}>Recompensas</Text>
        <DetailCupoun
          dados={{
            empresa: 'iFood',
            codigo: 'ifood30',
            descricao: 'Desconto 30 Reais no iFood, válido até 30 de Junho',
          }}
        />
        <DetailCupoun
          dados={{
            empresa: 'Centauro',
            codigo: 'centaurorecicla',
            descricao: 'Desconto 10% na Centauro, válido até 31 de Julho',
          }}
        />
        <DetailCupoun
          dados={{
            empresa: 'Sol',
            codigo: 'soldiamelhor',
            descricao: 'Desconto 10% na Sol, válido até 31 de Julho',
          }}
        />
        <View>
          <CustomInput
            placeholder={'descricao'}
            value={descricao}
            setValue={setDescricao}
          />

          <CustomInput placeholder={'hora'} value={hora} setValue={setHora} />
          <CustomButton
            texto="Adicionar Lembrete"
            eventoPressionar={aoPressionarLembrete}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  perfil: {},
  titulo: {
    fontSize: 24,
    marginLeft: 15,
  },
});

export default ProfileScreen;
