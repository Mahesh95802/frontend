import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import ProtectedRoutes from './utils/ProtectedRoutes';
import NotFoundPage from './pages/NotFoundPage';

import './App.css';
import CollectionPage from './pages/CollectionPage';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/home" element={<ProtectedRoutes><HomePage /></ProtectedRoutes>} />
					<Route path="/content-type/:contentTypeId" element={<ProtectedRoutes><CollectionPage /></ProtectedRoutes>} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
