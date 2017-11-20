import {connect} from 'react-redux';
import DetailBuku from '../components/DetailBuku';
import {NavigationActions} from 'react-navigation';

const mapStateToProps = (state) => {
	return {
		nav: state.nav
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		pemesanan: () => {
			dispatch(NavigationActions.navigate({
				routeName: 'Pemesanan'
			}));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps) (DetailBuku);