import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Page1 from './Page1'
import Page2 from './Page2'
import { createDrawerNavigator,createAppContainer,createSwitchNavigator } from 'react-navigation'

const stack = createSwitchNavigator({
    Page1Screen:{screen:Page1,navigationOptions: {
    title: 'Page1'}},
    Page2Screen:{screen:Page2,navigationOptions: {
    title: 'Page2'}},
  });

export default createAppContainer(stack);
