import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Orientation from 'react-native-orientation-locker';

import auth from '@react-native-firebase/auth';
import Btn from '../../components/Button/Btn';

const Home = (props: any) => {
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
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'black',
        padding: 10,
      }}>
      <Image style={styles.logo} source={require('../../assets/logo_L.png')} />
      <Text style={{alignSelf: 'center', color: '#FFF'}}>
        Welcome{' '}
        <Text style={{fontWeight: 'bold'}}>{userState.displayName}</Text>{' '}
      </Text>

      <View style={{alignItems: 'center'}}>
        <Btn
          title="Play Video"
          btnColor="#fff"
          textColor="#000"
          Press={() => {
            Orientation.lockToLandscape();
            props.navigation.navigate('PlayingVideo');
          }}
        />
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

export default Home;

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 25,
    marginBottom: 20,
  },
});
