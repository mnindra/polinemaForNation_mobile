import {StackNavigator} from 'react-navigation';
import Beranda from '../containers/Beranda';
import DetailBuku from '../containers/DetailBuku';
import Pemesanan from '../containers/Pemesanan';
import styles from '../styles';

const Navigator = StackNavigator({
	Beranda: {screen: Beranda},
	DetailBuku: {screen: DetailBuku},
	Pemesanan: {screen: Pemesanan}
}, {
	navigationOptions: {
		headerStyle: styles.header,
		headerTitleStyle: styles.headerTitle,
		headerBackTitleStyle: styles.headerBackTitle,
		headerTintColor: '#fff'
	}
});

export default Navigator;