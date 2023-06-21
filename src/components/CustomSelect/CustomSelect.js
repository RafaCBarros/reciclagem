import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {Controller} from 'react-hook-form';
import {SelectList} from 'react-native-dropdown-select-list';

const CustomSelect = ({
  controle,
  nome,
  regras,
  placeholder,
  listaSelecionar,
}) => {
  return (
    <Controller
      control={controle}
      name={nome}
      rules={regras}
      render={({field: {value, onChange}, fieldState: {error}}) => (
        <>
          <View style={styles.campo}>
            <SelectList
              placeholder={placeholder}
              onSelect={() => console.log(value)}
              setSelected={onChange}
              data={listaSelecionar}
              save="value"
              boxStyles={{
                borderWidth: 1,
                borderRadius: 5,
                borderColor: '#e8e8e8',
                backgroundColor: 'white',
                width: '100%',
                paddingHorizontal: 10,
              }}
              dropdownStyles={{
                borderWidth: 0,
                borderRadius: 0,
                marginTop: 0,
                backgroundColor: 'white',
              }}
            />
          </View>
          {error && (
            <Text style={{color: 'red', alignSelf: 'stretch'}}>
              {error.message || 'Erro inesperado'}
            </Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  campo: {
    marginVertical: 5,
  },
});

export default CustomSelect;
