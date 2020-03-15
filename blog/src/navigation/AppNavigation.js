import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { BottomNavigation } from "./BottomNavigation";
import { StackAboutNavigator, StackCreateNavigator } from "./StackNavigator";

const MainNavigator = createDrawerNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator>
        <MainNavigator.Screen name="Posts" component={BottomNavigation} />
        <MainNavigator.Screen name="About" component={StackAboutNavigator} />
        <MainNavigator.Screen name="Create" component={StackCreateNavigator} />
      </MainNavigator.Navigator>
    </NavigationContainer>
  )
};