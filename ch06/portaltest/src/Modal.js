import React, { Component } from 'react'
import './Modal.css'

class Modal extends Component {
    constructor(props) {
        super(props)
        this.closeSelf = this.closeSelf.bind(this);
    }

    closeSelf() {
        this.props.toggleModalBox();
    }

    render() {
        const { showModal} = this.props;
        let modalBox = null;
        if (showModal) {
            modalBox = (
                <div className="modal">
                <div className="form">
                    <h3 className="heading">:: {this.props.header}</h3>
                    <div className="form-group">
                        {this.props.children}
                    </div>
                    <div>
                        <button className="button">닫기</button>
                    </div>
                </div>
                </div>
            )
        }
        return modalBox;
    }
}

export default Modal