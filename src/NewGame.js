import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button, TextInput, DataTable } from 'react-native-paper'
import SelectCourse from './SelectCourse';

export default class NewGame extends Component {
    state = {
        showAddCourse: true,
        courseName: '',
        numberOfHoles: '',
        playerName: '',
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

    render() {
        return (
            <View>
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
                <Button style={styles.button} mode="contained" >Select Players</Button>
                <View style={styles.flexContainer}>
                    <TextInput
                        label='Player Name'
                        value={this.state.playerName}
                        onChangeText={playerName => this.setState({ playerName })}
                        style={styles.addPlayerInput}
                    />
                    <Button style={styles.button} mode="contained" >Add Player</Button>
                </View>
                <DataTable>
                    <DataTable.Header>
                    <DataTable.Title>Dessert</DataTable.Title>
                    <DataTable.Title numeric>Calories</DataTable.Title>
                    <DataTable.Title numeric>Fat</DataTable.Title>
                    </DataTable.Header>

                    <DataTable.Row>
                    <DataTable.Cell>Frozen yogurt</DataTable.Cell>
                    <DataTable.Cell numeric>159</DataTable.Cell>
                    <DataTable.Cell numeric>6.0</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                    <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
                    <DataTable.Cell numeric>237</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Pagination
                    page={1}
                    numberOfPages={3}
                    onPageChange={(page) => { console.log(page); }}
                    label="1-2 of 6"
                    />
                </DataTable>
            </View>
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
        flexBasis: '57%',
        margin: 10,
    },
    textInput: {
        margin: 10,
    },
  });
