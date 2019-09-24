import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Provider as PaperProvider } from 'react-native-paper';
import { Button } from 'react-native-paper';
import Dashboard from './src/Dashboard';
import MenuTest from './src/MenuTest'

const AppNavigator = createStackNavigator(
  {
    Dashboard: Dashboard,
    Menu: MenuTest
  },
  {
    initialRouteName: 'Dashboard',
  }
);

const Navigation = createAppContainer(AppNavigator);

const App = () => {
  return (
    <PaperProvider>
      <Navigation />
    </PaperProvider>
  );
};

export default App;
