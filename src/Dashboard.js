import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button } from 'react-native-paper'

export default class Dashboard extends Component {
    render(){
        return(
            <View>
                <Button style={styles.button1} mode="contained" onPress={() => this.props.navigation.navigate('NewGame')}>New Game</Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button1: {
        margin: 10,
    },
  });