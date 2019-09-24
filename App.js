import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Provider as PaperProvider } from 'react-native-paper';
import { Button } from 'react-native-paper';
import Dashboard from './src/Dashboard';
import MenuTest from './src/MenuTest'

const App = () => {
  return (
    <PaperProvider>
      
      <MenuTest />
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
