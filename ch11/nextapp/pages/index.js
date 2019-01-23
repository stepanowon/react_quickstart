import React, { Component } from 'react';

class Index extends Component {
    render() {
        console.log("## Render Index Component")
        var dt = new Date();
        return (
            <div>
                <a href="/hello">hello 페이지로</a>
                <h1>Index 페이지 : { dt.getTime() }</h1>
            </div>
        )
    }
}

export default Index;
