import { combineReducers } from 'redux';
import { authReducer } from './auth.reducer';
import { changeStateReducer } from './changeState.reducer';
import { changeViewReducer } from './changeView.reducer';
import { channelReducer } from './channel.reducer';
import { userReducer } from './user.reducer';
import { socketReducer } from './socket.reducer';
import { updateImageReducer } from './updateImage.reducer';

export default combineReducers({
  changeViewReducer,
  changeStateReducer,
  authReducer,
  channelReducer,
  userReducer,
  socketReducer,
  updateImageReducer,
});
