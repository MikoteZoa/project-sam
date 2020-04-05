import {combineReducers} from 'redux'; // 리듀서들을 하나로 합쳐서 스토어에 내보내줌
import {TodoReducer} from './modules/TodoReducer';

export default combineReducers({
  TodoReducer,
});