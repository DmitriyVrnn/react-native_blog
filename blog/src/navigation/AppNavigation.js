import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { BottomNavigation } from "./BottomNavigation";
import { StackAboutNavigator, StackCreateNavigator } from "./StackNavigator";
import { THEME } from "../theme";

const MainNavigator = createDrawerNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator
        drawerContentOptions={{
          activeTintColor: THEME.MAIN_COLOR,
          itemStyle: { marginVertical: 10 },
          labelStyle: {
            fontFamily: 'open-bold',
          }
        }}
      >
        <MainNavigator.Screen
          options={{
            drawerLabel: 'Главная',
          }}
          name="Posts"
          component={BottomNavigation}
        />
        <MainNavigator.Screen
          name="About"
          component={StackAboutNavigator}
          options={{
            drawerLabel: 'О приложении'
          }}
        />
        <MainNavigator.Screen
          name="Create"
          component={StackCreateNavigator}
          options={{
            drawerLabel: 'Новый пост'
          }}
        />
      </MainNavigator.Navigator>
    </NavigationContainer>
  )
};