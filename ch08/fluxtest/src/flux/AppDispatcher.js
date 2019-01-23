import { Dispatcher } from 'flux';
import Constant from './Constant';

//export default new Dispatcher();

class AppDispatcher extends Dispatcher {
    dispatch(action) {
        super.dispatch(action);
        if (action.type !== Constant.CHANGE_NAME) {
            console.log(`## dispatch : ${action.type}, ${JSON.stringify(action.payload)}`)
        }
    }
}
export default new AppDispatcher();