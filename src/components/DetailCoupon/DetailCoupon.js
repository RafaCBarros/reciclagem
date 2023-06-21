import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DetailCoupon = ({}) => {
  return (
    <View style={styles.cartao}>
      <Text style={styles.legenda}>Nome Produto</Text>
      <View style={styles.imagem} />
      <Text style={styles.legenda}>Descrição do Produto | Tipo</Text>
      <Text style={styles.legenda}>Descarte adequado</Text>
      <Text style={styles.legenda}>Locais adequados de descarte</Text>
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
  legenda: {
    fontSize: 16,
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
