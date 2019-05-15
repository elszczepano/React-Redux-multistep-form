const initialForm = {
	details: {},
	step: 1
};

const registerForm = (state = initialForm, action) => {
	switch(action.type) {
	case 'ADD_REGISTER_DETAIL':
		return {
			...state, details: Object.assign(state.details, action.details)
		};
	case 'CLEAR_REGISTER_FORM':
		return initialForm;
	case 'INCREMENT_STEP':
		return;
	default:
		return state;
	}
};

export default registerForm;