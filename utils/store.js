import { combineReducers, createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { decksReducer, quizReducer } from "../reducers";

const rootReducer = combineReducers({ decks: decksReducer, quiz: quizReducer });

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
