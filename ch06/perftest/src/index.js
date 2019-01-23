import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { registerObserver } from 'react-perf-devtool'

registerObserver();
ReactDOM.render(<App />, document.getElementById('root'));
