import React, { Component } from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import produce from 'immer'
import { connect } from "react-redux";
import ActiveHole from './ActiveHole'

export class ActiveGame extends Component {
    static navigationOptions = {
        title: 'Fix this title bar later',
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
      courseName: ' ',
    };

    componentDidMount() {
      let routesPlaceholder = [];
      let sceneMapPlaceholder = {};
      for(let i=1; i<=this.state.numOfHoles; i++){
        routesPlaceholder.push({ key: i, title: 'Hole '+i });
        sceneMapPlaceholder[i] = ActiveHole
      }

      this.setState({
        routes: routesPlaceholder,
        sceneMap: sceneMapPlaceholder,
      })
    }

    _renderTabBar = props => {
      return(
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: 'white' }}
          style={{ backgroundColor: '#6200ee' }}
          scrollEnabled={true}
          tabStyle={styles.tabItem}
        />
      )
    }

    render() {
      if(this.state.sceneMap && this.state.routes){
        return (
          <TabView
            navigationState={this.state}
            renderScene={SceneMap(this.state.sceneMap)}
            onIndexChange={index => this.setState({ index })}
            initialLayout={{ width: Dimensions.get('window').width }}
            renderTabBar={this._renderTabBar}
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

function mapStateToProps(state) {
  return {
    courseName: state.gameReducer.courseName
  }
} 

export default connect(mapStateToProps)(ActiveGame);

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    paddingTop: 10,
    justifyContent: 'flex-start',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 5,
    width: 100,
  },
});
