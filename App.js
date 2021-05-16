import * as React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import LandingScreen from './component/Landing';
import RegisterScreen from './component/Register';
import LoginScreen from './component/Login';


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">

        <Stack.Screen name="Register" component={RegisterScreen}  />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: true }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );

}
