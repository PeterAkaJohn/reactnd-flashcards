import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import {
  blue,
  purple,
  white,
  greenLight,
  primaryText
} from "../../utils/colors";
import Decks from "../decks/Decks";
import AddCardTab from "../addCard/AddCardTab";
import DeckDetail from "../deckDetail/DeckDetail";
import Quiz from "../quiz/Quiz";
import NewDeck from "../newdeck/NewDeck";

const Tabs = TabNavigator(
  {
    Decks: {
      screen: Decks,
      navigationOptions: {
        tabBarLabel: "Decks",
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="cards" size={30} color={tintColor} />
        )
      }
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        tabBarLabel: "New Deck",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="plus" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: primaryText,
      style: {
        height: 56,
        backgroundColor: greenLight,
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
);

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: greenLight
      }
    }
  },
  AddCardTab: {
    screen: AddCardTab,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: greenLight
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: greenLight
      }
    }
  }
});

export default MainNavigator;
