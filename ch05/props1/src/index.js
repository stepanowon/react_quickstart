import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calc from './Calc_func';
import registerServiceWorker from './registerServiceWorker';

let values = { y:4 };
ReactDOM.render(<Calc {...values} />, document.getElementById('root'));
registerServiceWorker();
