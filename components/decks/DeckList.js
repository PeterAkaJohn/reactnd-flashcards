import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import Deck from "./Deck";

function DeckList(props) {
  return (
    <FlatList
      style={styles.deckContainer}
      contentContainerStyle={styles.contentContainer}
      data={props.decks}
      keyExtractor={(item, index) => index}
      renderItem={({ item }) => (
        <Deck key={item.title} deck={item} {...props} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  deckContainer: {
    flex: 1,
    width: "100%"
  }
});

export default DeckList;
