import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import makeRequest from '../makeRequest';
import { VERIFY_TOKEN_ROUTE } from '../../common/endpoints';
import PropTypes from 'prop-types';

const ProtectedRoutes = ({ children }) => {

	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem('accessToken');
		if (!token) return setIsAuthenticated(false);
		makeRequest(VERIFY_TOKEN_ROUTE(token))
			.then((response) => {
				console.log(response);
				setIsAuthenticated(true);
			})
			.catch((error) => {
				console.log(error);
				navigate('/login');
				setIsAuthenticated(false);
			});
	}, []);

	return (
		isAuthenticated ? children : null
	);
};

ProtectedRoutes.propTypes = {
	children: PropTypes.node.isRequired
};


export default ProtectedRoutes;
