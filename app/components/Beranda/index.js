import React, {Component} from 'react';
import {Container, Content, Text, ListItem, List, Body, Thumbnail, Item, Icon, Input} from 'native-base';
import {host, api} from '../../config/api';
import styles from './styles';

export default class Beranda extends Component {

	static navigationOptions = {
		title: "Daftar Buku"
	};

	constructor(props) {
		super(props);
		this.state = {
			'search': ''
		};
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

		const filteredBuku = this.state.search ? this.props.buku.filter(data => {
			return data.judul.indexOf(this.state.search) > -1;
		}) : this.props.buku;

		return(
			<Container style={styles.container}>
				<Item>
					<Input
						placeholder='Cari Buku'
						value={this.state.search}
						onChangeText={(search) => this.setState({search})}/>
					<Icon active name='search' />
				</Item>
				<Content>
					<List dataArray={filteredBuku} renderRow={(rowData) => this.renderRow(rowData)} />
				</Content>
			</Container>
		);
	}
}