import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import AnswerButton from './AnswerButton'

export default class AnswersContainer extends Component {
  _buttonChoices() {
    const buttons = this.props.answers.map((answer) => {
      return (
        <AnswerButton
          answerText={answer.name}
          key={answer.name}
          color={answer.color}
          incrementQuestion={this.props.incrementQuestion}
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
