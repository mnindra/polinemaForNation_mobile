import {StackNavigator} from 'react-navigation';
import Beranda from '../containers/Beranda';
import DetailBuku from '../containers/DetailBuku';
import Pemesanan from '../containers/Pemesanan';

const Navigator = StackNavigator({
	Beranda: {screen: Beranda},
	DetailBuku: {screen: DetailBuku},
	Pemesanan: {screen: Pemesanan}
});

export default Navigator;