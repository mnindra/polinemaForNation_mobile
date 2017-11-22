import React, {Component} from 'react';
import {Container, Content, Form, Item, Label, Input, Button, Text, Icon} from 'native-base';
import {View} from 'react-native';
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
			isi: '',
			errors: {}
		};
	}

	bersihkanInputan() {
		this.setState({
			nama: '',
			email: '',
			telp: '',
			isi: '',
			errors: {}
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
			if(response.status === 422) {
				response.json().then(responseJson => {
					console.log(responseJson);
					this.setState({
						errors: responseJson.errors
					});
					console.log(this.state);
				});
			} else {
				this.bersihkanInputan();
			}
		});
	}

	render() {
		return(
			<Container style={styles.container}>
				<Content>
					<Form>
						<Item floatingLabel error={this.state.errors.hasOwnProperty('nama')}>
							<Label>Nama</Label>
							<Input
								value={this.state.nama}
								onChangeText={(nama) => this.setState({nama})}/>
						</Item>
						<View style={styles.error}>
							<Text style={styles.errorText}>{this.state.errors.hasOwnProperty('nama') ? this.state.errors.nama[0] : ''}</Text>
						</View>

						<Item floatingLabel error={this.state.errors.hasOwnProperty('email')}>
							<Label>Email</Label>
							<Input
								keyboardType={'email-address'}
								value={this.state.email}
								onChangeText={(email) => this.setState({email})}/>
						</Item>
						<View style={styles.error}>
							<Text style={styles.errorText}>{this.state.errors.hasOwnProperty('email') ? this.state.errors.email[0] : ''}</Text>
						</View>

						<Item floatingLabel error={this.state.errors.hasOwnProperty('telp')}>
							<Label>Nomor Telepon</Label>
							<Input
								keyboardType={'numeric'}
								value={this.state.telp}
								onChangeText={(telp) => this.setState({telp})}/>
						</Item>
						<View style={styles.error}>
							<Text style={styles.errorText}>{this.state.errors.hasOwnProperty('telp') ? this.state.errors.telp[0] : ''}</Text>
						</View>

						<Item floatingLabel error={this.state.errors.hasOwnProperty('isi')} last>
							<Label>Pesan</Label>
							<Input
								value={this.state.isi}
								multiline={true}
								onChangeText={(isi) => this.setState({isi})}/>
						</Item>
						<View style={styles.error}>
							<Text style={styles.errorText}>{this.state.errors.hasOwnProperty('isi') ? this.state.errors.isi[0] : ''}</Text>
						</View>
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