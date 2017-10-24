import React, { Component } from 'react';
import * as firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import reducers from './src/reducers';
import Router from './src/Router';
import registerForPushNotificationsAsync from './src/services/push_notifications';

export default class App extends Component {

  componentWillMount() {
      const config = {
          apiKey: "AIzaSyCTliMaCPYUDWRTmIwgySdVvKWrE_HAqfg",
          authDomain: "sms-sender-46ec0.firebaseapp.com",
          databaseURL: "https://sms-sender-46ec0.firebaseio.com",
          projectId: "sms-sender-46ec0",
          storageBucket: "sms-sender-46ec0.appspot.com",
          messagingSenderId: "855124879888"
      };
      firebase.initializeApp(config);
      registerForPushNotificationsAsync();
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
