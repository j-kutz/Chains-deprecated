import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper'

export default class SelectCourse extends Component {
    state = {
        visible: false,
    };

    _showDialog = () => this.setState({ visible: true });

    _hideDialog = () => this.setState({ visible: false });

    render() {
        return (
            <View>
                <Button onPress={this._showDialog} style={styles.button1} mode="contained">Select Course</Button>
                <Portal>
                    <Dialog
                        visible={this.state.visible}
                        onDismiss={this._hideDialog}>
                        <Dialog.Title>Select Course</Dialog.Title>
                        <Dialog.Content>
                            <Paragraph>List courses here</Paragraph>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={this._hideDialog}>Cancel</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button1: {
        margin: 10,
    },
  });
