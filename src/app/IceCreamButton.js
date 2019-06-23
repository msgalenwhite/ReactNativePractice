import React, { Component } from 'react'
import { Button, Alert } from 'react-native'

export default class IceCreamButton extends Component {
  _onPressButton = () => {
    Alert.alert('Me, too!')
  }
  render() {
    return(
      <Button
        onPress={this._onPressButton}
        title="Mint Chip"
        color="green"
      />
    )
  }
}
