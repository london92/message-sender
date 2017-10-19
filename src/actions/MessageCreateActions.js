import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { NEW_MESSAGE_CHANGED, MESSAGE_CREATED } from './types';

export const newMessageChanged = message => {
    return {
        type: NEW_MESSAGE_CHANGED,
        payload: message
    }
};

export const saveNewMessage = ({ message, selectedCountryUID }) => {
    return (dispatch) => {
        firebase.database().ref(`/countries/${selectedCountryUID}/messages`).push({message})
            .then(() => {
            dispatch({ type: MESSAGE_CREATED });
            Actions.messageGenerate();
            })
    }

};
