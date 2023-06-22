import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DetailCoupon = ({dados}) => {
  const cupom = dados;
  return (
    <View style={styles.cartao}>
      <Text style={styles.empresa}>{cupom.empresa}</Text>
      <View style={styles.cupom}>
        <Text style={styles.codigo}>{cupom.codigo}</Text>
        <Text style={styles.descricao}>{cupom.descricao}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartao: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: 'white',

    borderWidth: 1,
    borderColor: '#BBBBBB',
    borderRadius: 5,

    alignItems: 'flex-start',
  },
  cupom: {
    backgroundColor: 'darkgreen',
    maxHeight: 60,
    height: 'auto',
    borderRadius: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
  empresa: {
    fontSize: 28,
  },
  codigo: {
    textAlign: 'center',
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold',
  },
  descricao: {
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
    marginBottom: 10,
  },
  imagem: {
    alignSelf: 'center',
    width: '80%',
    height: 150,
    maxHeight: 400,
    backgroundColor: 'grey',
  },
});

export default DetailCoupon;
