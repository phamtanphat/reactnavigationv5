/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class Screen3 extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> Screen 3 </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.popToTop()}
          style={{backgroundColor: 'red', padding: 10}}>
          <Text>Navigate Screen 1</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
