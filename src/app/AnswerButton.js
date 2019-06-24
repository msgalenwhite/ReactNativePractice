import React, { Component } from 'react'
import { Button, Alert, View, StyleSheet } from 'react-native'

export default class AnswerButton extends Component {
  _onAnswerAlert = () => {
    Alert.alert('cool')
  }

  _onPressButton = () => {
    Alert.alert(
      "Good Choice!",
      `I like ${this.props.answerText}, too!`,
      [{
        text: 'Continue',
        onPress: this.props.incrementQuestion
      }]
    )
  }

  render() {
    return(
      <View style={[
        styles.button,
        { backgroundColor: this.props.color }
      ]}>
        <Button
          onPress={this._onPressButton}
          title={this.props.answerText}
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
