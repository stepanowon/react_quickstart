import Constant from '../Constant';

const TimeActionCreator = {
    changeTime() {
        return { type : Constant.CHANGE_TIME };
    }
}

export default TimeActionCreator;