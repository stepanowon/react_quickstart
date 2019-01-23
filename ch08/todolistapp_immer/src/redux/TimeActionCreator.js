import Constant from '../Constant';

const TimeActionCreator= {
  changeTime() {
    return { type:Constant.CHANGE_TIME };
  },
  asyncChangeTime() {
    return (dispatch,getState)=> {
      let { currentTime } = getState;
      dispatch({ type:"changeTime Start!!", 
        payload: { currentTime: currentTime } });
      setTimeout(()=>{
        dispatch(this.changeTime())
      }, 2000);
    }
  }
}

export default TimeActionCreator;