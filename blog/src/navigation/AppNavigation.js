import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { THEME } from "../theme";
import { HeaderButtonsApp } from "../components/HeaderButtonsApp";
import { BookedScreen } from "../screens/BookedScreen";
import { Ionicons } from "@expo/vector-icons";


const Stack = createStackNavigator();

const BottomNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator();

const StackPostNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Blog"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
        },
        headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Blog"
        component={MainScreen}
        options={{
          headerRight: () => (
            <HeaderButtonsApp
              onPress={() => console.log('Press')}
              iconName='ios-camera'
              title='Take photo'/>),
          headerLeft: () => (
            <HeaderButtonsApp
              onPress={() => console.log('Press')}
              iconName='ios-menu'
              title='Take photo'/>)
        }}
      />
      <Stack.Screen
        options={({ route }) => ({
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          title: `Пост от ${new Date(route.params.postDate).toLocaleDateString()}`,
          headerRight: () => (
            <HeaderButtonsApp
              onPress={() => console.log('Press')}
              iconName={route.params.booked ? 'ios-star' : 'ios-star-outline'}
              title='Booked'/>)
        })}
        name="Post"
        component={PostScreen}
      />
    </Stack.Navigator>
  )
};

const StackBookedNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Booked"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
        },
        headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Post"
        component={PostScreen}
        options={({ route }) => ({
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          title: `Пост от ${new Date(route.params.postDate).toLocaleDateString()}`,
          headerRight: () => (
            <HeaderButtonsApp
              onPress={() => console.log('Press')}
              iconName={route.params.booked ? 'ios-star' : 'ios-star-outline'}
              title='Booked'/>)
        })}
      />
      <Stack.Screen
        name="Booked"
        component={BookedScreen}
      />
    </Stack.Navigator>
  )
};

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <BottomNavigator.Navigator
        tabBarOptions={{
          activeTintColor: THEME.MAIN_COLOR,
          inactiveTintColor: 'gray',
        }}
      >
        <BottomNavigator.Screen
          name="Post"
          component={StackPostNavigator}
          options={{
            tabBarIcon: (info) => <Ionicons name='ios-albums' size={25} color={info.color}/>,
            tabBarLabel: 'Все'
          }}
        />
        <BottomNavigator.Screen
          name="Booked"
          component={StackBookedNavigator}
          options={{
            tabBarIcon: (info) => <Ionicons name='ios-star' size={25} color={info.color}/>,
            tabBarLabel: 'Избранное'
          }}
        />
      </BottomNavigator.Navigator>
    </NavigationContainer>
  )
};