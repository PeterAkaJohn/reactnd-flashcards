import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { white, redLight, primaryText } from "../../utils/colors";

class Deck extends Component {
  constructor() {
    super();

    this.onPress = this.onPress.bind(this);
  }
  onPress() {
    this.props.navigation.navigate("DeckDetail", {
      deckName: this.props.deck.title
    });
  }
  render() {
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View style={styles.deckCard}>
          <View>
            <Text style={[styles.defaultText, styles.deckTitle]}>
              {this.props.deck.title}
            </Text>
          </View>
          <View>
            <Text style={styles.defaultText}>
              {this.props.deck.questions.length} cards
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  deckCard: {
    flex: 1,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 30,
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: "rgba(0, 0, 0, 0.24)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    backgroundColor: redLight
  },
  deckTitle: {
    fontSize: 25
  },
  defaultText: {
    color: primaryText
  }
});

export default Deck;
