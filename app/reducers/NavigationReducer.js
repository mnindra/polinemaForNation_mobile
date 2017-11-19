import {NavigationActions} from 'react-navigation';

const initialState = Navigator.router.getStateForAction(NavigationActions.init());

// Navigation Reducer
const NavigationReducer = (state = initialState, action) => {
	const nextState = Navigator.router.getStateForAction(state, action);
	return nextState | state;
};

export default NavigationReducer;