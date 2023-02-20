import {StyleSheet} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';

const InputFields = (props: any) => {
  return (
    <TextInput
      {...props}
      mode="outlined"
      outlineColor="#fff"
      selectionColor="#fff"
      // activeOutlineColor="#E50914"
      activeOutlineColor="#fff"
      style={{marginTop: 15, backgroundColor: '#000'}}
    />
  );
};

export default InputFields;

const styles = StyleSheet.create({});
