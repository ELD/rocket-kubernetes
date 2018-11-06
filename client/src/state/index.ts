import {Action, AnyAction, combineReducers, Dispatch} from "redux";
import {all, fork} from "redux-saga/effects";
import {todoReducer} from "./todos/reducer";
import todoSaga from "./todos/sagas";
import {ITodoState} from "./todos/types";
import {visibilityReducer} from "./visibility/reducer";
import {IVisibilityFiltersState} from "./visibility/types";

export interface IApplicationState {
    todos: ITodoState,
    visibility: IVisibilityFiltersState
}

export interface IConnectedReduxProps<A extends Action = AnyAction> {
    dispatch: Dispatch<A>
}

export const rootReducer = combineReducers<IApplicationState>({
    todos: todoReducer,
    visibility: visibilityReducer,
});

export function* rootSaga(): Generator {
    yield(all([fork(todoSaga)]));
}
