import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import Orientation from 'react-native-orientation-locker';
import Btn from '../components/Button/Btn';

const Home = (props: any) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'black',
      }}>
      <Image style={styles.logo} source={require('../assets/logo_L.png')} />

      <View style={{alignItems: 'center'}}>
        <Btn
          title="Play Video"
          Press={() => props.navigation.navigate('PlayingVideo')}
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
