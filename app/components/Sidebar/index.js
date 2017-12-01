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
import styles from './styles';

export default class Sidebar extends Component {

	render() {

		return(
			<Content style={styles.content}>
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