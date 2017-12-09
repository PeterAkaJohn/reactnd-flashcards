import { GET_DECKS } from "../actions";

import { getStartingState } from "../utils/helper";

export function decksReducer(state = {}, action) {
  switch (action.type) {
    case GET_DECKS:
      return action.payload;
    default:
      return state;
  }
}
