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
  }
  render() {
    const { questions } = this.props;
    return (
      <View>
        <QuestionList {...this.props} />
        <View style={styles.ctas}>
          {!this.state.showResult ? (
            <TouchableOpacity onPress={this.submitQuiz}>
              <Text>submitQuiz</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={this.toHome}>
              <Text>End Quiz</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ctas: {
    alignItems: "center",
    justifyContent: "center"
  }
});

export default withQuiz(Quiz);
