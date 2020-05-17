import {combineReducers} from 'redux';
import NetflixOriginalsReducer from './reducerNetflixOriginals';
import TopRatedReducer from './reducerTopRated';

const rootReducer = combineReducers({
  netflixOriginals: NetflixOriginalsReducer,
  topRated: TopRatedReducer,
});

export default rootReducer;