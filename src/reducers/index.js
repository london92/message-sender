import { combineReducers } from 'redux';

import MessageSettingsReducer from './MessageSettingsReducer';
import NewMessageReducer from './NewMessageReducer';

export default combineReducers({
    messageSettings: MessageSettingsReducer,
    newMessage: NewMessageReducer
})
