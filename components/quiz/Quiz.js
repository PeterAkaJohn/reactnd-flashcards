import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions
} from "react-native";
import { NavigationActions } from "react-navigation";
import withQuiz from "../hoc/withQuiz";
import QuestionList from "./QuestionList";

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      correctAnswers: 0,
      showResult: false
    };
    this.toHome = this.toHome.bind(this);
    this.submitQuiz = this.submitQuiz.bind(this);
  }

  static navigationOptions() {
    return {
      title: `Quiz`
    };
  }
  toHome() {
    this.props.navigation.goBack();
  }
  submitQuiz() {
    this.setState({ showResult: true });
    //call redux
  }
  render() {
    const { questions } = this.props;
    return (
      <View>
        {!this.props.quiz.done && (
          <View style={styles.counter}>
            <Text style={styles.counterText}>
              {this.props.quiz.answered}/{this.props.questions.length}
            </Text>
          </View>
        )}

        {!this.props.quiz.done ? (
          <QuestionList {...this.props} />
        ) : (
          <View>
            <Text>
              Your score was {this.props.quiz.correct} correct, and{" "}
              {this.props.quiz.wrong} wrong
            </Text>
          </View>
        )}

        <View style={styles.ctas}>
          <TouchableOpacity onPress={this.toHome}>
            <Text>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ctas: {
    alignItems: "center",
    justifyContent: "center"
  },
  counter: {
    position: "absolute",
    top: 10,
    left: 10
  },
  counterText: {
    fontWeight: "700"
  }
});

export default withQuiz(Quiz);
