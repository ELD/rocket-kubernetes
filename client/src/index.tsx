import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from "redux";
import App from "./components/App";
import './index.css';
import {rootReducer} from './reducers/index';
import registerServiceWorker from './registerServiceWorker';
import {DefaultState} from "./types/AppState";

const store = createStore(rootReducer, DefaultState as any);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);

registerServiceWorker();
