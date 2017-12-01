import {connect} from 'react-redux';
import Kontak from '../components/Kontak';

const mapStateToProps = (state) => {
	return {
		pengaturan: state.pengaturan
	};
};

export default connect(mapStateToProps) (Kontak);