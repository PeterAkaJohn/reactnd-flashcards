import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import Swiper from "react-native-deck-swiper";
import Question from "./Question";
import { connect } from "react-redux";
import { updateQuiz } from "../../actions";

class QuestionList extends Component {
  constructor() {
    super();

    this.submitCorrect = this.submitCorrect.bind(this);
    this.submitIncorrect = this.submitIncorrect.bind(this);
  }
  submitCorrect(cardIndex) {
    const { deck } = this.props;
    let { answered, correct, wrong, done } = this.props.quiz;
    answered = answered + 1;
    correct = correct + 1;
    done = this.props.questions.length === answered;

    this.props.updateQuiz(answered, correct, wrong, done);
  }
  submitIncorrect(cardIndex) {
    const { deck } = this.props;
    let { answered, correct, wrong, done } = this.props.quiz;
    answered = answered + 1;
    wrong = wrong + 1;
    done = this.props.questions.length === answered;

    this.props.updateQuiz(answered, correct, wrong, done);
  }
  render() {
    return (
      <Swiper
        style={styles.swiperContainer}
        backgroundColor={"transparent"}
        marginBottom={50}
        verticalSwipe={false}
        cards={this.props.questions}
        renderCard={question => {
          return <Question question={question} {...this.props} />;
        }}
        onSwipedRight={this.submitCorrect}
        onSwipedLeft={this.submitIncorrect}
        cardIndex={0}
      />
    );
  }
}

const styles = StyleSheet.create({
  swiperContainer: {
    flex: 1
  }
});

function mapStateToProps({ quiz }) {
  return {
    quiz
  };
}

export default connect(mapStateToProps, { updateQuiz })(QuestionList);
