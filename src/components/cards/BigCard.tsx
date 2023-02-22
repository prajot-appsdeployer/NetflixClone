import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import Orientation from 'react-native-orientation-locker';
import {Api} from '../../../Api';
import Carousel from 'react-native-snap-carousel';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const BigCard = (props: any) => {
  const isCarousel = React.useRef(null);

  return (
    <View>
      <Carousel
        data={Api.new}
        sliderWidth={windowWidth}
        itemWidth={windowWidth}
        loop={true}
        autoplay={true}
        autoplayInterval={7000}
        enableSnap={true}
        lockScrollWhileSnapping={true}
        enableMomentum={false}
        inactiveSlideOffset={0}
        useScrollView={true}
        renderItem={(element: any, index: any) => {
          const movie = element.item;
          return (
            <View key={index}>
              <Image
                style={{
                  width: windowWidth,
                  height: windowHeight - 300,
                  position: 'relative',
                  alignSelf: 'center',
                }}
                source={{uri: movie.imgUrl}}
              />

              <LinearGradient
                colors={['transparent', 'rgba(0,0,0,1)']}
                style={{position: 'absolute', width: '100%', height: '120%'}}
              />

              <View style={styles.actions}>
                {/* Plus Icon */}
                <TouchableOpacity>
                  <Feather style={styles.icon} name="plus" size={20} />
                  <Text style={styles.text}>My List</Text>
                </TouchableOpacity>

                {/* Play Button */}
                <TouchableOpacity
                  onPress={() => {
                    Orientation.lockToLandscape();
                    props.navigation.navigate('PlayingVideo');
                  }}
                  style={styles.button}>
                  <Text style={{color: '#000', fontSize: 18}}>
                    <Entypo name="controller-play" size={20} /> Play
                  </Text>
                </TouchableOpacity>

                {/* Info Button */}
                <TouchableOpacity>
                  <Feather style={styles.icon} name="info" size={20} />
                  <Text style={styles.text}>Info</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default BigCard;

const styles = StyleSheet.create({
  actions: {
    position: 'absolute',
    bottom: 0,
    width: windowWidth,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  icon: {
    textAlign: 'center',
    color: '#fff',
  },

  text: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
  },

  button: {
    backgroundColor: '#fff',
    paddingHorizontal: 13,
    paddingVertical: 5,
    borderRadius: 3,
  },
});
