import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddContact extends Component {
    constructor(props) {
        super(props);
        this.save = this.save.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    componentDidMount() {
        this.nameInput.focus()    
    }
    
    save() {
        let name = this.nameInput.value;
        let tel = this.telInput.value;
        let address = this.addressInput.value;
        if (name !=="" && tel !=="" && address !== "") {
            this.props.addContact(name, tel, address);
        } else {
            alert("모든 필드를 입력해주세요")
        }
    }

    cancel() {
        this.props.changeShowAddContact(false)
    }

    render() {
        return (
            <div className="modal">
                <div className="form">
                    <h3 className="heading">:: 새 연락처 추가</h3>
                    <div className="form-group">
                        <label>이름</label>
                        <input type="text" name="name" className="long"
                            placeholder="이름을 입력하세요"
                            ref={(name) => { this.nameInput = name; }} />
                    </div>
                    <div className="form-group">
                        <label>전화번호</label>
                        <input type="text" name="tel" className="long" 
                            placeholder="전화번호를 입력하세요"
                            ref={(tel) => { this.telInput = tel; }} />
                    </div>
                    <div className="form-group">
                        <label>주 소</label>
                        <input type="text" name="address" className="long"
                            placeholder="주소를 입력하세요"
                            ref={(address) => { this.addressInput = address; }} />
                    </div>
                    <div className="form-group">
                        <div>&nbsp;</div>
                        <input type="button" className="btn btn-primary" 
                            value="저 장" onClick={this.save} />{' '}
                        <input type="button" className="btn btn-primary" 
                            value="취 소" onClick={this.cancel} />
                    </div>
        
                </div>
            </div>
        );
    }
}

AddContact.propTypes = {
    addContact: PropTypes.func.isRequired,
    changeShowAddContact: PropTypes.func.isRequired
}

export default AddContact;