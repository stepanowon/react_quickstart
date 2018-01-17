import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/App';
import ContactStore from './store/ContactStore';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={ContactStore}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
