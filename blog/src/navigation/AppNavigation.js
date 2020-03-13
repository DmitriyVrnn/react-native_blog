import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from 'react-native';
import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { THEME } from "../theme";


const Stack = createStackNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Blog" screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
        },
        headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="Blog" component={MainScreen}/>
        <Stack.Screen
          options={{
            title: 'My Post',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          name="Post" component={PostScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};