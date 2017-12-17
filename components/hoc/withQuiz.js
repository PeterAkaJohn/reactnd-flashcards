import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { getDecks } from "../../actions";

function withQuiz(WrappedComponent) {
  class WithQuiz extends Component {
    componentDidMount() {
      this.props.getDecks();
    }
    static navigationOptions() {
      return {
        title: `Quiz`
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
      questions: state.decks[deckName].questions
    };
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%"
    }
  });

  return connect(mapStateToProps, { getDecks })(WithQuiz);
}

export default withQuiz;
