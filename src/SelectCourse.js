import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Paragraph, Dialog, Portal, RadioButton, Text } from 'react-native-paper'

export default class SelectCourse extends Component {
    state = {
        visible: false,
        selectedCourse: '',
        courseList: ["Center Hill", "Shelby Farms", "Sycamore Creek"]
    };

    _showDialog = () => this.setState({ visible: true });

    _hideDialog = () => this.setState({ visible: false });

    render() {
        return (
            <View>
                <Button style={styles.button}  mode="contained" onPress={this._showDialog}>Select Course</Button>
                <Portal>
                    <Dialog
                        visible={this.state.visible}
                        onDismiss={this._hideDialog}>
                        <Dialog.Title>Select Course</Dialog.Title>
                        <Dialog.Content>
                            <RadioButton.Group
                                onValueChange={selectedCourse => this.setState({ selectedCourse })}
                                value={this.state.selectedCourse}
                            >
                                {this.state.courseList.map(course =>
                                    <View key={course} style={styles.flexContainer}>
                                        <RadioButton value={course} />
                                        <Text style={styles.flexC}>{course}</Text>
                                    </View>
                                )}
                            </RadioButton.Group>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={this._hideDialog}>Cancel</Button>
                            <Button onPress={this.props.selectCourse.bind(this, this.state.selectedCourse)}>Select</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        margin: 10,
    },
    flexContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
    },
  });
