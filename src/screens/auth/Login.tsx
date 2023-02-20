import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  View,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import InputFields from '../../components/Inputs/InputFields';
import Btn from '../../components/Button/Btn';
import auth from '@react-native-firebase/auth';
import firestore, {firebase} from '@react-native-firebase/firestore';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = (props: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        props.navigation.replace('Home');
      }
    });
  }, []);

  const signIn = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (!email || email === '' || email === ' ' || reg.test(email) === false) {
      ToastAndroid.show('Please provide valid email', ToastAndroid.SHORT);
    } else if (!password || password === '' || password === ' ') {
      ToastAndroid.show('Please enter the password', ToastAndroid.SHORT);
    } else {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          props.navigation.navigate('Home');
        })
        .catch(error => {
          ToastAndroid.show(error.message, ToastAndroid.SHORT);
        });
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'black',
        padding: 10,
        alignItems: 'center',
        width: windowWidth,
        height: windowHeight,
      }}>
      <Image
        style={{marginTop: 130, width: 220, height: 60}}
        source={require('../../assets/logo_L.png')}
      />

      <View style={{marginTop: 50}}>
        <InputFields
          value={email}
          placeholder="Enter Email"
          onChangeText={(text: any) => setEmail(text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <InputFields
          value={password}
          placeholder="Enter Password"
          secureTextEntry={true}
          onChangeText={(text: any) => setPassword(text)}
          autoCapitalize="none"
        />

        <Btn title="Login" Press={signIn} btnColor="#fff" textColor="#000" />
        <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
          <Text
            style={{
              marginTop: 5,
              color: '#fff',
              fontSize: 14,
            }}>
            New to Netflix? Sign up now.
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
