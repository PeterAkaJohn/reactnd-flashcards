import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { getDecks } from "../../actions";
import { blueBase } from "../../utils/colors";

import withDecks from "../hoc/withDecks";
import DeckList from "./DeckList";

function Decks(props) {
  return (
    <View style={styles.container}>
      <DeckList style={styles.deckList} decks={props.decks} {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: blueBase
  },
  deckList: {
    flex: 1,
    width: "100%"
  }
});

export default withDecks(Decks);
