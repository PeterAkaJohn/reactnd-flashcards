import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Platform
} from "react-native";

import withDeck from "../hoc/withDeck";

class DeckDetail extends Component {
  constructor() {
    super();

    this.onPressAddCard = this.onPressAddCard.bind(this);
    this.onPressStartQuiz = this.onPressStartQuiz.bind(this);
  }

  onPressAddCard() {
    const { deck } = this.props;
    this.props.navigation.navigate("AddCard", { deckName: deck.title });
  }

  onPressStartQuiz() {
    const { deck } = this.props;

    this.props.navigation.navigate("Quiz", {
      deckName: deck.title
    });
  }
  render() {
    const { deck } = this.props;
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

export default withDeck(DeckDetail);
