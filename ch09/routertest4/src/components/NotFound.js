import React, { Component } from 'react';

class NotFound extends Component {
    render() {
        return (
            <div>
                <h3>요청 하신 경로는 존재하지 않습니다.</h3>
                <p>
                    요청 경로 : {this.props.location.pathname}
                </p>
            </div>
        );
    }
}

export default NotFound;