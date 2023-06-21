import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput.js';
import CustomButton from '../../components/CustomButton/CustomButton.js';
import {useNavigation} from '@react-navigation/native';

const SingUpScrene = () => {
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [repetirSenha, setRepetirSenha] = useState('');

  const navigation = useNavigation();
  const onSingUpPress = () => {
    console.warn('Cadastrar');

    navigation.navigate('Home');
  };

  const onSingInPress = () => {
    console.warn('Logar');

    navigation.navigate('SingIn');
  };

  const onPressTermos = () => {
    console.warn('Termos de Serviço');
  };
  const onPressPoliticas = () => {
    console.warn('Politicas de Privacidade');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.tela}>
      <View style={styles.root}>
        <Text style={styles.titulo}>Criar conta</Text>

        <CustomInput
          placeholder={'usuario'}
          value={usuario}
          setValue={setUsuario}
        />
        <CustomInput placeholder={'email'} value={email} setValue={setEmail} />

        <CustomInput
          placeholder={'senha'}
          value={senha}
          setValue={setSenha}
          textoSeguro
        />

        <CustomInput
          placeholder={'repeta senha'}
          value={repetirSenha}
          setValue={setRepetirSenha}
          textoSeguro
        />

        <Text style={styles.termos}>
          Registrando, você confirma que aceita nossos
          <Text style={styles.link} onPress={onPressTermos}>
            Termos de Uso
          </Text>{' '}
          e{' '}
          <Text style={styles.link} onPress={onPressPoliticas}>
            Políticas de Privacidade
          </Text>
        </Text>

        <CustomButton texto={'Registrar'} eventoPressionar={onSingUpPress} />
        <CustomButton
          texto={'Já é registrado? Logar'}
          eventoPressionar={onSingInPress}
          tipo={'TERTIARY'}
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
    color: '#ffffff',
    margin: 10,
  },
  termos: {
    color: '#ffffff',
    marginVertical: 5,
    fontSize: 16,
  },
  link: {
    color: 'blue',
  },
});

export default SingUpScrene;
