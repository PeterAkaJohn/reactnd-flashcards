import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Dimensions
} from "react-native";

import withDeck from "../hoc/withDeck";
import {
  blueBase,
  redLight,
  primaryText,
  purpleLight,
  pinkLight
} from "../../utils/colors";

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
        <View style={styles.deckDetail}>
          <Text style={styles.deckTitle}>{deck.title}</Text>
          <Text style={styles.deckCardNumber}>
            {deck.questions.length} cards
          </Text>
        </View>
        <View style={styles.deckActions}>
          <TouchableOpacity
            style={[styles.btn, styles.btnAdd]}
            onPress={this.onPressAddCard}
          >
            <Text style={styles.btnText}>ADD CARD</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={deck.questions.length === 0}
            style={[styles.btn, styles.btnQuiz]}
            onPress={this.onPressStartQuiz}
          >
            <Text style={styles.btnText}>START QUIZ</Text>
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
    justifyContent: "center",
    backgroundColor: blueBase
  },
  deckTitle: {
    fontSize: 25,
    color: primaryText
  },
  deckCardNumber: {
    fontSize: 18,
    textAlign: "center",
    color: primaryText
  },
  deckDetail: {
    flex: 1,
    backgroundColor: redLight,
    borderRadius: 5,
    width: Dimensions.get("window").width * 0.7,
    margin: 30,
    marginTop: 50,
    marginBottom: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  deckActions: {
    flex: 1
  },
  btnAdd: {
    backgroundColor: purpleLight
  },
  btnQuiz: {
    backgroundColor: pinkLight
  },
  btn: {
    justifyContent: "center",
    height: 45,
    width: 200,
    marginBottom: 10,
    padding: 10,
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
    fontWeight: "600",
    fontSize: 18
  }
});

export default withDeck(DeckDetail);
