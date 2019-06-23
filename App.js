import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import IceCreamContainer from './src/app/IceCreamContainer';

export default class HomePage extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.title}>What's your favorite flavor of ice cream?</Text>

        <IceCreamContainer/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 50,
    padding: 20,
    textAlign: "center"
  },
  viewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  }
})
