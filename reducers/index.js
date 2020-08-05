import {combineReducers} from 'redux';

import BlogReducer from './BlogReducers';
import LoadingReducer from './LoadingReducer';

const rootReducer = combineReducers({
    blogsList: BlogReducer,
    loadingReducer:LoadingReducer
})

export default rootReducer;