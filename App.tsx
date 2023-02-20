import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/auth/Login';
import Signup from './src/screens/auth/SignUp';
import Home from './src/screens/Home/Home';
import PlayingVideo from './src/screens/PlayingVideo';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

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
