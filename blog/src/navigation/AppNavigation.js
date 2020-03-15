import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { AboutScreen } from "../screens/AboutScreen";
import { CreateScreen } from "../screens/CreateScreen";
import { BottomNavigation } from "./BottomNavigation";

const MainNavigator = createDrawerNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator>
        <MainNavigator.Screen name="Posts" component={BottomNavigation} />
        <MainNavigator.Screen name="About" component={AboutScreen} />
        <MainNavigator.Screen name="Create" component={CreateScreen} />
      </MainNavigator.Navigator>
    </NavigationContainer>
  )
};