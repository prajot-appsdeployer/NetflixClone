import {StyleSheet, TextInput} from 'react-native';
import React from 'react';

const InputFields = (props: any) => {
  return <TextInput {...props} style={styles.input} />;
};

export default InputFields;

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginTop: 20,
    borderWidth: 1,
    padding: 10,
    borderColor: '#fff',
    borderRadius: 5,
    paddingVertical: 8,
    width: 300,
  },
});
