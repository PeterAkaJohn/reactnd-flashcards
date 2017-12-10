import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Platform
} from "react-native";

class DeckDetail extends Component {
  constructor() {
    super();

    this.onPressAddCard = this.onPressAddCard.bind(this);
    this.onPressStartQuiz = this.onPressStartQuiz.bind(this);
  }
  static navigationOptions({ navigation }) {
    const { deck } = navigation.state.params;

    return {
      title: `${deck.title}`
    };
  }

  onPressAddCard() {
    const { deck } = this.props.navigation.state.params;
    this.props.navigation.navigate("AddCard", { deck });
  }

  onPressStartQuiz() {
    const { deck } = this.props.navigation.state.params;

    this.props.navigation.navigate("Quiz", {
      questions: deck.questions,
      questionsAnswered: 0,
      deckDetailRouteKey: this.props.navigation.state.key
    });
  }
  render() {
    const { deck } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.deckTitle}>{deck.title}</Text>
          <Text style={styles.deckCardNumber}>
            {deck.questions.length} cards
          </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.btn} onPress={this.onPressAddCard}>
            <Text style={styles.btnText}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={this.onPressStartQuiz}>
            <Text style={styles.btnText}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: "center",
    justifyContent: "space-around"
  },
  deckTitle: {
    fontSize: 25
  },
  deckCardNumber: {
    fontSize: 18,
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
  btnText: {
    textAlign: "center"
  }
});

export default DeckDetail;
