import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { insertNewQuestion } from "../../actions";

class AddCard extends Component {
  constructor() {
    super();
    this.state = {
      question: "",
      answer: ""
    };

    this.submitNewQuestion = this.submitNewQuestion.bind(this);
  }
  static navigationOptions() {
    return {
      title: `Add a card`
    };
  }

  submitNewQuestion() {
    const { question, answer } = this.state;
    const { deckName } = this.props.navigation.state.params;

    if (question && answer) {
      this.props.insertNewQuestion(deckName, { question, answer }).then(() => {
        this.setState({
          question: "",
          answer: ""
        });
        this.props.navigation.goBack();
      });
    }
  }

  render() {
    return (
      <View>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={question => this.setState({ question })}
          value={this.state.question}
        />
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={answer => this.setState({ answer })}
          value={this.state.answer}
        />
        <TouchableOpacity
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onPress={this.submitNewQuestion}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(null, { insertNewQuestion })(AddCard);
