import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import Main from './components/Main';

const RouterComponent = () => {
    return(
        <Router>
            <Scene key="main" component={Main} title="Message sender"/>
        </Router>
    )
};

export default RouterComponent;
