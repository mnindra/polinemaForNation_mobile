import React, {Component} from 'react';
import {Container, Content, Text, ListItem, List, Body, Thumbnail} from 'native-base';
import {host, api} from '../../config/api';
import styles from './styles';

export default class Beranda extends Component {

	static navigationOptions = {
		title: "Daftar Buku"
	};

	constructor(props) {
		super(props);
		this.getBuku();
	}

	getBuku() {
		fetch(api + '/buku')
			.then(response => response.json())
			.then(responseJson => this.props.setBuku(responseJson));
	}

	renderRow(rowData) {
		return(
			<ListItem button onPress={() => this.props.detailBuku(rowData)}>
				<Thumbnail square size={80} source={{ uri: host + '/img/sampul/' + rowData.sampul }} />
				<Body>
				<Text>{rowData.judul}</Text>
				<Text note>{rowData.kategori.nama}</Text>
				</Body>
			</ListItem>
		);
	}

	render() {
		return(
			<Container style={styles.container}>
				<Content>
					<List dataArray={this.props.buku} renderRow={(rowData) => this.renderRow(rowData)} />
				</Content>
			</Container>
		);
	}
}