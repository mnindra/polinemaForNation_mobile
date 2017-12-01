export const setBuku = (buku) => {
	return {
		type: 'SET_BUKU',
		buku
	};
};

export const setPengaturan = (pengaturan) => {
	return {
		type: 'SET_PENGATURAN',
		pengaturan
	};
};

export const setKategori = (kategori) => {
	return {
		type: 'SET_KATEGORI',
		kategori
	};
};