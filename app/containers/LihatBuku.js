import {connect} from 'react-redux';
import LihatBuku from '../components/LihatBuku';

const mapStateToProps = (state) => {
	return {
		'nav': state.nav
	};
};

export default connect(mapStateToProps) (LihatBuku);
