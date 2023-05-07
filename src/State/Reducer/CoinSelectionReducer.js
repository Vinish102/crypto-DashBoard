import { COIN_SELECTION } from "../Action/actionTypes";

const INIT_STATE = 'bitcoin'

export const coinSelectionReducer = (state = INIT_STATE, action)=>{
    switch(action.type){
        case COIN_SELECTION:
            return action.payload;

        default:
            return state;
    }
}