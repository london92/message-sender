import firebase from 'firebase';

import { FETCH_COUNTRIES_SUCCESS, COUNTRY_CHANGED } from './types';

export const fetchCountries = () => {
    return (dispatch) => {
        firebase.database().ref(`/countries`).on('value', snapshot => {
            dispatch({
                type: FETCH_COUNTRIES_SUCCESS,
                payload: snapshot.val()
            })
        })
    }
};

export const countryChanged = (country) => {
    return{
        type: COUNTRY_CHANGED,
        payload: country
    }
};
