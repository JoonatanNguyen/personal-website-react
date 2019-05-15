import React from 'react';
import  IconButton from 'material-ui/IconButton';
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';

import './style.css';

const PreviousButton = ({ onClick }) => (
	<IconButton onClick={onClick}>
		<ArrowLeft className="arrow-left-icon" />
	</IconButton>
);

export default PreviousButton;