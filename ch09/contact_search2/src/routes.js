import SearchContainer from './components/SearchContainer';
import AddContactContainer from './components/AddContactContainer';

const routes = [
    { 
        path : "/",
        component : SearchContainer,
        routes : [
            { path:"/add", component: AddContactContainer }
        ]
    }
]

export default routes;
