import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="panel">
                <div className="panel-heading">
                    <h2 className="text-center">Router Config App</h2>
                    <div className="row">
                    <div className="col-xs-12">
                        <Link className="btn btn-success menu" to="/">Home</Link>
                        <Link className="btn btn-success menu" to="/about">About</Link>
                        <Link className="btn btn-success menu" to="/songs">Songs</Link>
                        <Link className="btn btn-success menu" to="/asdf">ASDF</Link>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header; 