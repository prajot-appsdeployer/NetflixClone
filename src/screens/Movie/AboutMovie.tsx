import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import PlayingVideo from './PlayingVideo';
import Btn from '../../components/Button/Btn';
import Navbar from '../../navigators/Navbar';
import Orientation from 'react-native-orientation-locker';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AboutMovie = (props: any) => {
  const {movie} = props.route.params;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
      <Navbar {...props} />
      <View style={styles.container}>
        <Image style={{width: 160, height: 220}} source={{uri: movie.thumb}} />
        <View>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.text}>Rating: ⭐4.3 (112)</Text>
          <Text style={styles.text}>Category: {movie.category}</Text>
        </View>
      </View>

      <View style={{alignItems: 'center'}}>
        <Btn
          title="Play"
          btnColor="#E50914"
          textColor="#fff"
          Press={() => {
            Orientation.lockToLandscape();
            props.navigation.navigate('PlayingVideo', {movie});
          }}
        />
      </View>

      <View style={{marginHorizontal: 10, marginTop: 20}}>
        <Text style={styles.subHeading}>Description :</Text>
        <Text style={styles.text}>{movie.description}</Text>
      </View>
    </SafeAreaView>
  );
};

export default AboutMovie;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginTop: 30,
  },
  title: {
    color: '#fff',
    fontSize: 24,
  },
  subHeading: {
    color: '#fff',
    fontSize: 18,
  },
  text: {
    marginTop: 10,
    color: '#c2c2c2',
  },
});
