import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';
import styles from './styles';

export default class Kontak extends Component {

	static navigationOptions = {
		title: "Kontak"
	};

	render() {
		return (
			<Container style={styles.container}>
				<Content padder>

					<Text style={styles.text}>Silahkan hubungi kontak dibawah ini apabila ada pertanyaan</Text>

					<List>
						<ListItem icon>
							<Left>
								<Icon name="email" />
							</Left>
							<Body>
							<Text>{ this.props.pengaturan.email }</Text>
							</Body>
						</ListItem>
						<ListItem icon>
							<Left>
								<Icon name="phone-iphone" />
							</Left>
							<Body>
							<Text>{ this.props.pengaturan.telp }</Text>
							</Body>
						</ListItem>
					</List>
				</Content>
			</Container>
		);
	}
}