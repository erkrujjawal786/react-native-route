import React from 'react';
// import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './component/HomeScreen';
import NotificationsScreen from './component/NotificationsScreen';
import ProfileScreen from './component/ProfileScreen';
import SettingsScreen from './component/SettingsScreen';
import linking from './linking';


const Stack = createStackNavigator();



function MyStack() {
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Notifications" component={NotificationsScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    );
}

export default function App() {
    return(
    <NavigationContainer linking={linking}>
        <MyStack />
    </NavigationContainer>
    )
}
