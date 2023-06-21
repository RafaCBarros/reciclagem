import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

const CustomButton = ({
  eventoPressionar,
  texto,
  tipo = 'PRIMARY',
  bgColor,
  fgColor,
}) => {
  return (
    <Pressable
      onPress={eventoPressionar}
      style={[
        styles.container,
        styles[`container_${tipo}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${tipo}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {texto}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 25,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 5,
  },
  container_PRIMARY: {
    backgroundColor: 'black',
  },
  container_RED: {
    backgroundColor: '#e81515',
  },
  container_TERTIARY: {},
  container_SMALL: {
    width: '30%',
  },
  text: {
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  text_PRIMARY: {
    color: 'white',
  },
  text_TERTIARY: {
    color: 'black',
  },
  text_RED: {
    color: '#f0f0f0',
  },
});

export default CustomButton;
