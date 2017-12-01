const PengaturanReducer = (state = {}, action) => {
	switch (action.type) {
		case 'SET_PENGATURAN': {
			return action.pengaturan || state;
		}
		default: {
			return state;
		}
	}
};

export default PengaturanReducer;