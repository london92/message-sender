import firebase from 'firebase';

import { FETCH_COUNTRIES_SUCCESS, COUNTRY_CHANGED, FETCH_MESSAGE_LIST_SUCCESS } from './types';

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

export const fetchMessageList = (selectedCountryUID) => {
  return dispatch => {
      firebase.database().ref(`/countries/${selectedCountryUID}/messages`).on('value', snapshot => {
          dispatch({
              type: FETCH_MESSAGE_LIST_SUCCESS,
              payload: snapshot.val()
          })
      })
  }
};
