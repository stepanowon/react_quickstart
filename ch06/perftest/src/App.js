import React, { Component } from 'react';
import List from './List';
import update from 'immutability-helper';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            items : [ ] 
        };
        this.no = 0;
    }

    componentDidMount() {
        this.handleId = setInterval(()=> {
            this.addItem()
        }, 50)
    }
    
    componentWillUnmount() {
        clearInterval(this.handleId);
    }

    addItem() {
        this.no++;
        let newItems = update(this.state.items, {
            $push : [ { no:this.no, name:'아이템 '+this.no } ]
        })
        this.setState({ items : newItems })
        if (this.no % 200 === 0) {
            this.setState({ items : [] })
        }
    }

    render() {
        let styles = { border:"solid 1px gray", float:"left", width:"33%" };
        return (
            <div>
                <div style={styles}>
                    <h2>#1</h2>
                    <List items={this.state.items} />
                </div>
                <div style={styles}>
                    <h2>#2</h2>
                    <List items={this.state.items} />
                </div>
                <div style={styles}>
                    <h2>#3</h2>
                    <List items={this.state.items} />
                </div>
            </div>
        );
    }
}

export default App;