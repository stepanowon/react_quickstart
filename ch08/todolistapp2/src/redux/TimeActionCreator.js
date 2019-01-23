import Constant from '../Constant';

const TimeActionCreator = {
    changeTime(no) {
        return {
            type: Constant.CHANGE_TIME
        }
    }
}

export default TimeActionCreator;