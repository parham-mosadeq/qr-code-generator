import settingsReducer from './userSettings/reducerSettings';
import colorReducer from './colorPicker/reducerColor';
import { combineReducers } from 'redux';

const root = combineReducers({
  settingsReducer: settingsReducer,
  colorReducer: colorReducer,
});

export default root;
