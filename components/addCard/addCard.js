import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform
} from "react-native";
import { connect } from "react-redux";
import { insertNewQuestion } from "../../actions";
import { blueBase, greenLight, primaryText } from "../../utils/colors";

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
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Question"
          onChangeText={question => this.setState({ question })}
          value={this.state.question}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Answer"
          onChangeText={answer => this.setState({ answer })}
          value={this.state.answer}
        />
        <TouchableOpacity style={styles.btn} onPress={this.submitNewQuestion}>
          <Text style={styles.btnText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: blueBase,
    alignItems: "center",
    justifyContent: "center"
  },
  textInput: {
    borderColor: greenLight,
    borderWidth: 1,
    height: 45,
    borderRadius: 2,
    backgroundColor: greenLight,
    width: 300,
    marginBottom: 50,
    color: primaryText,
    textAlign: "center",
    fontWeight: "500",
    fontSize: 18
  },
  btn: {
    justifyContent: "center",
    height: 45,
    width: 200,
    marginBottom: 10,
    padding: 10,
    backgroundColor: greenLight,
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
  btnText: {
    textAlign: "center",
    color: primaryText,
    fontSize: 20,
    fontWeight: "700"
  }
});

export default connect(null, { insertNewQuestion })(AddCard);
