import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Dashboard from './src/Dashboard';
import NewGame from './src/NewGame';
import ActiveGame from './src/ActiveGame'

const AppNavigator = createStackNavigator(
  {
    Dashboard: Dashboard,
    NewGame: NewGame,
    ActiveGame: ActiveGame, 
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
