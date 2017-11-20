import React, {Component} from 'react';
import {Container, Content, Form, Item, Label, Input, Button, Text} from 'native-base';
import {api} from '../../config/api';
import styles from './styles';

export default class Pemesanan extends Component {

	static navigationOptions = {
		title: "Pemesanan"
	};

	constructor(props) {
		super(props);
		this.state = {
			nama: '',
			email: '',
			telp: '',
			isi: ''
		};
	}

	bersihkanInputan() {
		this.setState({
			nama: '',
			email: '',
			telp: '',
			isi: ''
		});
	}

	kirim() {
		fetch(api + '/pemesanan', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				nama: this.state.nama,
				email: this.state.email,
				telp: this.state.telp,
				isi: this.state.isi
			})
		}).then(response => {
			console.log(response);
			this.bersihkanInputan();
		});
	}

	render() {
		return(
			<Container style={styles.container}>
				<Content>
					<Form>
						<Item floatingLabel>
							<Label>Nama</Label>
							<Input
								value={this.state.nama}
								onChangeText={(nama) => this.setState({nama})}/>
						</Item>
						<Item floatingLabel>
							<Label>Email</Label>
							<Input
								value={this.state.email}
								onChangeText={(email) => this.setState({email})}/>
						</Item>
						<Item floatingLabel>
							<Label>Nomor Telepon</Label>
							<Input
								value={this.state.telp}
								onChangeText={(telp) => this.setState({telp})}/>
						</Item>
						<Item floatingLabel last>
							<Label>Pesan</Label>
							<Input
								value={this.state.isi}
								multiline={true}
								onChangeText={(isi) => this.setState({isi})}/>
						</Item>
					</Form>
				</Content>
				<Button
					success
					block
					onPress={() => this.kirim()}>
					<Text>Kirim</Text>
				</Button>
			</Container>
		);
	}
}