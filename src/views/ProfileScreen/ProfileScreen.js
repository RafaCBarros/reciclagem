import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import DetailCupoun from '../../components/DetailCoupon/DetailCoupon';
// import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  //  const navigation = useNavigation();

  // dados dos cupons

  return (
    <View style={styles.perfil}>
      <Text>Perfil</Text>
      <DetailCupoun />
    </View>
  );
};

const styles = StyleSheet.create({
  perfil: {
    flex: 1,
  },
});

export default ProfileScreen;
