import React from 'react';
import { THEME } from "../theme";
import { StackBookedNavigator, StackPostNavigator } from "./StackNavigator";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator();

export const BottomNavigation = () => {
  return (
    <BottomNavigator.Navigator
      tabBarOptions={{
        activeTintColor: THEME.MAIN_COLOR,
        inactiveTintColor: 'gray',
        shifting: true,
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
  )
}