import React, { Component } from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import { TabView, SceneMap } from 'react-native-tab-view';
import produce from 'immer'

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

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
    
    state = {
      numOfHoles: 9,
      index: 0,
      routes: [],
      sceneMap: {},
    };

    componentDidMount() {
      let routesPlaceholder = [];
      let sceneMapPlaceholder = {};
      for(let i=1; i<=this.state.numOfHoles; i++){
        routesPlaceholder.push({ key: i, title: 'Hole '+i });
        sceneMapPlaceholder[i] = FirstRoute
      }

      this.setState({
        routes: routesPlaceholder,
        sceneMap: sceneMapPlaceholder,
      })
    }

    render() {
      if(this.state.sceneMap && this.state.routes){
        return (
          <TabView
            navigationState={this.state}
            renderScene={SceneMap(this.state.sceneMap)}
            onIndexChange={index => this.setState({ index })}
            initialLayout={{ width: 100 }}
          />
        )
      } else {
        return (
          <View>
            <Text>Loading...</Text>
          </View>
        )
      }
    }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

// class Hole1 extends React.Component {
//     render() {
//       return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//           <Text>Hole 1!</Text>
//         </View>
//       );
//     }
//   }
  
//   class Hole2 extends React.Component {
//     render() {
//       return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//           <Text>Hole 2!</Text>
//         </View>
//       );
//     }
//   }
  
//   const TabNavigator = createMaterialTopTabNavigator({
//     'Hole 1': Hole1,
//     'Hole 2': Hole2,
//   },
//   {
//       swipeEnabled: true,
//       tabBarOptions: {
//         labelStyle: {
//           fontSize: 12,
//         },
//         tabStyle: {
//           width: 100,
//         },
//         style: {
//           backgroundColor: '#6200ee',
//         },
//       }
//   }
//   );
  
//   const TabNavigation = createAppContainer(TabNavigator);
