import React, { Component } from 'react';

class Hello extends Component {
    render() {
        console.log("## Render Hello Component")
        return (
            <div>
                <div>Hello!!</div>
                <a href="/">Home으로</a>
            </div>
        );
    }
}

export default Hello;