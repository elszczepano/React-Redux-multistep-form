import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Avatar = styled.div`
	margin: 0 auto;
	width: 250px;
	height: 250px;
	background-image: url('${({image}) => image}');
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
`;

const UploadedAvatar = ({image}) => {
	return (
		<>
			<Avatar image={image}/>
		</>
	);
};

UploadedAvatar.propTypes = {
	image: PropTypes.string.isRequired
};

export default UploadedAvatar;