import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

/* Screens*/
import WelcomeScreen from '../views/WelcomeScreen/WelcomeScreen.js';
import SingInScrene from '../views/SingInScreen/SingInScreen.js';
import SingUpScrene from '../views/SingUpScreen/SingUpScreen.js';
import ForgotPasswordScreen from '../views/ForgotPasswordScreen/ForgotPasswordScreen.js';
import HomeScreen from '../views/HomeScreen/HomeScreen.js';
import MapScreen from '../views/MapScreen/MapScreen.js';
import ProfileScreen from '../views/ProfileScreen/ProfileScreen.js';
import InformationScreen from '../views/InformationScreen/InformationScreen.js';
import LocationScreen from '../views/LocationScreen/LocationScreen.js';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          title: 'Recicla GO',
          headerShown: false,
        }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SingIn" component={SingInScrene} />
        <Stack.Screen name="SingUp" component={SingUpScrene} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerBackTitleVisible: false}}
        />

        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Information" component={InformationScreen} />
        <Stack.Screen name="Location" component={LocationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
