import { combineReducers } from 'redux';
import authReducer from './authReducer';
import favoriteReducer from './favoriteReducer';

export default combineReducers({
	auth: authReducer,
	favorites: favoriteReducer
});
