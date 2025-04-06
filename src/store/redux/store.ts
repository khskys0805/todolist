import { combineReducers, createStore } from "redux";
import toDoReducer from "./todoStore";

const rootReducer = combineReducers({
	todo: toDoReducer,
});

export const store = createStore(rootReducer);
export type RootState = ReturnType<typeof rootReducer>;
