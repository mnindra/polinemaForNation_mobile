import {NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
import Sidebar from '../components/Sidebar';


const mapDispatchToProps = (dispatch) => {
	return {
		gotoBeranda: () => {
			dispatch(NavigationActions.navigate({
				routeName: 'Beranda'
			}));
		},
		gotoPemesanan: () => {
			dispatch(NavigationActions.navigate({
				routeName: 'Pemesanan'
			}));
		},
		gotoKontak: () => {
			dispatch(NavigationActions.navigate({
				routeName: 'Kontak'
			}));
		}
	};
};

const mapStateToProps = (state) => {
	return {
		nav: state.nav
	};
};

export default connect(mapStateToProps, mapDispatchToProps) (Sidebar);