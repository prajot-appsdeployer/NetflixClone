import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Btn = (props: any) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          width: 300,
          backgroundColor: props.btnColor,
          alignItems: 'center',
          borderRadius: 5,
          paddingVertical: 10,
          marginTop: 30,
        }}
        onPress={props.Press}>
        <Text style={{color: props.textColor}}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Btn;

const styles = StyleSheet.create({});
