import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import QuestionContainer from './src/app/QuestionContainer';
import questions from './src/app/questionData'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questionIndex: 0
    }
    this.incrementQuestion = this.incrementQuestion.bind(this)
  }

  incrementQuestion() {
    let newIndex;
    const nextQuestionIndex = this.state.questionIndex + 1

    if (nextQuestionIndex === questions.length) {
      newIndex = 0
    } else {
      newIndex = nextQuestionIndex
    }
    this.setState({
      questionIndex: newIndex
    })
  }

  render() {
    const currentQuestionData = questions[this.state.questionIndex]

    return (
      <QuestionContainer
        questionIndex={this.state.questionIndex}
        incrementQuestion={this.incrementQuestion}
        questionData={currentQuestionData}
      />
    )
  }
}
