import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            members: [
                { id:1, name:"홍길동" },
                { id:2, name:"이몽룡" },
                { id:3, name:"성춘향" },
                { id:4, name:"박문수" }
            ]
        }
    }

    render() {
        let list = this.state.members.map((member)=>{
            return <li key={member.id}>{member.name}</li>
        })

        return (
            <div>
                <h2>{this.props.title}</h2>
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}

export default App;     