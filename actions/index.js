import {
  getDecksFromStorage,
  saveDeckTitle,
  addCardToDeck
} from "../utils/api";
export const GET_DECKS = "GET_DECKS";
export const NEW_DECK = "NEW_DECK";
export const NEW_QUESTION = "NEW_QUESTION";

function onSuccessGetDecks(data) {
  return {
    type: GET_DECKS,
    payload: data
  };
}

export function getDecks() {
  return function(dispatch) {
    return getDecksFromStorage().then(
      data => {
        dispatch(onSuccessGetDecks(data));
      },
      error => console.log(error)
    );
  };
}

function onSuccessNewDeck(data) {
  return {
    type: NEW_DECK,
    payload: data
  };
}

export function insertNewDeck(deckName) {
  return function(dispatch) {
    return saveDeckTitle(deckName).then(
      data => {
        dispatch(onSuccessNewDeck(data));
        return data;
      },
      error => console.log(error)
    );
  };
}

function onSuccessInsertNewQuestion(data) {
  return {
    type: NEW_QUESTION,
    payload: data
  };
}

export function insertNewQuestion(deckName, card) {
  return function(dispatch) {
    return addCardToDeck(deckName, card).then(
      data => {
        dispatch(onSuccessInsertNewQuestion(data));
        return data;
      },
      error => console.log(error)
    );
  };
}
