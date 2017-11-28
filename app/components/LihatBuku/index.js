import React, {Component} from 'react';
import {View} from 'react-native';
import Pdf from 'react-native-pdf';
import {host} from '../../config/api';
import styles from './styles';

export default class LihatBuku extends Component {

	static navigationOptions = {
		title: "Pratinjau Isi Buku"
	};

	render() {
		const ebook = this.props.navigation.state.params;
		const source = {uri: host + '/ebook/' + ebook, cache: true};
		return (
			<View style={styles.container}>
				<Pdf source={source} style={styles.pdf} />
			</View>
		);
	}

}