import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import SplashScreen from './Screen/SplashScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <Provider>
        <NavigationContainer>

            <Stack.Navigator initialRouteName="SplashScreen"
                             screenOptions={{headerShown: false}}>


            </Stack.Navigator>
        </NavigationContainer>
      </Provider>
  );
}
