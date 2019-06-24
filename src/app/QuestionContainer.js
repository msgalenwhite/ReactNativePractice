import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AnswersContainer from './AnswersContainer';

export default class QuestionContainer extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.title}>
          {this.props.questionData.question}
        </Text>

        <AnswersContainer
          answers={this.props.questionData.answers}
          incrementQuestion={this.props.incrementQuestion}
        />
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
