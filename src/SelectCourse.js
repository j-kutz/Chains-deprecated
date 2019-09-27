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
                <Button style={styles.button}  mode="contained" onPress={this._showDialog}>Select Course</Button>
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
    button: {
        margin: 10,
    },
  });
