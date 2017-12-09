import { combineReducers, createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { decksReducer } from "../reducers";

const rootReducer = combineReducers({ decks: decksReducer });

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
