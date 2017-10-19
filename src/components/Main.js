import React, { Component } from 'react';
import { Text, StyleSheet, Picker } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';

import { Card, CardSection, Button } from './common';
import { fetchCountries, countryChanged } from '../actions';

class Main extends Component{

    constructor(){
        super();
        console.ignoredYellowBox = [
            'Setting a timer'
        ];
    }

    componentWillMount(){
        this.props.fetchCountries();
    }

    _onPress(){
        console.log(this.props)
    }

    _renderPicker(){
        return this.props.countries.map((country) => {
            return(
                <Picker.Item label={country.country} value={country.uid} key={country.uid}/>
            )
        })
    }

    _onCountryChanged(countryUID){
        this.props.countryChanged(countryUID)
    }

    _addMessage(){
        Actions.messageGenerate();
    }

    render(){

        const { containerStyle, textStyle, countryPickerStyle } = styles;

        return(
            <Card style={containerStyle}>
                <CardSection>
                    <Text style={textStyle}>Country</Text>
                    <Picker
                        style={countryPickerStyle}
                        selectedValue={this.props.selectedCountryUID}
                        onValueChange={this._onCountryChanged.bind(this)}>
                        {this._renderPicker()}
                    </Picker>
                </CardSection>

                <CardSection>
                    <Text style={textStyle}>Message</Text>
                    <Button onPress={this._addMessage.bind(this)}>Generate</Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this._onPress.bind(this)}>Press Me</Button>
                </CardSection>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
       marginTop: 50,
       flex: 1
    },
    countryPickerStyle: {
        flex: 2
    },
    textStyle: {
        color: '#000',
        alignSelf: 'center',
        flex: 1,
        paddingLeft: 10
    }
});

Main.propTypes = {
    createCountry: PropTypes.func,
    fetchCountries: PropTypes.func,
    selectedCountryUID: PropTypes.string,
    countries: PropTypes.array,
    countryChanged: PropTypes.func
};

const mapStateToProps = state => {
    const countries = _.map(state.messageSettings.countries, (val, uid) => ({
        uid,
        ...val
    }));
    const { selectedCountryUID } = state.messageSettings;
    return { countries, selectedCountryUID }
};

export default connect(mapStateToProps, { fetchCountries, countryChanged })(Main);
