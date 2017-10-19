import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';

import Main from './components/Main';
import MessageGenerator from './components/MessageGenerator';
import MessageCreate from './components/MessageCreate';

const RouterComponent = () => {

    const { headerStyle, titleStyle, rightButtonStyle } = styles;

    return(
        <Router
            navigationBarStyle={headerStyle}
            sceneStyle={{paddingTop: 75}}
            titleStyle={titleStyle}>
            <Scene key="main">
                <Scene key="messageSettings"
                       component={Main}
                       title="Message Sender"/>
                <Scene key="messageGenerate"
                       component={MessageGenerator}
                       title="Message Generator"
                       rightButtonTextStyle={rightButtonStyle}
                       rightTitle="Add"
                       onRight={() => Actions.messageCreate()}/>
                <Scene key="messageCreate"
                       component={MessageCreate}
                       title="Create Message"/>
            </Scene>
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
    },
    rightButtonStyle: {
        color: '#fff',
        marginRight: 15,
        paddingLeft: 15,
        alignItems:'center',
        borderLeftWidth: 1,
        borderLeftColor: '#e8e5cc',
        height: 26
    }
});

export default RouterComponent;
