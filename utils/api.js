import { AsyncStorage } from "react-native";
import { getDefaultDeckObject, startingState } from "./helper";

const STORAGE_KEY = "reactnd-flashcards";

function initializeStorage() {
  return AsyncStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(startingState)
  ).then(function() {
    return startingState;
  });
}

export function getDecksFromStorage() {
  return AsyncStorage.getItem(STORAGE_KEY).then(data => {
    if (!data) {
      //no data available load starting data
      return initializeStorage();
    }
    return JSON.parse(data);
  });
}

export function getDeck(deckId) {
  return AsyncStorage.getItem(STORAGE_KEY).then(data => {
    console.log(data);
    return JSON.parse(data[deckId]);
  });
}

export function saveDeckTitle(deckName) {
  return AsyncStorage.mergeItem(
    STORAGE_KEY,
    JSON.stringify({
      [deckName]: getDefaultDeckObject(deckName)
    })
  ).then(() => {
    return getDefaultDeckObject(deckName);
  });
}

// card is made up of question and answer strings
export function addCardToDeck(deckId, card) {
  return AsyncStorage.mergeItem(
    STORAGE_KEY,
    JSON.stringify({
      [deckId]: [...questions, card]
    })
  );
}
