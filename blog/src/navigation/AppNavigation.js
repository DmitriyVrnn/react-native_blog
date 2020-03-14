import React from 'react';
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
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
      <Stack.Navigator initialRouteName="Blog"
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
              <HeaderButtons HeaderButtonComponent={AppHeaderIcon} title="Photo">
                <Item title='Take photo' iconName='ios-camera' onPress={() => console.log('Press photo')}/>
              </HeaderButtons>),
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={AppHeaderIcon} title="Photo">
                <Item title='Take photo' iconName='ios-menu' onPress={() => console.log('Press photo')}/>
              </HeaderButtons>)
          }}
        />
        <Stack.Screen
          options={({route}) => ({
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            title: `Пост от ${new Date(route.params.postDate).toLocaleDateString()}`,
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={AppHeaderIcon} title="Photo">
                <Item
                  title='Booked'
                  iconName={route.params.booked ? 'ios-star' : 'ios-star-outline'}
                  onPress={() => console.log('Press photo')}/>
              </HeaderButtons>)
          })}
          name="Post"
          component={PostScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};