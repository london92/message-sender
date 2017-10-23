import { FETCH_COUNTRIES_SUCCESS, COUNTRY_CHANGED, FETCH_MESSAGE_LIST_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
    countries: [],
    selectedCountryUID: "",
    messageList: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case FETCH_COUNTRIES_SUCCESS:
            return { ...state, countries: action.payload };
        case COUNTRY_CHANGED:
            return { ...state, selectedCountryUID: action.payload};
        case FETCH_MESSAGE_LIST_SUCCESS:
            return { ...state, messageList: action.payload};
        default:
            return state;
    }
}
