import React from 'react';
import { Provider } from 'react-redux';
import store from './store'
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
    <Provider store={store}>
      <PaperProvider>
        <Navigation />
      </PaperProvider>
    </Provider>
  );
};

export default App;
