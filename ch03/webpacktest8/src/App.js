import React, { Component } from 'react';
import data from './data.json';
import style from './style.css';
import style2 from './style2.css';

console.log(style)

class App extends Component {
    render() {
        var emplist = data.employees.map((item, index) => {
            return (
                <tr key={item.no}>
                    <td>{item.no}</td>
                    <td>{item.name}</td>
                    <td>{item.mobile}</td>
                    <td>{item.email}</td>
                </tr>
            )
        })

        
        return (
            <div>
                <div className={style.title}>
                   <div>&#9742;</div>&nbsp;<div>{data.title}</div>
                </div>
                <table className={style.list}>
                    <thead>
                        <tr>
                            <th>번호</th><th>이름</th><th>모바일</th><th>이메일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {emplist}
                    </tbody>
                </table>
                <div className={style2.mystyle}>contact : 010-222-3331</div>
            </div>
        );
    }
}

export default App;
