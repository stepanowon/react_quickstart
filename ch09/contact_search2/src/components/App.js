import React, { Component } from 'react';
import Loading from './Loading';
import { Portal } from 'react-portal';
import { renderRoutes } from 'react-router-config';
import routes from '../routes';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
            <div className="container">
                {renderRoutes(routes)}
                <Portal node={document && document.getElementById('modal-area')}>
                    <Loading>
                        <div className="well title"><h4>데이터 처리중</h4></div>
                    </Loading>    
                </Portal>
            </div>
            </Router>
        );
    }
}

export default App;
