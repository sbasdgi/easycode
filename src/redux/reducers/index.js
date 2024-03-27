import { combineReducers } from 'redux';
import language from './language';
import user from './user';
import settings from './settings';
import app from './app';

export default combineReducers({
  app,
  language,
  user,
  settings
});
