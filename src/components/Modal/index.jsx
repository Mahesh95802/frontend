import React from 'react';
import PropTypes from 'prop-types';

import './Modal.css';

const Modal = ({ children }) => {
	return (
		<div className="modal">
			<div className="modal-content">
				{children}
			</div>
		</div>
	);
};

Modal.propTypes = {
	children: PropTypes.node,
};

export default Modal;