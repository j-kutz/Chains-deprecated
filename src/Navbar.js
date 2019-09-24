import React, { Component } from 'react'
import { Appbar } from 'react-native-paper'
import { StyleSheet, View } from 'react-native'

export default class Navbar extends Component {
    render() {
        return (
            <View>
                <Appbar style={styles.bottom}>
                    <Appbar.Action icon="menu" onPress={() => console.log('Pressed archive')} />
                </Appbar>
            </View>
        )
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
