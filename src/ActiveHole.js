import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from "react-redux"

export class ActiveHole extends Component {
    render() {
        return (
            <View style={[styles.scene, { backgroundColor: 'white' }]} >
                <Text>{this.props.courseName}</Text>
                <Text>{this.props.numOfHoles}</Text>
                <Text>{this.props.players}</Text>
            </View>
        )
    }
}

function mapStateToProps(state){
    return{
      courseName: state.gameReducer.courseName,
      numOfHoles: state.gameReducer.numOfHoles,
      players: state.gameReducer.players,
    }
}

export default connect(mapStateToProps)(ActiveHole)

const styles = StyleSheet.create({
    scene: {
      flex: 1,
    },
  });