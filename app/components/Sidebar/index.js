import React, {Component} from 'react';
import {
	Content,
	Text,
	ListItem,
	List,
	Body,
	Icon,
	Left
} from 'native-base';
import {Image} from 'react-native';
import styles from './styles';

export default class Sidebar extends Component {

	render() {

		return(
			<Content style={styles.content}>

				<Content contentContainerStyle={{alignItems: 'center'}}>
					<Image style={styles.image} source={require('../../resources/images/logo.png')} />
				</Content>

				<List>
					<ListItem
						icon
						button
						onPress={() => this.props.gotoBeranda()}>
						<Left>
							<Icon name="book" />
						</Left>
						<Body>
						<Text>Daftar Buku</Text>
						</Body>
					</ListItem>
					<ListItem
						icon
						button
						onPress={() => this.props.gotoPemesanan()}>
						<Left>
							<Icon name="attach-money" />
						</Left>
						<Body>
						<Text>Pemesanan</Text>
						</Body>
					</ListItem>
					<ListItem
						icon
						button
						onPress={() => this.props.gotoKontak()}>
					<Left>
							<Icon name="phone" />
						</Left>
						<Body>
						<Text>Kontak</Text>
						</Body>
					</ListItem>
				</List>
			</Content>
		);
	}
}