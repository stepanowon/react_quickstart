import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactItem extends Component {
    constructor(props) {
        super(props);
        this.deleteContactItem = this.deleteContactItem.bind(this);    
    }

    deleteContactItem() {
        this.props.deleteContact(this.props.no);
    } 

    render() {
        return (
            <li className="list-group-item">
                <div className="col-xs-3">
                    <img src={this.props.photo} alt={this.props.name} 
                        className="img-responsive img-thumbnail photoWidth" />
                </div>
                <div className="col-xs-8">
                    <span className="name">{this.props.name}</span><br/>
                    <span className="glyphicon glyphicon-hand-right"></span>{' '}
                    <span >Id : {this.props.no}</span><br />
                    <span className="glyphicon glyphicon-earphone"></span>{' '}
                    <span >{this.props.tel}</span><br />
                    <span className="glyphicon glyphicon-map-marker"></span>{' '}
                    <span >{this.props.address}</span><br />
                </div>
                <div className="col-xs-1">
                    <div>
                        <button className="btn btn-primary"
                            onClick={this.deleteContactItem}>X</button>
                    </div>
                </div>
                <div className="clearfix"></div>
            </li>
        );
    }
}

ContactItem.propTypes = {
    no: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    tel: PropTypes.string.isRequired,
    address : PropTypes.string.isRequired,
    photo : PropTypes.string.isRequired,
    deleteContact : PropTypes.func.isRequired
};

export default ContactItem;