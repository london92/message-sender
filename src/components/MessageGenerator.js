import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { fetchMessageList } from '../actions';
import ListItem from './ListItem';

class MessageGenerator extends Component{

    constructor(props){
        super(props);
        this._createDataSource = this._createDataSource.bind(this);
    }

    componentWillMount(){
        this.props.fetchMessageList(this.props.selectedCountryUID);
        this._createDataSource(this.props);

    }

    componentWillReceiveProps(nextProps){
        this._createDataSource(nextProps);
    }


    _createDataSource({ messageList }){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(messageList)
    }

    _renderRow(message){
        return <ListItem message={message}/>
    }

    render(){
        return(
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this._renderRow}/>
        )
    }
}

MessageGenerator.propTypes = {
    fetchMessageList: PropTypes.func,
    selectedCountryUID: PropTypes.string,
    messageList: PropTypes.array
};

const mapStateToProps = state => {
    const { selectedCountryUID, messageList } = state.messageSettings;
    const list = _.map(messageList, (val, uid) => {
        return { ...val, uid };
    });
  return { selectedCountryUID, messageList: list }
};

export default connect(mapStateToProps, { fetchMessageList })(MessageGenerator);
