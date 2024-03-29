import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Home, Splash, Country} from '../screens';

const Stack = createNativeStackNavigator();

const Routers = () => {
  return (
    
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Country" component={Country} />
    </Stack.Navigator>
  );
};
export default Routers;