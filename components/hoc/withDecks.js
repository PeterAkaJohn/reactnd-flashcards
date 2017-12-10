import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { getDecks } from "../../actions";

function withDecks(WrappedComponent) {
  class WithDecks extends Component {
    componentDidMount() {
      this.props.getDecks();
    }
    render() {
      return (
        <View style={styles.container}>
          <WrappedComponent {...this.props} />
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

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%"
    }
  });

  return connect(mapStateToProps, { getDecks })(WithDecks);
}

export default withDecks;
