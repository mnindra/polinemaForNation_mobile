const BukuReducer = (state = [], action) => {
	switch (action.type) {
		case 'SET_BUKU':
			return action.buku || state;
		default:
			return state;
	}
};

export default BukuReducer;