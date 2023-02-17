import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Btn = (props: any) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          width: 300,
          backgroundColor: '#fff',
          alignItems: 'center',
          borderRadius: 5,
          paddingVertical: 8,
          marginTop: 30,
        }}
        onPress={props.Press}>
        <Text style={{color: '#000'}}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Btn;

const styles = StyleSheet.create({});
