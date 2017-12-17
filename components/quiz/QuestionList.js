import React from "react";
import { View, Text, FlatList } from "react-native";
import Question from "./Question";

function QuestionList(props) {
  return (
    <FlatList
      horizontal
      data={props.questions}
      renderItem={({ item }) => {
        return <Question question={item} {...this.props} />;
      }}
      keyExtractor={(item, index) => index}
    />
  );
}

export default QuestionList;
