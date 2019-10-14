import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { Button, Surface } from 'react-native-paper'

export class Dashboard extends Component {
    static navigationOptions = {
        title: 'Chains',
        headerStyle: {
          backgroundColor: '#6200ee',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
          flex: 1,
        },
      };

    render(){
        return(
            <View>
              <Surface style={styles.surface}>
                <Image 
                  style={styles.image}
                  source={require('../assets/disc-golf-basket.jpg')}
                />
              </Surface>
              <Button style={styles.button1} mode="contained" onPress={() => this.props.navigation.navigate('NewGame')}>New Game</Button>
            </View>
        );
    }
}

export default (Dashboard);

const styles = StyleSheet.create({
    button1: {
        margin: 10,
    },
    image: {
      marginTop: 30,
      width: 200,
      height: 400,
      resizeMode: 'stretch',
    },
    surface: {
      padding: 8,
      margin: 10,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 4,
    },
  });