import SearchContainer from './components/Search';
import AddContactContainer from './components/AddContact';

const routes = [
    { 
        path:'/', 
        component: SearchContainer,
        routes: [
			{
				path: '/add',
				component: AddContactContainer
			}
        ]
    }
]

export default routes;