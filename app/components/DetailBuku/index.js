import React, {Component} from 'react';
import {Container, Content, Text} from 'native-base';

export default class DetailBuku extends Component {
	render() {
		let buku = this.props.navigation.state.params;
		return(
			<Container>
				<Content>
					<Text>{buku.judul}</Text>
				</Content>
			</Container>
		);
	}
}