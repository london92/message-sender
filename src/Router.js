import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';

import Main from './components/Main';

const RouterComponent = () => {

    const { headerStyle, titleStyle } = styles;

    return(
        <Router
            navigationBarStyle={headerStyle}
            sceneStyle={{paddingTop: 75}}
            titleStyle={titleStyle}>
            <Scene key="main" component={Main} title="Message Sender"/>
        </Router>
    )
};

const styles = StyleSheet.create({
    headerStyle: {
        marginTop: 25,
        backgroundColor: '#0ee000'
    },
    titleStyle: {
        color: '#fff'
    }
});

export default RouterComponent;
