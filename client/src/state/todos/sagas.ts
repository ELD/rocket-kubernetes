import {AnyAction} from "redux";
import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import callApi from "../../utils/callApi";
import {
    fetchTodoError,
    fetchTodoSuccess,
    postTodoError,
    postTodoSuccess,
    toggleTodoError,
    toggleTodoSuccess
} from "./actions";
import {TodoActionTypes} from "./types";

const API_ENDPOINT = process.env.TODO_APP_API_ENDPOINT || 'http://localhost:8000';

function* handleFetchTodoRequest(): Generator {
    try {
        const res = yield call(callApi, 'GET', API_ENDPOINT, '/todos');

        if (res.error) {
            yield put(fetchTodoError(res.error));
        } else {
            yield put(fetchTodoSuccess(res));
        }
    } catch (err) {
        if (err instanceof Error) {
            yield put(fetchTodoError(err.stack!));
        } else {
            yield put(fetchTodoError('An unknown error occurred'));
        }
    }
}

function* watchFetchRequest() {
    yield takeEvery(TodoActionTypes.FETCH_TODO_REQUEST, handleFetchTodoRequest);
}

function* handleNewTodoRequest(newTodoAction: AnyAction): Generator {
    try {
        const res = yield call(callApi, 'POST', API_ENDPOINT, '/todos', newTodoAction.payload);

        if (res.error) {
            yield put(postTodoError(res.error));
        } else {
            yield put(postTodoSuccess(res));
        }
    } catch (err) {
        if (err instanceof Error) {
            yield put(postTodoError(err.stack!));
        } else {
            yield put(postTodoError('An unknown error occurred'));
        }
    }
}

function* watchTodoRequest(): Generator {
    yield takeEvery(TodoActionTypes.POST_TODO_REQUEST, handleNewTodoRequest);
}

function* handleToggleTodo(todo: AnyAction): Generator {
    try {
        const res = yield call(callApi, 'PUT', API_ENDPOINT, `/todos/${todo.payload.id}`,
            {
                completed: !todo.payload.completed,
                ...todo.payload,
            });

        if (res.error) {
            yield put(toggleTodoError(res.error));
        } else {
            yield put(toggleTodoSuccess(res));
        }
    } catch (err) {
        if (err instanceof Error) {
            yield put(toggleTodoError(err.stack!));
        } else {
            yield put(toggleTodoError('An unknown error occurred'));
        }
    }
}

function* watchToggleTodoRequest(): Generator {
    yield takeEvery(TodoActionTypes.TOGGLE_TODO_REQUEST, handleToggleTodo);
}

function* todoSaga() {
    yield all([
        fork(watchFetchRequest),
        fork(watchTodoRequest),
        fork(watchToggleTodoRequest)
    ]);
}

export default todoSaga;
