import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import Login from '../screens/auth/Login';
import Signup from '../screens/auth/SignUp';
import Home from '../screens/Home/Home';

import User from '../screens/User/User';
import PlayingVideo from '../screens/Movie/PlayingVideo';
import AboutMovie from '../screens/Movie/AboutMovie';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="AboutMovie" component={AboutMovie} />
        <Stack.Screen name="PlayingVideo" component={PlayingVideo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
