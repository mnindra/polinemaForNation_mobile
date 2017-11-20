import {StackNavigator} from 'react-navigation';
import Beranda from '../containers/Beranda';
import DetailBuku from '../containers/DetailBuku';

const Navigator = StackNavigator({
	Beranda: {screen: Beranda},
	DetailBuku: {screen: DetailBuku}
});

export default Navigator;