import {StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import Orientation from 'react-native-orientation-locker';
import auth from '@react-native-firebase/auth';
import Btn from '../../components/Button/Btn';
import Navbar from '../../navigators/Navbar';

const User = (props: any) => {
  const [userState, setUserState] = useState({
    displayName: '',
  });

  useEffect(() => {
    auth().onAuthStateChanged((user: any) => {
      if (user) {
        setUserState(user);
      }
    });
  }, []);

  const logout = () => {
    auth()
      .signOut()
      .then(() => props.navigation.replace('Login'));
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
      <Navbar {...props} />
      <View style={{alignItems: 'center'}}>
        <Text style={{color: '#FFF'}}>
          Welcome{' '}
          <Text style={{fontWeight: 'bold'}}>{userState.displayName}</Text>{' '}
        </Text>

        <Btn
          title="Logout"
          btnColor="#000"
          textColor="#fff"
          Press={() => logout()}
        />
      </View>
    </SafeAreaView>
  );
};

export default User;

const styles = StyleSheet.create({});
