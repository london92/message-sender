import { FETCH_COUNTRIES_SUCCESS, COUNTRY_CHANGED } from '../actions/types';

const INITIAL_STATE = {
    countries: [],
    selectedCountryUID: ""
};

export default (state= INITIAL_STATE, action) => {
    switch (action.type){
        case FETCH_COUNTRIES_SUCCESS:
            return { ...state, countries: action.payload };
        case COUNTRY_CHANGED:
            return { ...state, selectedCountryUID: action.payload}
        default:
            return state;
    }
}
