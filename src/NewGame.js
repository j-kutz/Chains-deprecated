import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import SelectCourse from './SelectCourse';

export default class NewGame extends Component {
    state = {
        showAddCourse: false,
        courseName: '',
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
        if(this.state.showAddCourse){
            return (
                <View>
                    <Button style={styles.button1} mode="contained">Select Course</Button>
                    <Button style={styles.button1} mode="contained">Add Course</Button>
                    <TextInput
                        label='Course Name'
                        value={this.state.courseName}
                        onChangeText={courseName => this.setState({ courseName })}
                    />
                </View>
            )
        } 
        else{
            return (
                <View>
                    <SelectCourse />
                    <Button style={styles.button1} mode="contained" onPress={() => this.setState({showAddCourse: !this.state.showAddCourse})}>Add Course</Button>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    button1: {
        margin: 10,
    },
  });
