import React from 'react';
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { AppHeaderIcon } from "../components/AppHeaderIcon";


export const HeaderButtonsApp = ({ onPress, title, iconName }) => {
  return (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon} title="Header">
      <Item title={title} iconName={iconName} onPress={onPress}/>
    </HeaderButtons>
  )
};