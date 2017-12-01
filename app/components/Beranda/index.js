import React, {Component} from 'react';
import {
	Container,
	Content,
	Text,
	ListItem,
	List,
	Body,
	Thumbnail,
	Icon,
	Input,
	Drawer,
	Button,
	Header,
	Left,
	Title,
	Picker,
	Form,
	Item
} from 'native-base';
import {host, api} from '../../config/api';
import styles from './styles';
import Sidebar from '../../containers/Sidebar';

const PickerItem = Picker.Item;

export default class Beranda extends Component {

	static navigationOptions = {
		header: null
	};

	constructor(props) {
		super(props);

		this.state = {
			'search': '',
			'id_kategori': 0
		};

		this.getBuku();
		this.getKategori();
		this.getPengaturan();
	}

	getBuku() {
		fetch(api + '/buku')
			.then(response => response.json())
			.then(responseJson => this.props.setBuku(responseJson));
	}

	getKategori() {
		fetch(api + '/kategori')
			.then(response => response.json())
			.then(responseJson => this.props.setKategori(responseJson));
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

		let filteredBuku = this.state.id_kategori != 0 ? this.props.buku.filter(data => {
			return data.id_kategori === this.state.id_kategori;
		}) : this.props.buku;

		filteredBuku = this.state.search ? filteredBuku.filter(data => {
			return data.judul.indexOf(this.state.search) > -1;
		}) : filteredBuku;

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
					<Form>
							<Item>
								<Input
									placeholder='Cari Buku'
									value={this.state.search}
									onChangeText={(search) => this.setState({search})}/>
								<Icon active name='search' />
							</Item>

							<Picker
								mode="dropdown"
								selectedValue={this.state.id_kategori}
								style={styles.picker}
								onValueChange={(id_kategori) => this.setState({id_kategori})}>
								<PickerItem label="Semua Kategori" value="0" />
								{ this.props.kategori.map(item => {
									return (
										<PickerItem key={item.id_kategori} label={item.nama} value={item.id_kategori} />
									)
								})}
							</Picker>

					</Form>
					<Content>
						<List dataArray={filteredBuku} renderRow={(rowData) => this.renderRow(rowData)} />
					</Content>
				</Container>
			</Drawer>
		);
	}
}