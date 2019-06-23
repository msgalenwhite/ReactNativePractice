import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { flavors } from './flavors'
import IceCreamButton from './IceCreamButton'

export default class IceCreamContainer extends Component {
  _buttonChoices() {
    const buttons = flavors.map((flavor) => {
      return (
        <IceCreamButton
          flavor={flavor.name}
          key={flavor.name}
          color={flavor.color}
        />
      )
    })
    return buttons
  }

  render() {
    const buttons = this._buttonChoices()

    return (
      <View style={styles.container}>
        {buttons}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
})
