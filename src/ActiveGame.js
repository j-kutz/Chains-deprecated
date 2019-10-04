import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'

export default class ActiveGame extends Component {
    static navigationOptions = {
        title: 'Current Game',
        headerStyle: {
          backgroundColor: '#6200ee',
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };

    render() {
        return (
            <TabNavigation />
        )
    }
}

class Hole1 extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Hole 1!</Text>
        </View>
      );
    }
  }
  
  class Hole2 extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Hole 2!</Text>
        </View>
      );
    }
  }
  
  const TabNavigator = createMaterialTopTabNavigator({
    'Hole 1': Hole1,
    'Hole 2': Hole2,
  },
  {
      swipeEnabled: true,
      tabBarOptions: {
        labelStyle: {
          fontSize: 12,
        },
        tabStyle: {
          width: 100,
        },
        style: {
          backgroundColor: '#6200ee',
        },
      }
  }
  );
  
  const TabNavigation = createAppContainer(TabNavigator);
