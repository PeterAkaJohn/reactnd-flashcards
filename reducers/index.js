import {
  GET_DECKS,
  NEW_DECK,
  NEW_QUESTION,
  INIT_QUIZ,
  UPDATE_QUIZ
} from "../actions";

export function decksReducer(state = {}, action) {
  switch (action.type) {
    case GET_DECKS:
      return action.payload;
    case NEW_DECK:
      return {
        ...state,
        [action.payload.title]: action.payload
      };
    case NEW_QUESTION:
      return action.payload;
    default:
      return state;
  }
}

export function quizReducer(state = {}, action) {
  switch (action.type) {
    case INIT_QUIZ:
      return action.payload;
    case UPDATE_QUIZ:
      return {
        answered: action.payload.answered,
        correct: action.payload.correct,
        wrong: action.payload.wrong,
        done: action.payload.done
      };
    default:
      return state;
  }
}
