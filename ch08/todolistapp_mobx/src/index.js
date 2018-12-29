import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import todoStore from './mobx/TodoStore';
import { Provider } from 'mobx-react';

ReactDOM.render(
  <Provider todoStore={todoStore}>
    <App />
  </Provider>, document.getElementById('root')
);

serviceWorker.unregister();
