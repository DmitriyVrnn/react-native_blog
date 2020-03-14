import React from 'react';
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { HeaderButtons, Item } from "react-navigation-header-buttons";


export const HeaderButtonsApp = ({ onPress, title, iconName }) => {
  return (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon} title="Header">
      <Item title={title} iconName={iconName} onPress={onPress}/>
    </HeaderButtons>
  )
};