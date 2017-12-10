import { GET_DECKS, NEW_DECK } from "../actions";

import { getStartingState } from "../utils/helper";

export function decksReducer(state = {}, action) {
  switch (action.type) {
    case GET_DECKS:
      return action.payload;
    case NEW_DECK:
      return {
        ...state,
        [action.payload.title]: action.payload
      };
    default:
      return state;
  }
}
