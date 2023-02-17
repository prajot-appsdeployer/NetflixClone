import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Btn from '../components/Button/Btn';
import InputFields from '../components/Inputs/InputFields';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = (props: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      <Image style={styles.logo} source={require('../assets/logo_L.png')} />

      <View style={{marginTop: 50}}>
        <InputFields
          value={email}
          placeholder="Enter Email"
          onChangeText={(text: any) => setEmail(text)}
        />
        <InputFields
          value={password}
          placeholder="Enter Password"
          onChangeText={(text: any) => setPassword(text)}
        />
        <Btn title="Login" Press={() => props.navigation.navigate('Home')} />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  logo: {
    marginTop: 130,
    width: 220,
    height: 60,
  },
});
