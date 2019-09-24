import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button } from 'react-native-paper'

export default class Dashboard extends Component {
    render(){
        return(
            <View>
                <Text>Dashboard</Text>
                <Button onPress={() => this.props.navigation.navigate('Menu')}>Go to Menu</Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bottom: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
    },
  });