import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Paragraph, Dialog, Portal, Checkbox, Text } from 'react-native-paper'

export default class SelectPlayers extends Component {
    state = {
        visible: false,
        checked: false,
        selectedPlayers: [],
        players: ["Michael", "Dwight", "Jim"]
    };

    _showDialog = () => this.setState({ visible: true });

    _hideDialog = () => this.setState({ visible: false });

    toggleCheckbox(status,) {

    }

    render() {
        const { checked } = this.state;
        return (
            <View>
                <Button style={styles.button}  mode="contained" onPress={this._showDialog}>Select Player</Button>
                <Portal>
                    <Dialog
                        visible={this.state.visible}
                        onDismiss={this._hideDialog}>
                        <Dialog.Title>Select Players</Dialog.Title>
                        <Dialog.Content>
                            {this.state.players.map((item, index) =>
                                <View key={item} style={styles.flexContainer}>
                                    <Checkbox
                                        status={this.state[item.id] ? 'checked' : 'unchecked'}
                                        onPress={(event) => { this.setState({ [item.id]: !event.target.value }); }}
                                    />
                                    <Text>{item}</Text>
                                </View>
                            )}
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={this._hideDialog}>Cancel</Button>
                            <Button onPress={this.props.selectPlayers.bind(this, this.state.selectedPlayers)}>Select</Button>
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

