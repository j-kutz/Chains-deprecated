import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Paragraph, Dialog, Portal, Checkbox, Text } from 'react-native-paper'
import produce from 'immer'

export default class SelectPlayers extends Component {
    state = {
        visible: false,
        players: [{"name":"Michael", "checked":"unchecked"}, {"name":"Dwight", "checked":"unchecked"}, {"name":"Jim", "checked":"unchecked"}],
        selectedPlayers: [],
    };

    _showDialog = () => this.setState({ visible: true });

    _hideDialog = () => this.setState({ visible: false });

    toggleCheckbox(player) {
        let checkedString = player.checked === 'checked' ?  'unchecked' : 'checked';
        this.setState( 
            produce(draft => { 
                draft.players[this.state.players.indexOf(player)].checked = checkedString;
            }),
        );
        if(checkedString === 'checked'){
            this.setState({ selectedPlayers: [...this.state.selectedPlayers, player.name] })
        } else {
            this.setState({ selectedPlayers: this.state.selectedPlayers.filter(function(player1) {
                return player1 !== player.name
            })})
        }
    }

    render() {
        return (
            <View>
                <Button style={styles.button}  mode="contained" onPress={this._showDialog}>Select Player</Button>
                <Portal>
                    <Dialog
                        visible={this.state.visible}
                        onDismiss={this._hideDialog}>
                        <Dialog.Title>Select Players</Dialog.Title>
                        <Dialog.Content>
                            {this.state.players.map(player =>
                                <View key={player.name} style={styles.flexContainer}>
                                    <Checkbox
                                        status={player.checked}
                                        onPress={this.toggleCheckbox.bind(this, player)}
                                    />
                                    <Text>{player.name}</Text>
                                </View>
                            )}
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={this._hideDialog}>Cancel</Button>
                            <Button onPress={() => {this._hideDialog(); this.props.selectPlayers(this.state.selectedPlayers);}}>Select</Button>
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

