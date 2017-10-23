import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Card, CardSection, Button } from './common';
import { newMessageChanged, saveNewMessage } from '../actions';


class MessageCreate extends Component{

    _messageChange(message){
        this.props.newMessageChanged(message);
    }

    _onPress(){
        this.props.saveNewMessage({
            message: this.props.newMessage,
            selectedCountryUID: this.props.selectedCountryUID
        });
    }

    render(){

        const { inputStyle } = styles;

        return(
            <Card>
                <CardSection>
                    <TextInput placeholder="Enter your message here..."
                               numberOfLines={4}
                               multiline={true}
                               onChangeText={this._messageChange.bind(this)}
                               value={this.props.newMessage}
                               style={inputStyle}/>
                </CardSection>
                <CardSection>
                    <Button onPress={this._onPress.bind(this)}>Save</Button>
                </CardSection>
            </Card>
        )
    }
}

MessageCreate.propTypes = {
    selectedCountryUID: PropTypes.string,
    newMessage: PropTypes.string,
    newMessageChanged: PropTypes.func,
    saveNewMessage: PropTypes.func
};

//TODO Add some styling!
const styles = StyleSheet.create({
   inputStyle: {
       flex: 1,
       paddingRight: 5,
       paddingLeft: 5,
       fontSize: 15,
       lineHeight: 23,
   }
});

const mapStateToProps = state => {
    const { selectedCountryUID } = state.messageSettings;
    const { newMessage } = state.newMessage;
    return { selectedCountryUID, newMessage }
};

export default connect(mapStateToProps, { newMessageChanged, saveNewMessage })(MessageCreate);
