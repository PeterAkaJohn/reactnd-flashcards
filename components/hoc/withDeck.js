import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { getDecks } from "../../actions";

function withDeck(WrappedComponent) {
  class WithDeck extends Component {
    componentDidMount() {
      this.props.getDecks();
    }
    static navigationOptions({ navigation }) {
      const { deckName } = navigation.state.params;
      return {
        title: `${deckName}`
      };
    }
    render() {
      return (
        <View style={styles.container}>
          <WrappedComponent {...this.props} />
        </View>
      );
    }
  }

  function mapStateToProps(state, ownProps) {
    const { deckName } = ownProps.navigation.state.params;
    return {
      deck: state.decks[deckName]
    };
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%"
    }
  });

  return connect(mapStateToProps, { getDecks })(WithDeck);
}

export default withDeck;
