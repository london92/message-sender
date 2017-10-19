import { combineReducers } from 'redux';

import MessageSettingsReducer from './MessageSettingsReducer';

export default combineReducers({
    messageSettings: MessageSettingsReducer
})
