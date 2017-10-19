import { NEW_MESSAGE_CHANGED, MESSAGE_CREATED } from '../actions/types';

const INITIAL_STATE = { newMessage: '' };

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case NEW_MESSAGE_CHANGED:
            return { ...state, newMessage: action.payload };
        case MESSAGE_CREATED:
            return INITIAL_STATE;
        default:
            return state;
    }
}
