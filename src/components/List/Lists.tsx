import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Api} from '../../../Api';
import ListItems from './ListItems';

const Lists = (props: any) => {
  return (
    <View>
      {Api.categories.map((category, index) => {
        return (
          <View key={index}>
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 18,
                marginTop: 20,
                marginLeft: 10,
              }}>
              {category.name}
            </Text>
            <ListItems category={category} {...props} />
          </View>
        );
      })}
    </View>
  );
};

export default Lists;

const styles = StyleSheet.create({});
