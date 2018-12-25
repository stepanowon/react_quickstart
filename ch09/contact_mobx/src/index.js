import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/App';
import ContactStore from './stores/ContactStore';
import { Provider } from 'mobx-react';

const contactStore = new ContactStore();

ReactDOM.render(
    <Provider contactStore={contactStore}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

