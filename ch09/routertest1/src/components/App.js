import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';

import Home from './Home';
import About from './About';
import SongList from './SongList';
import Members from './Members';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                <Header />
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About}/>
                    <Route path="/members" component={Members} />
                    <Route path="/songs" component={SongList} />
                </div>
            </Router>
        );
    }
}

export default App;