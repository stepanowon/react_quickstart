import React from 'react'
import ReactDOM from 'react-dom'

class Portal extends React.Component {
  constructor(props) {
    super(props)

    this.modalArea = document.getElementById('modal-area')
    this.container = document.createElement('div')
  }

  componentDidMount() {
    this.modalArea.appendChild(this.container)
  }

  componentWillUnmount() {
    this.modalArea.removeChild(this.container)
  }

  render() {
    return ReactDOM.createPortal(
        this.props.children, 
        this.container
    )
  }
}

export default Portal