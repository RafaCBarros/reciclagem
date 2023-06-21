import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput.js';
import CustomButton from '../../components/CustomButton/CustomButton.js';
import {useNavigation} from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const [usuario, setUsuario] = useState('');
  const navigation = useNavigation();

  const onSingInPress = () => {
    console.warn('Login');

    navigation.navigate('SingIn');
  };

  const onResetPassPress = () => {
    console.warn('Resetar Senha');

    navigation.navigate('SingIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.tela}>
      <View style={styles.root}>
        <Text style={styles.title}>Esqueci senha</Text>

        <CustomInput
          placeholder={'usuario'}
          value={usuario}
          setValue={setUsuario}
        />

        <CustomButton
          texto={'Resetar Senha'}
          eventoPressionar={onResetPassPress}
        />

        <CustomButton
          texto={'Voltar para login'}
          eventoPressionar={onSingInPress}
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
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    margin: 10,
  },
  termos: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: 'lightred',
  },
});

export default ForgotPasswordScreen;
