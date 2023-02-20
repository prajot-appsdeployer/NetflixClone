import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/auth/Login';
import Signup from './src/screens/auth/SignUp';
import Home from './src/screens/Home/Home';
import PlayingVideo from './src/screens/PlayingVideo';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PlayingVideo" component={PlayingVideo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
