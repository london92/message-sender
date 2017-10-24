import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Switch } from 'react-native';
import PropTypes from 'prop-types';

import { CardSection } from './common';

class ListItem extends Component {

    constructor(props){
         super(props);
         this._onPress = this._onPress.bind(this)
    }

    _onPress(){
        console.log('it works');
    }
    render(){
        const { message, type } = this.props.message;
        const { containerStyle } = styles;
        return(
            <TouchableHighlight onPress={this._onPress}>
                <View>
                    <CardSection>
                        <Text>{message}</Text>
                        <Switch/>
                    </CardSection>
                </View>
            </TouchableHighlight>
        )
    }
}

ListItem.propTypes = {
    message: PropTypes.object
};

const styles = StyleSheet.create({
   containerStyle : {
       flexDirection: 'row'
   }
});

export default ListItem;
