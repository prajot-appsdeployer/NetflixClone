import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  StatusBar,
  Dimensions,
  ScrollView,
  Animated,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import BigCard from '../../components/cards/BigCard';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Lists from '../../components/List/Lists';
import Orientation from 'react-native-orientation-locker';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = (props: any) => {
  const [DeviceOrientation, setDeviceOrientation] = useState('');

  useEffect(() => {
    Orientation.getOrientation(function (orientation: string) {
      setDeviceOrientation(orientation);
    });
  }, [DeviceOrientation]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'black',
      }}>
      <StatusBar backgroundColor="transparent" translucent={true} />

      <View
        style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 30,
          zIndex: 10,
          width: windowWidth,
        }}>
        <Image
          style={{
            width: 40,
            height: 40,
            marginLeft: 10,
          }}
          source={require('../../assets/logo_N.png')}
        />

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignSelf: 'center',
            marginRight: 10,
            gap: 20,
          }}>
          <Feather name="search" size={25} color="#fff" />

          <TouchableOpacity onPress={() => props.navigation.navigate('User')}>
            <MaterialCommunityIcons name="account-box" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <BigCard {...props} />
        </View>

        <View>
          <Lists {...props} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
