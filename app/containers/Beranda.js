import {setBuku, setPengaturan, setKategori} from '../actions';
import {NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
import Beranda from '../components/Beranda';

const mapDispatchToProps = (dispatch) => {
	return {
		setBuku: (buku) => {
			dispatch(setBuku(buku));
		},
		setKategori: (kategori) => {
			dispatch(setKategori(kategori));
		},
		setPengaturan: (pengaturan) => {
			dispatch(setPengaturan(pengaturan));
		},
		detailBuku: (buku) => {
			dispatch(NavigationActions.navigate({
				routeName: 'DetailBuku',
				params: buku
			}));
		}
	};
};

const mapStateToProps = (state) => {
	return {
		nav: state.nav,
		buku: state.buku,
		kategori: state.kategori
	};
};

export default connect(mapStateToProps, mapDispatchToProps) (Beranda);