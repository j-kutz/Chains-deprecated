import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'react-native-paper'

export class ActiveHole extends Component {
    state = {
        par: 3,
    }

    _incrementPar = () => {
        if(this.state.par <= 9)
            this.setState({par: this.state.par+1})
    }

    _deccrementPar = () => {
        if(this.state.par > 1)
            this.setState({par: this.state.par-1})
    }

    render() {
        return (
            <View style={[styles.scene, { backgroundColor: 'white' }]} >
                <View style={styles.parRow}>
                    <Text>Par: </Text>
                    <Button style={styles.parButton} icon="remove" onPress={this._deccrementPar}></Button>
                    <Text style={{marginLeft: -40}}>{this.state.par}</Text>
                    <Button style={styles.parButton} icon="add" onPress={this._incrementPar}></Button>
                </View>
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
    parRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    parButton: {
        marginRight: -30,
    }
  });