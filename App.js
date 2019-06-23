import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import IceCreamButton from './src/app/IceCreamButton';

export default class HomePage extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.blue}>What's your favorite flavor of ice cream?</Text>

        <View style={styles.viewStyle}>
          <IceCreamButton/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  blue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  },
  viewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  }
})
