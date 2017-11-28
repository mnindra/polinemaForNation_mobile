import React, {Component} from 'react';
import {Container, Content, Text, Button, Grid, Col, Icon, Tab, Tabs} from 'native-base';
import {Image, View} from 'react-native';
import AutoHeightWebView from 'react-native-autoheight-webview';
import {host} from '../../config/api';
import styles from './styles';

export default class DetailBuku extends Component {

	static navigationOptions = {
		title: "Detail Buku"
	};

	render() {
		console.log(this.props);
		let buku = this.props.navigation.state.params;
		return(
			<Container style={styles.container}>
				<Content contentContainerStyle={styles.content} padder>

					<View style={styles.heading}>
						<Text style={styles.judul}>{buku.judul}</Text>
						<Text note>{buku.kategori.nama}</Text>
						<Text note style={{ fontSize: 20, color: buku.stok > 0 ? '#4bb34a' : '#ff5e3a' }}>{ buku.stok > 0 ? 'Tersedia' : 'Tidak Tersedia' }</Text>
					</View>

					<Image style={styles.sampul} source={{ uri: host + '/img/sampul/' + buku.sampul }} />

					<Button
						primary
						block
						style={styles.previewButton}
						onPress={() => this.props.lihatBuku(buku.file)}>
						<Text>Lihat Buku</Text>
					</Button>

					<Tabs initialPage={0}>
						<Tab
							heading="Detail"
							tabStyle={styles.tab}
							activeTabStyle={styles.tab}
							style={styles.tabContent}>
							<Grid>
								<Col style={styles.fitur}>
									<Content padder style={styles.fiturContent} contentContainerStyle={{alignItems: 'center'}}>
										<Icon name={'attach-money'} style={styles.icon} />
										<Text style={styles.fiturJudul}>Harga</Text>
										<Text note>Rp. {buku.harga}</Text>
									</Content>
								</Col>
								<Col style={styles.fitur}>
									<Content padder style={styles.fiturContent} contentContainerStyle={{alignItems: 'center'}}>
										<Icon name={'book'} style={styles.icon} />
										<Text style={styles.fiturJudul}>Jumlah Halaman</Text>
										<Text note>{buku.jumlah_halaman}</Text>
									</Content>
								</Col>
							</Grid>
							<Grid>
								<Col style={styles.fitur}>
									<Content padder style={styles.fiturContent} contentContainerStyle={{alignItems: 'center'}}>
										<Icon name={'date-range'} style={styles.icon} />
										<Text style={styles.fiturJudul}>Tahun Terbit</Text>
										<Text note>{buku.tahun_terbit}</Text>
									</Content>
								</Col>
								<Col style={styles.fitur}>
									<Content padder style={styles.fiturContent} contentContainerStyle={{alignItems: 'center'}}>
										<Icon name={'location-city'} style={styles.icon} />
										<Text style={styles.fiturJudul}>Penerbit</Text>
										<Text note>{buku.penerbit}</Text>
									</Content>
								</Col>
							</Grid>
						</Tab>
						<Tab
							heading="Deskripsi"
							tabStyle={styles.tab}
							activeTabStyle={styles.tab}
							style={styles.tabContent}>
							<AutoHeightWebView source={{html: buku.deskripsi}} />
						</Tab>
					</Tabs>
				</Content>
				<Button block success onPress={() => this.props.pemesanan()}>
					<Text>Pesan</Text>
				</Button>
			</Container>
		);
	}
}