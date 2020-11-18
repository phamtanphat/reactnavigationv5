import React, {Component} from 'react';
import {Text, View} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Screen1 from './src/stack/Screen1';
import Screen2 from './src/stack/Screen2';
import Screen3 from './src/stack/Screen3';

const Stack = createStackNavigator();
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator mode="card">
          <Stack.Screen name="Screen1" component={Screen1} />
          <Stack.Screen
            name="Screen2"
            component={Screen2}
            options={{
              headerStyle: {
                backgroundColor: '#009387',
              },
              headerTintColor: '#ffffff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen name="Screen3" component={Screen3} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
