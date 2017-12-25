import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Platform,
  Animated
} from "react-native";
import { connect } from "react-redux";

import { updateQuiz } from "../../actions";

class Question extends Component {
  constructor() {
    super();

    this.state = {
      questionAnswered: false
    };

    this.submitCorrect = this.submitCorrect.bind(this);
    this.submitIncorrect = this.submitIncorrect.bind(this);
  }
  submitCorrect() {
    let { answered, correct, wrong, done } = this.props.quiz;
    if (!this.props.quiz.done) {
      if (this.state.questionAnswered) {
        correct = correct + 1;
        wrong = wrong - 1;
      } else {
        answered = answered + 1;
        correct = correct + 1;
      }
      done = this.props.questions.length === answered;
      this.props.updateQuiz(answered, correct, wrong, done);

      this.setState({ questionAnswered: true });
    }
  }
  submitIncorrect() {
    let { answered, correct, wrong, done } = this.props.quiz;
    if (!this.props.quiz.done) {
      if (this.state.questionAnswered) {
        correct = correct - 1;
        wrong = wrong + 1;
      } else {
        answered = answered + 1;
        wrong = wrong + 1;
      }
      done = this.props.questions.length === answered;
      this.props.updateQuiz(answered, correct, wrong, done);

      this.setState({ questionAnswered: true });
    }
  }
  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    });
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ["0deg", "180deg"]
    });
    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ["180deg", "360deg"]
    });
  }
  flipCard() {
    if (this.value >= 90) {
      Animated.spring(this.animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10
      }).start();
    } else {
      Animated.spring(this.animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10
      }).start();
    }
  }
  render() {
    const frontAnimatedStyle = {
      transform: [{ rotateY: this.frontInterpolate }]
    };
    const backAnimatedStyle = {
      transform: [{ rotateY: this.backInterpolate }]
    };
    return (
      <View style={styles.questionContainer}>
        <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
          <View>
            <Text style={styles.questionText}>
              {this.props.question.question}
            </Text>
          </View>
          <View>
            <TouchableOpacity style={styles.btn} onPress={this.submitCorrect}>
              <Text style={styles.btnText}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={this.submitIncorrect}>
              <Text style={styles.btnText}>Incorrect</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
        <Animated.View
          style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle]}
        >
          <Text style={styles.questionText}>{this.props.question.answer}</Text>
        </Animated.View>

        <TouchableOpacity
          style={[styles.btnBottom, styles.btn]}
          onPress={() => this.flipCard()}
        >
          <Text style={styles.btnText}>See answer</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  questionContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.7
  },
  questionText: {
    fontSize: 25,
    alignItems: "center",
    textAlign: "center"
  },
  btn: {
    justifyContent: "center",
    height: 45,
    width: 200,
    marginBottom: 10,
    padding: 10,
    backgroundColor: "green",
    ...Platform.select({
      ios: {
        borderRadius: 7,
        marginLeft: 40,
        marginRight: 40
      },
      android: {
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 2,
        alignSelf: "flex-end",
        justifyContent: "center",
        alignItems: "center"
      }
    })
  },
  btnBottom: {
    position: "absolute",
    bottom: 0
  },
  btnText: {
    textAlign: "center"
  },
  flipCard: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backfaceVisibility: "hidden"
  }
});

function mapStateToProps({ quiz }) {
  return {
    quiz
  };
}

export default connect(mapStateToProps, { updateQuiz })(Question);
