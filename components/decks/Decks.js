import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { getDecks } from "../../actions";

class Decks extends Component {
  componentDidMount() {
    this.props.getDecks().then(data => {
      console.log(data);
    });
  }
  render() {
    return (
      <View>
        <Text>{this.props.decks && JSON.stringify(this.props.decks)}</Text>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    decks: Object.keys(state.decks).map(deck => {
      return state.decks[deck];
    })
  };
}

export default connect(mapStateToProps, { getDecks })(Decks);
