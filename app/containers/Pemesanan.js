import {connect} from 'react-redux';
import Pemesanan from '../components/Pemesanan';

const mapStateToProps = (state) => {
	return {
		nav: state.nav,
		pengaturan: state.pengaturan
	};
};

export default connect(mapStateToProps) (Pemesanan);