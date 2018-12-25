import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('contactStore')
@observer
class Loading extends Component {
    render() {
        if (this.props.contactStore.isLoading) {
            return (
                <div className="modal">
                    <div className="form loading ">
                        {this.props.children}
                    </div>
                </div>
            );
        } else {
            return '';
        }
    }
}

export default Loading;