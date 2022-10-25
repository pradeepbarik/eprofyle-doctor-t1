import {INITIALIZE_STORE} from '../action-types';
const initialState={
    data_fetched:false,
    doctor_name:"Dr Jayashree mohanty"
}
const appData=(state=initialState,action)=>{
    switch(action.type){
        case INITIALIZE_STORE:
            state={...state,...action.payload};
            break;
        default:
            state={...state};
    }
    return state
}
export default appData;