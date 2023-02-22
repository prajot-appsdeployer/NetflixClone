import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Navbar = ({navigation}: any) => {
  return (
    <View
      style={{
        marginLeft: 12,
        marginTop: 30,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={25} color="#fff" />
      </TouchableOpacity>
      <Image
        style={{
          width: 100,
          height: 25,
          marginLeft: 10,
        }}
        source={require('../assets/logo_L.png')}
      />
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({});
