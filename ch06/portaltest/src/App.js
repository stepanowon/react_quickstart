import React, { Component } from 'react'
//import Portal from './Portal'
import {Portal} from 'react-portal'
import Modal from './Modal'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = { showModal: false }
        this.toggleModalBox = this.toggleModalBox.bind(this);
    }

    toggleModalBox() {
        this.setState({ showModal: !this.state.showModal })
    }

    render() {
        const { showModal } = this.state

        return (
            <div className="Container">
                <div className="well" onClick={this.toggleModalBox}>
                    <button onClick={this.toggleModalBox}>모달 박스 보여주기</button>
                    <Portal node={document && document.getElementById('modal-area')}>
                        <Modal showModal={showModal} header="모달 타이틀!!">
                            <p>모달 컨텐츠에 들어가는 내용!!</p>
                        </Modal>    
                    </Portal>
                </div>
            </div>
        )
    }
}

export default App