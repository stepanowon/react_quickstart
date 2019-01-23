import React, { Component } from 'react'
import axios from 'axios';

const BASEURL = "/api";

class App extends Component {
    componentDidMount() {
        //연락처를 추가
        axios.post(BASEURL + '/contacts', 
            { name:"홍길동", tel:"010-2222-1212", address:"경기도" })
        .then((response) => {
            if (response.data.status !== "success") {
                throw new Error("데이터 추가 실패!!");
            }
            return axios.get(BASEURL + '/contacts/'+ response.data.no);
        })
        .then((response)=>{
            console.log("## 새로운 연락처 추가 후 조회")
            console.log(response.data)
        })
        .catch((error) => {
            console.log("## 오류 발생 : ", error)
        })
    }
    render() {
        return (
            <div>
                <h2>Console을 확인합니다</h2>
            </div>
        )
    }
}

export default App;