import { combineReducers } from "redux";
import { filterTabsReducer } from "./filterTabsTodos";
import { todosReducer } from "./todosReducer";

export const rootReducer = combineReducers({
  todosReducer,
  filterTabsReducer
});
