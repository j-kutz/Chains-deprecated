import React, { Component } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { Button, TextInput, List, Divider } from 'react-native-paper'
import SelectCourse from './SelectCourse';

export default class NewGame extends Component {
    state = {
        showAddCourse: true,
        courseName: '',
        numberOfHoles: '',
        playerName: '',
        players: ["Jordan", "Molly", "Matthew"]
    };

    static navigationOptions = {
        title: 'New Game',
        headerStyle: {
          backgroundColor: '#6200ee',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
      };

    // addPlayer(playerName){
    //     this.state.players.push(playerName);
    //     this.setState({ playerName: '' });
    // }

    deletePlayer(playerName){
        this.setState({players: this.state.players.filter(function(player) { 
            return player !== playerName 
        })});
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.flexContainer}>
                    <SelectCourse />
                    <Button style={styles.button} mode="contained" onPress={() => this.setState({ showAddCourse: false })}>Add Course</Button>
                </View>
                <TextInput
                    label='Course Name'
                    value={this.state.courseName}
                    onChangeText={courseName => this.setState({ courseName })}
                    style={styles.textInput}
                    disabled={this.state.showAddCourse}
                />
                <TextInput
                    label='Number of Holes'
                    value={this.state.numberOfHoles}
                    onChangeText={numberOfHoles => this.setState({ numberOfHoles })}
                    style={styles.textInput}
                    disabled={this.state.showAddCourse}
                    keyboardType={'numeric'}
                    numeric
                />
                <View style={styles.flexContainer}>
                    <Button style={styles.button} mode="contained" >Select Players</Button>
                    <Button style={styles.button} mode="contained" onPress={() => this.setState({ players: [...this.state.players, this.state.playerName], playerName: '' })}>Add Player</Button>
                </View>
                <TextInput
                    label='Player Name'
                    value={this.state.playerName}
                    onChangeText={playerName => this.setState({ playerName })}
                    style={styles.addPlayerInput}
                />
                <List.Section>
                    <List.Subheader>Players</List.Subheader>
                    {this.state.players.map(player => 
                        <List.Item
                            key={player}
                            title={player}
                            left={() => <List.Icon color="#000" icon="account-circle" />}
                            right={() => <Button icon="delete" style={styles.deleteButton} onPress={this.deletePlayer.bind(this, player)}></Button>}
                        />
                    )}
                </List.Section>
                <Button style={styles.button} mode="contained" >Start Game</Button>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    button: {
        margin: 10,
    },
    addPlayerInput: {
        margin: 10,
    },
    textInput: {
        margin: 10,
    },
    deleteButton: {
        marginTop: 10,
    },
  });
