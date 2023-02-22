import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  View,
  StatusBar,
  FlatList,
  ToastAndroid,
  BackHandler,
} from 'react-native';
import React, {useEffect} from 'react';
import VideoPlayer from 'react-native-video-controls';
import Orientation from 'react-native-orientation-locker';

const PlayingVideo = (props: any) => {
  const {movie} = props.route.params;

  useEffect(() => {
    Orientation.lockToLandscape();
  }, []);

  const back = (): any => Orientation.lockToPortrait();
  BackHandler.addEventListener('hardwareBackPress', back);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
      }}>
      <StatusBar hidden />
      <VideoPlayer
        source={{
          uri: movie.sources,
        }}
        navigator={props.navigator}
        controlTimeout={5000}
        seekColor={'#E50914'}
        onBack={() => {
          props.navigation.goBack();
          Orientation.lockToPortrait();
        }}
        onError={() => {
          ToastAndroid.show(
            'There was an error palying video.',
            ToastAndroid.SHORT,
          );
        }}
        onEnd={() => {
          props.navigation.goBack();
          Orientation.lockToPortrait();
        }}
        toggleResizeModeOnFullscreen={false}
        disableFullscreen={true}
        // onEnterFullscreen={() => Orientation.lockToLandscape()}
        // onExitFullscreen={() => Orientation.lockToPortrait()}
      />
    </SafeAreaView>
  );
};

export default PlayingVideo;

const styles = StyleSheet.create({
  fullscreenVideo: {
    backgroundColor: 'black',
    elevation: 1,
  },
});
