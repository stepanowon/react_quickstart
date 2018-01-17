import { Component } from 'react';
import { renderRoutes } from 'react-router-config'
import { routes } from '../routes'

class Main extends Component {
    render() {
        return renderRoutes(routes)
    }
}

export default Main;