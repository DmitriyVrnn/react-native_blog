import React from 'react';
import { MainScreen } from "../screens/MainScreen";
import { HeaderButtonsApp } from "../components/HeaderButtonsApp";
import { PostScreen } from "../screens/PostScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { navigatorOptions } from "./navigatorOptions";
import { BookedScreen } from "../screens/BookedScreen";
import { AboutScreen } from "../screens/AboutScreen";
import { CreateScreen } from "../screens/CreateScreen";


const Stack = createStackNavigator();

export const StackPostNavigator = ({ navigation }) => {
  console.log(navigation)
  return (
    <Stack.Navigator
      initialRouteName="Blog"
      screenOptions={navigatorOptions}>
      <Stack.Screen
        name="Blog"
        component={MainScreen}
        options={{
          headerRight: () => (
            <HeaderButtonsApp
              onPress={() => navigation.navigate('Create')}
              iconName='ios-camera'
              title='Take photo'/>),
          headerLeft: () => (
            <HeaderButtonsApp
              onPress={() => navigation.toggleDrawer()}
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

export const StackBookedNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Booked"
      screenOptions={navigatorOptions}>
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

export const StackAboutNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={navigatorOptions}>
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{
          headerLeft: () => (
            <HeaderButtonsApp
              onPress={() => navigation.toggleDrawer()}
              iconName='ios-menu'
              title='Take photo'/>)
        }}
      />
    </Stack.Navigator>
  )
};

export const StackCreateNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={navigatorOptions}>
      <Stack.Screen
        name="Create"
        component={CreateScreen}
        options={{
          headerLeft: () => (
            <HeaderButtonsApp
              onPress={() => navigation.toggleDrawer()}
              iconName='ios-menu'
              title='Take photo'/>)
        }}
      />
    </Stack.Navigator>
  )
};