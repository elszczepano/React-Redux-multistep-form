const initialForm = {
};

const registerForm = (state = initialForm, action) => {
	switch(action.type) {
	case 'ADD_REGISTER_DETAIL':
		return Object.assign(state, action.userDetails);
	case 'CLEAR_REGISTER_FORM':
		return initialForm;
	default:
		return state;
	}
};

export default registerForm;