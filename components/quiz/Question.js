import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";

import {
  white,
  gray,
  pinkLight,
  redLight,
  primaryText
} from "../../utils/colors";

class Question extends Component {
  constructor() {
    super();

    this.state = {
      showAnswer: false
    };

    this.toggleShowAnswer = this.toggleShowAnswer.bind(this);
  }
  toggleShowAnswer() {
    const { showAnswer } = this.state;
    this.setState({ showAnswer: !showAnswer });
  }
  render() {
    return (
      <TouchableHighlight
        underlayColor={redLight}
        style={styles.questionContainer}
        onPress={this.toggleShowAnswer}
      >
        {this.state.showAnswer ? (
          <Text style={styles.questionText}>{this.props.question.answer}</Text>
        ) : (
          <Text style={styles.questionText}>
            {this.props.question.question}
          </Text>
        )}
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  questionContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    backgroundColor: pinkLight,
    borderRadius: 5
  },
  container: {
    flex: 1
  },
  questionText: {
    fontSize: 25,
    alignItems: "center",
    textAlign: "center",
    color: primaryText
  },
  answerText: {
    position: "absolute",
    top: 5,
    left: 0,
    right: 0,
    fontSize: 16,
    color: primaryText
  }
});

export default Question;
