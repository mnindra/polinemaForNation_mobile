import {combineReducers} from 'redux';
import NavigationReducer from './NavigationReducer';
import BukuReducer from './BukuReducer';
import PengaturanReducer from './PengaturanReducer';

export default combineReducers({
	nav: NavigationReducer,
	buku: BukuReducer,
	pengaturan: PengaturanReducer
});