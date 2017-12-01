import {combineReducers} from 'redux';
import NavigationReducer from './NavigationReducer';
import BukuReducer from './BukuReducer';
import KategoriReducer from './KategoriReducer';
import PengaturanReducer from './PengaturanReducer';

export default combineReducers({
	nav: NavigationReducer,
	buku: BukuReducer,
	kategori: KategoriReducer,
	pengaturan: PengaturanReducer
});