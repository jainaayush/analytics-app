import { combineReducers } from 'redux';


    import kegReducer from './reducer/keg.Reducer';


    const rootReducer = combineReducers({

        data: kegReducer,

    });

    export default rootReducer;