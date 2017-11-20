import {connect} from 'react-redux';
import DetailBuku from '../components/DetailBuku';

const mapStateToProps = (state) => {
	return {
		nav: state.nav
	};
};

export default connect(mapStateToProps) (DetailBuku);