import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button } from 'react-native-paper'

export default class NewGame extends Component {
    render() {
        return (
            <View>
                <Button style={styles.button1} mode="contained">Select Course</Button>
                <Button style={styles.button1} mode="contained">Add Course</Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button1: {
        margin: 10,
    },
  });
