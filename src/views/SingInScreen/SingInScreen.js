import React, {useState} from 'react';
import {View, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
// import Logo from '../../../assets/images/Logo.js';
import CustomInput from '../../components/CustomInput/CustomInput.js';
import CustomButton from '../../components/CustomButton/CustomButton.js';
import {useNavigation} from '@react-navigation/native';

const SingInScrene = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const {height} = useWindowDimensions();

  const navigation = useNavigation();

  const onSingInPress = () => {
    console.warn('Logar');
    //validar usuario
    setUsuario('');
    setSenha('');
    navigation.navigate('Home');
  };

  const onForgotPassPress = () => {
    console.warn('Senha Esquecida');

    navigation.navigate('ForgotPassword');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.tela}>
      <View style={styles.root}>
        <CustomInput
          placeholder={'usuario'}
          value={usuario}
          setValue={setUsuario}
        />
        <CustomInput
          placeholder={'senha'}
          value={senha}
          setValue={setSenha}
          textoSeguro
        />

        <CustomButton texto={'Logar'} eventoPressionar={onSingInPress} />

        <CustomButton
          texto={'Esqueci Senha'}
          eventoPressionar={onForgotPassPress}
          tipo="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tela: {
    backgroundColor: '#6FE115',
  },
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 500,
    maxHeight: 'auto',
  },
});

export default SingInScrene;
