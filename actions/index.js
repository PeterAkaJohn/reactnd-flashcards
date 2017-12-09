import { getDecksFromStorage } from "../utils/api";
export const GET_DECKS = "GET_DECKS";

function onSuccessGetDecks(data) {
  console.log(data);
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
