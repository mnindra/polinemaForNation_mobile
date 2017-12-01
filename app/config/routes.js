import {StackNavigator} from 'react-navigation';
import Beranda from '../containers/Beranda';
import DetailBuku from '../containers/DetailBuku';
import LihatBuku from '../containers/LihatBuku';
import Pemesanan from '../containers/Pemesanan';
import Kontak from '../containers/Kontak';
import styles from '../styles';

const Navigator = StackNavigator({
	Beranda: {screen: Beranda},
	DetailBuku: {screen: DetailBuku},
	LihatBuku: {screen: LihatBuku},
	Pemesanan: {screen: Pemesanan},
	Kontak: {screen: Kontak}
}, {
	navigationOptions: {
		headerStyle: styles.header,
		headerTitleStyle: styles.headerTitle,
		headerBackTitleStyle: styles.headerBackTitle,
		headerTintColor: '#fff'
	}
});

export default Navigator;