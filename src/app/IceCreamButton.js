import React, { Component } from 'react'
import { Button, Alert, View, StyleSheet } from 'react-native'

export default class IceCreamButton extends Component {
  _onPressButton = () => {
    Alert.alert(`I like ${this.props.flavor}, too!`)
  }
  render() {
    return(
      <View style={[
        styles.button,
        { backgroundColor: this.props.color }
      ]}>
        <Button
          onPress={this._onPressButton}
          title={this.props.flavor}
          color="white"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
    borderRadius: 10,
    padding: 3
  }
})
