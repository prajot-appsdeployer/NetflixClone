import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  View,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import VideoPlayer from 'react-native-video-controls';
import Orientation from 'react-native-orientation-locker';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PlayingVideo = (props: any) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
      }}>
      <VideoPlayer
        source={{
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        navigator={props.navigator}
        controlTimeout={3000}
        seekColor="#FF0000"
        onBack={() => {
          props.navigation.goBack();
          Orientation.lockToPortrait();
        }}
        onEnterFullscreen={() => Orientation.lockToLandscape()}
        onExitFullscreen={() => Orientation.lockToPortrait()}
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
