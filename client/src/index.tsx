import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import 'semantic-ui-css/semantic.min.css';
import App from "./components/App";
import configureStore from "./configureStore";
import registerServiceWorker from './registerServiceWorker';
import {VisibilityFilters} from "./state/visibility/types";

const store = configureStore({
    todos: {
        data: [],
        error: undefined,
        loading: false
    },
    visibility: {
        filter: VisibilityFilters.SHOW_ALL
    }
});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);

registerServiceWorker();
