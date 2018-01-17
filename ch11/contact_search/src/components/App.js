import React, { Component } from 'react';
import Loading from './Loading';
//import { Portal } from 'react-portal';
import { renderRoutes } from 'react-router-config';
import routes from '../routes';

class App extends Component {
    render() {
        return (
            <div className="container">
                {renderRoutes(routes)}
                <Loading>
                    <div className="well title"><h4>데이터 처리중</h4></div>
                </Loading>    
            </div>
        );
    }
}

export default App;
