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
import QuizSummary from "./QuizSummary";
import { blueBase } from "../../utils/colors";

class Quiz extends Component {
  constructor() {
    super();
    this.toHome = this.toHome.bind(this);
  }

  static navigationOptions() {
    return {
      title: `Quiz`
    };
  }
  toHome() {
    this.props.navigation.goBack();
  }
  render() {
    const { questions } = this.props;
    return (
      <View style={styles.container}>
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
          <QuizSummary
            correct={this.props.quiz.correct}
            wrong={this.props.quiz.wrong}
            toHome={this.toHome}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: blueBase,
    justifyContent: "center",
    alignItems: "center"
  },
  counter: {
    position: "absolute",
    top: 13,
    left: 10,
    width: "100%"
  },
  counterText: {
    fontWeight: "700"
  },
  answerContainer: {
    position: "absolute",
    top: 5,
    fontSize: 15
  },
  answerText: {
    paddingTop: 5,
    justifyContent: "center",
    fontSize: 15
  }
});

export default withQuiz(Quiz);
