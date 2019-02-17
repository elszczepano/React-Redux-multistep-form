import React, {Component} from 'react';
import PropTypes from 'prop-types';

class LoginField extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<input type={this.props.type}/>
		);
	}
}

LoginField.propTypes = {
	type: PropTypes.string.isRequired,
};

export default LoginField;