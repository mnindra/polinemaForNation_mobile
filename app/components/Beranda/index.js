import React, {Component} from 'react';
import {
	Container,
	Content,
	Text,
	ListItem,
	List,
	Body,
	Thumbnail,
	Item,
	Icon,
	Input,
	Drawer,
	Button,
	Header,
	Left,
	Right,
	Title
} from 'native-base';
import {host, api} from '../../config/api';
import styles from './styles';
import Sidebar from '../../containers/Sidebar';

export default class Beranda extends Component {

	static navigationOptions = {
		header: null
	};

	constructor(props) {
		super(props);
		this.state = {
			'search': ''
		};
		this.getBuku();
		this.getPengaturan();
	}

	getBuku() {
		fetch(api + '/buku')
			.then(response => response.json())
			.then(responseJson => this.props.setBuku(responseJson));
	}

	getPengaturan() {
		fetch(api + '/pengaturan')
			.then(response => response.json())
			.then(responseJson => this.props.setPengaturan(responseJson));
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

	closeDrawer() {
		this.drawer._root.close();
	};

	openDrawer() {
		this.drawer._root.open();
	}

	render() {

		const filteredBuku = this.state.search ? this.props.buku.filter(data => {
			return data.judul.indexOf(this.state.search) > -1;
		}) : this.props.buku;

		return(
			<Drawer
				ref={(ref) => { this.drawer = ref }}
				content={<Sidebar />}
				onClose={() => this.closeDrawer()}>

				<Header>
					<Left>
						<Button
							transparent
							onPress={() => this.openDrawer()}>
							<Icon name='menu' />
						</Button>
					</Left>
					<Body>
					<Title>Daftar Buku</Title>
					</Body>
				</Header>

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
			</Drawer>
		);
	}
}