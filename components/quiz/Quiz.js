import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { NavigationActions } from "react-navigation";

class Quiz extends Component {
  constructor() {
    super();

    this.continueQuiz = this.continueQuiz.bind(this);
    this.toHome = this.toHome.bind(this);
  }

  continueQuiz() {
    const {
      questions,
      questionsAnswered,
      deckDetailRouteKey
    } = this.props.navigation.state.params;

    this.props.navigation.navigate("Quiz", {
      questions,
      questionsAnswered: questionsAnswered + 1,
      deckDetailRouteKey
    });
  }
  static navigationOptions({ navigation }) {
    const { questions, questionsAnswered } = navigation.state.params;
    if (!questionsAnswered) {
      return {
        title: `Quiz 0/${questions.length}`
      };
    }
    return {
      title: `Quiz ${questionsAnswered}/${questions.length}`
    };
  }
  toHome() {
    const { deckDetailRouteKey } = this.props.navigation.state.params;
    this.props.navigation.goBack(deckDetailRouteKey);
  }
  render() {
    const { questions, questionsAnswered } = this.props.navigation.state.params;
    return (
      <View>
        {questions.length > questionsAnswered ? (
          <TouchableOpacity onPress={this.continueQuiz}>
            <Text>
              Quiz Component
              {this.props.navigation.state.params.questionsAnswered}
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={this.toHome}>
            <Text>End Quiz</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

export default Quiz;
