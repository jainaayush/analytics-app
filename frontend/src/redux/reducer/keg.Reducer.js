import { GETDATA } from '../types';


    const INITIAL_STATE = {

        kegId: "",
    };

    const reducer = (state = INITIAL_STATE, action) => {
        
        const { type, payload } = action;
        console.log("action", action, "payload", payload);

        switch (type) {

            case GETDATA:

               return {

                 ...state, kegId: payload,

               };


             default: return {...state};

        }

    };

    export default reducer;