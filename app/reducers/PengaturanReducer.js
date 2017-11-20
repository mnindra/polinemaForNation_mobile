const PengaturanReducer = (state = {}, action) => {
	switch (action.type) {
		case 'SET_PENGATURAN': {
			return {
				...state,
				pengaturan: action.pengaturan
			};
		}
		default: {
			return state;
		}
	}
};

export default PengaturanReducer;