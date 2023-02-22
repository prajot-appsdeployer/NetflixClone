import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Orientation from 'react-native-orientation-locker';

const ListItems = ({navigation, category}: any) => {
  return (
    <FlatList
      data={category.videos}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={(element: any) => {
        const movie = element.item;
        return (
          <TouchableOpacity
            style={styles.ListItems}
            onPress={() => {
              navigation.navigate('AboutMovie', {movie});
            }}>
            <Image style={styles.Image} source={{uri: movie.thumb}} />
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default ListItems;

const styles = StyleSheet.create({
  ListItems: {
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
  },

  Image: {
    width: 100,
    height: 150,
    borderRadius: 5,
  },
});
