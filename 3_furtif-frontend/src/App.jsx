import React from 'react';
import LoginForm from './components/LoginForm';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SecretData from './components/SecretData';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LoginForm replace to="/login" />} />
				<Route path="/secure-data" element={<SecretData />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
