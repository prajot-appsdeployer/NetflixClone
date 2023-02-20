import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  Image,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';

import {Dimensions} from 'react-native';

import auth from '@react-native-firebase/auth';
import firestore, {firebase} from '@react-native-firebase/firestore';
import InputFields from '../../components/Inputs/InputFields';
import Btn from '../../components/Button/Btn';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Signup = (props: any) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = async () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (!fullName || fullName === '' || fullName === ' ') {
      ToastAndroid.show('Please enter a valid name', ToastAndroid.SHORT);
    } else if (
      !email ||
      email === '' ||
      email === ' ' ||
      reg.test(email) === false
    ) {
      ToastAndroid.show('Please provide valid email', ToastAndroid.SHORT);
    } else if (!password || password === '' || password === ' ') {
      ToastAndroid.show('Please enter the password', ToastAndroid.SHORT);
    } else {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async authState => {
          await firebase.auth().currentUser?.updateProfile({
            displayName: fullName,
          });

          await firestore()
            .collection('usersdetails')
            .doc(authState.user.uid)
            .set({
              id: authState.user.uid,
              email: email,
              name: fullName,
            })
            .catch((err: any) =>
              ToastAndroid.show(err.message, ToastAndroid.SHORT),
            );
        })
        .then(() => {
          ToastAndroid.show('Welcome User', ToastAndroid.SHORT);
          props.navigation.replace('Home');
        })
        .catch((error: any) => {
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
          value={fullName}
          placeholder="Enter Full Name"
          onChangeText={(text: any) => setFullName(text)}
        />

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
          onChangeText={(text: any) => setPassword(text)}
          secureTextEntry={true}
          autoCapitalize="none"
        />

        <Btn
          title="Sign up"
          Press={() => registerUser()}
          btnColor="#fff"
          textColor="#000"
        />
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
          <Text
            style={{
              marginTop: 5,
              color: '#fff',
              fontSize: 14,
            }}>
            Already on Netflix? Login now.
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({});
