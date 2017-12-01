const KategoriReducer = (state = [], action) => {
	switch (action.type) {
		case 'SET_KATEGORI':
			return action.kategori || state;
		default:
			return state;
	}
};

export default KategoriReducer;