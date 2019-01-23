import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import AppContainer from './components/AppContainer';
import TodoStore from './redux/TodoStore';
import { Provider } from 'react-redux'; 
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={TodoStore}>
        <AppContainer />
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
