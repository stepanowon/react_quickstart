import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import AppContainer from './components/AppContainer';
import ContactStore from './store/ContactStore';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={ContactStore}>
        <AppContainer />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
